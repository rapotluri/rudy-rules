'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Prompt } from '@/types/prompt';
import { Player } from '@/types/game';

interface ReactionPromptProps {
  prompt: Prompt;
  currentPlayer: Player;
  allPlayers: Player[];
  isCurrentPlayer: boolean;
  onComplete: () => void;
  onVote?: (optionId: string) => void;
}

export default function ReactionPrompt({
  prompt,
  currentPlayer,
  allPlayers,
  isCurrentPlayer,
  onComplete,
  onVote
}: ReactionPromptProps) {
  const [instructionTimer, setInstructionTimer] = useState(10);
  const [gameStarted, setGameStarted] = useState(false);
  const [reactionStarted, setReactionStarted] = useState(false);
  const [reactionTime, setReactionTime] = useState<number | null>(null);
  const [tooEarly, setTooEarly] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);

  // Instruction timer countdown
  useEffect(() => {
    if (instructionTimer > 0) {
      const timer = setInterval(() => {
        setInstructionTimer(prev => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (instructionTimer === 0 && !gameStarted) {
      setGameStarted(true);
      // Random delay between 2-5 seconds
      const delay = Math.random() * 3000 + 2000;
      setTimeout(() => {
        if (onVote) {
          onVote('start');
        }
      }, delay);
    }
  }, [instructionTimer, gameStarted, onVote]);

  // Sync with Firebase
  useEffect(() => {
    if (prompt.minigameOptions?.reactionStarted) {
      setReactionStarted(true);
      setStartTime(Date.now());
    }
  }, [prompt.minigameOptions?.reactionStarted]);

  const handleClick = () => {
    if (!reactionStarted) {
      setTooEarly(true);
      if (onVote) {
        onVote('10000');  // Send a high number to indicate failure
      }
      return;
    }

    if (startTime && !reactionTime) {  // Only record first click
      const time = Date.now() - startTime;
      setReactionTime(time);
      if (onVote) {
        onVote(time.toString());
      }
    }
  };

  // Get all reaction times and find the slowest player
  const allReactionTimes = prompt.minigameOptions?.allReactionTimes || {};
  const allPlayersResponded = Object.keys(allReactionTimes).length === allPlayers.length;
  
  const sortedResults = Object.entries(allReactionTimes)
    .sort(([, timeA], [, timeB]) => timeA - timeB)
    .map(([playerId, time]) => ({
      player: allPlayers.find(p => p.id === playerId)!,
      time
    }));

  const slowestPlayer = sortedResults[sortedResults.length - 1];

  return (
    <div className="min-h-[60vh] max-h-[80vh] flex flex-col items-center justify-center p-4">
      {/* Instructions with Timer */}
      {instructionTimer > 0 && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <div className="text-xl text-gray-300 max-w-xl mx-auto mb-4">
            <p>
              {prompt.minigameOptions?.instructions}
            </p>
          </div>
          <div className="text-4xl font-bold text-white">
            {instructionTimer}
          </div>
        </motion.div>
      )}

      {/* Game Area - Only show if not all players have responded */}
      {!allPlayersResponded && instructionTimer === 0 && (
        <motion.div
          className={`w-full max-w-xl aspect-square rounded-3xl flex items-center justify-center text-white text-2xl font-bold transition-colors duration-100
            ${!gameStarted ? 'bg-gray-800' : reactionStarted ? 'bg-red-500' : 'bg-emerald-500'}`}
          onClick={gameStarted ? handleClick : undefined}
        >
          {tooEarly ? (
            "Too early! You lose!"
          ) : reactionTime ? (
            `Your time: ${reactionTime}ms`
          ) : reactionStarted ? (
            "TAP NOW!"
          ) : (
            "Wait for red..."
          )}
        </motion.div>
      )}

      {/* Results Display - Show when all players have responded */}
      {allPlayersResponded && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center bg-black/20 backdrop-blur-sm rounded-xl p-6 w-full max-w-md"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Results</h3>
          
          {/* Results Table */}
          <div className="overflow-hidden rounded-lg mb-8">
            <table className="w-full">
              <thead>
                <tr className="bg-white/10">
                  <th className="py-3 text-left pl-4">Player</th>
                  <th className="py-3 text-right pr-4">Time</th>
                </tr>
              </thead>
              <tbody>
                {sortedResults.map(({ player, time }, index) => (
                  <motion.tr
                    key={player.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`border-t border-white/10 ${
                      index === sortedResults.length - 1 ? 'text-red-400' : 
                      index === 0 ? 'text-emerald-400' : 'text-white'
                    }`}
                  >
                    <td className="py-3 pl-4 font-semibold">
                      {player.name}
                      {index === 0 && " 🏆"}
                      {index === sortedResults.length - 1 && " 🍺"}
                    </td>
                    <td className="py-3 pr-4 text-right font-mono">
                      {time}ms
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
            {slowestPlayer.player.name} drinks!
          </motion.div>

          {/* End Turn Button */}
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