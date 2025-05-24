import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Player } from '@/types/game';
import { Prompt } from '@/types/prompt';

interface PopLockGameProps {
  prompt: Prompt;
  currentPlayer: Player;
  allPlayers: Player[];
  isCurrentPlayer: boolean;
  onComplete: () => void;
  onVote?: (score: string) => void;
}

export default function PopLockGame({
  prompt,
  currentPlayer,
  allPlayers,
  isCurrentPlayer,
  onComplete,
  onVote
}: PopLockGameProps) {
  const [score, setScore] = useState(0);
  const [targetAngle, setTargetAngle] = useState(0);
  const [gameActive, setGameActive] = useState(true);
  const [timeLeft, setTimeLeft] = useState(60);
  const speed = prompt.PopLockOptions?.speed || 3;
  const targetScore = prompt.PopLockOptions?.targetScore || 5;
  const startTime = useRef(Date.now());
  const allScores = prompt.PopLockOptions?.scores || {};

  // Check if all players have submitted scores
  const gameEnded = prompt.PopLockOptions?.gameEnded || false;

  // Timer effect
  useEffect(() => {
    if (!gameActive || gameEnded) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setGameActive(false);
          onVote?.(score.toString());
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameActive, onVote, score, gameEnded]);

  // Update target angle when score changes
  useEffect(() => {
    setTargetAngle(Math.random() * 360);
  }, [score]);

  const handleClick = () => {
    if (!gameActive) return;

    const elapsedTime = (Date.now() - startTime.current) / 1000;
    const currentRotation = (elapsedTime / speed) % 1 * 360;
    const difference = Math.abs(currentRotation - targetAngle);
    
    if (difference <= 20 || difference >= 340) {
      const newScore = score + 1;
      setScore(newScore);
      
      onVote?.(newScore.toString());
      
      if (newScore >= targetScore) {
        setGameActive(false);
      }
    }
  };

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Sort players by score
  const sortedResults = Object.entries(allScores)
    .sort(([, scoreA], [, scoreB]) => scoreB - scoreA)
    .map(([playerId, playerScore]) => ({
      player: allPlayers.find(p => p.id === playerId)!,
      score: playerScore
    }));

  return (
    <div className="flex flex-col items-center justify-center p-4">
      {/* Timer */}
      <div className="text-3xl text-white font-mono mb-8">
        {formatTime(timeLeft)}
      </div>

      {!gameEnded ? (
        <>
          <div className="text-2xl text-white mb-6">Your Score: {score}/{targetScore}</div>
          
          <div 
            className="relative w-80 h-80 cursor-pointer mb-8"
            onClick={handleClick}
          >
            <div className="absolute inset-0 border-4 border-white/30 rounded-full" />
            
            <motion.div 
              className="absolute w-6 h-6 bg-green-500 rounded-full"
              style={{
                top: '50%',
                left: '50%',
                transform: `rotate(${targetAngle}deg) translateY(-150px) translateX(-50%)`
              }}
            />
            
            <motion.div 
              className="absolute top-0 left-1/2 w-1 h-1/2 bg-red-500 origin-bottom"
              style={{ transformOrigin: 'bottom center' }}
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: speed,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>

          <div className="text-white text-center">
            {prompt.PopLockOptions?.instructions || "Tap when the line hits the dot!"}
          </div>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center bg-black/20 backdrop-blur-sm rounded-xl p-6 w-full max-w-md flex flex-col"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Results</h3>
          
          {/* Results Table - Now scrollable */}
          <div className="overflow-y-auto max-h-[40vh] rounded-lg mb-8">
            <table className="w-full">
              <thead className="sticky top-0 bg-black/20 backdrop-blur-sm">
                <tr className="bg-white/10">
                  <th className="py-3 text-left pl-4">Player</th>
                  <th className="py-3 text-right pr-4">Score</th>
                </tr>
              </thead>
              <tbody>
                {sortedResults.map(({ player, score }, index) => (
                  <motion.tr
                    key={player.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`border-t border-white/10 ${
                      index === 0 ? 'text-emerald-400' : 
                      index === sortedResults.length - 1 ? 'text-red-400' : 
                      'text-white'
                    }`}
                  >
                    <td className="py-3 pl-4 font-semibold">
                      {player.name}
                      {index === 0 && " 🏆"}
                      {index === sortedResults.length - 1 && " 🍺"}
                    </td>
                    <td className="py-3 pr-4 text-right font-mono">
                      {score}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Drinking Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-2xl font-bold text-red-500"
          >
            {sortedResults[sortedResults.length - 1]?.player.name} drinks!
          </motion.div>

          {/* End Turn Button - Now fixed at bottom */}
          {isCurrentPlayer && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onComplete}
              className="mt-8 bg-white/10 text-white px-12 py-4 rounded-lg text-xl font-bold shadow-lg border-2 border-emerald-500"
            >
              End Turn
            </motion.button>
          )}
        </motion.div>
      )}
    </div>
  );
} 