import { useState } from 'react';
import { motion } from 'framer-motion';
import { Player } from '@/types/game';
import { Prompt } from '@/types/prompt';

interface BattleshipGameProps {
  prompt: Prompt;
  currentPlayer: Player;
  allPlayers: Player[];
  isCurrentPlayer: boolean;
  onComplete: () => void;
  onVote?: (move: string) => void;
}

export default function BattleshipGame({
  prompt,
  currentPlayer,
  allPlayers,
  isCurrentPlayer,
  onComplete,
  onVote
}: BattleshipGameProps) {
  const gridSize = 5;  // 5x5 grid
  const [hasShot, setHasShot] = useState(false);  // Add local state to track shot

  const ship = prompt.BattleshipOptions?.ship;
  const shots = prompt.BattleshipOptions?.shots || {};
  const hits = prompt.BattleshipOptions?.hits || [];
  const gameEnded = prompt.BattleshipOptions?.gameEnded || false;

  // Determine phase based on game state
  const phase = ship ? 'shooting' : 'placement';

  // Add cursor style based on whether cell is clickable
  const getCellStyle = (x: number, y: number) => {
    if (gameEnded) return 'cursor-default';
    
    if (phase === 'placement' && isCurrentPlayer && !ship) {
      return 'cursor-pointer';
    }
    
    if (phase === 'shooting' && !isCurrentPlayer && !hasShot) {  // Use local state
      return 'cursor-pointer';
    }
    
    return 'cursor-default';
  };

  const handleCellClick = (x: number, y: number) => {
    if (gameEnded || hasShot) return;  // Use local state

    if (phase === 'placement' && isCurrentPlayer && !ship) {
      // Place ship
      onVote?.(`place:${x},${y}`);
    } else if (phase === 'shooting' && !isCurrentPlayer) {
      // Only non-current players who haven't shot yet can shoot
      onVote?.(`shoot:${x},${y}`);
      setHasShot(true);  // Set local state after shooting
    }
  };

  return (
    <div className="min-h-[60vh] max-h-[80vh] flex flex-col items-center justify-center p-4">
      {!gameEnded ? (
        <>
          {/* Instructions */}
          <div className="text-lg text-gray-300 mb-6 text-center max-w-md">
            {!ship ? (
              isCurrentPlayer ? 
                prompt.BattleshipOptions?.instructions :
                "Waiting for player to place their ship..."
            ) : (
              isCurrentPlayer ? 
                "Wait while other players try to find your ship!" :
                hasShot ?  // Use local state
                  "Waiting for other players to take their shots..." :
                  "Find and sink their ship! Miss = You drink, Hit = They drink!"
            )}
          </div>
          
          <div className="text-2xl text-white mb-6">
            {!ship ? (
              isCurrentPlayer ? 
                "Place your ship!" :
                "Waiting for ship placement..."
            ) : (
              isCurrentPlayer ? 
                "Other players are trying to find your ship!" :
                hasShot ?  // Use local state
                  "Shot fired! Waiting for others..." :
                  "Take your shot!"
            )}
          </div>
          
          {/* Game Grid */}
          <div className="grid gap-1 bg-white/10 p-2 rounded-lg">
            {[...Array(gridSize)].map((_, y) => (
              <div key={y} className="flex gap-1">
                {[...Array(gridSize)].map((_, x) => {
                  const isShipHere = isCurrentPlayer && ship?.x === x && ship?.y === y;
                  const shotHere = Object.entries(shots).find(([_, shot]) => 
                    shot.x === x && shot.y === y
                  );
                  const isHit = shotHere && ship?.x === x && ship?.y === y;

                  return (
                    <motion.div
                      key={`${x}-${y}`}
                      whileHover={!hasShot && getCellStyle(x, y) === 'cursor-pointer' ? { scale: 1.1 } : {}}
                      className={`w-12 h-12 rounded-lg flex items-center justify-center
                        ${isShipHere ? 'bg-emerald-500' : 'bg-white/20'}
                        ${shotHere ? 'bg-red-500/50' : ''}
                        ${isHit ? 'bg-red-500' : ''}
                        ${hasShot ? 'cursor-not-allowed' : getCellStyle(x, y)}
                      `}
                      onClick={hasShot ? undefined : () => handleCellClick(x, y)}
                    >
                      {isHit && "💥"}
                      {isShipHere && "⛵"}
                      {shotHere && !isHit && "🌊"}
                    </motion.div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Player Status */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            {allPlayers.filter(p => p.id !== currentPlayer.id).map(player => (
              <div 
                key={player.id}
                className={`p-3 rounded-lg ${
                  shots[player.id] ? 'bg-emerald-500/20' : 'bg-white/10'
                }`}
              >
                <div className="text-white">{player.name}</div>
                <div className="text-sm text-gray-300">
                  {shots[player.id] ? "Shot fired!" : "Taking aim..."}
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
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
                  <th className="py-3 text-right pr-4">Result</th>
                </tr>
              </thead>
              <tbody>
                {allPlayers.map((player, index) => {
                  const playerShot = shots[player.id];
                  const hitShip = playerShot && ship?.x === playerShot.x && ship?.y === playerShot.y;

                  return (
                    <motion.tr
                      key={player.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`border-t border-white/10 text-white ${
                        hitShip ? 'text-emerald-400' : 
                        player.id === currentPlayer.id ? 'text-white' :
                        playerShot ? 'text-red-400' : 'text-gray-400'
                      }`}
                    >
                      <td className="py-3 pl-4 font-semibold">
                        {player.name}
                        {hitShip && " 🎯"}
                      </td>
                      <td className="py-3 pr-4 text-right">
                        {player.id === currentPlayer.id ? "Ship Captain" :
                          hitShip ? "Hit!" : (playerShot ? "Miss" : "No shot")}
                      </td>
                    </motion.tr>
                  );
                })}
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
            {hits.length > 0 ? (
              <>
                {currentPlayer.name} drinks!
                <div className="text-lg mt-2 text-white">
                  {hits.map(playerId => {
                    const player = allPlayers.find(p => p.id === playerId);
                    return player ? `${player.name} can give out a drink!` : null;
                  }).filter(Boolean).join(', ')}
                </div>
              </>
            ) : (
              <>
                {Object.entries(shots).map(([playerId]) => {
                  const player = allPlayers.find(p => p.id === playerId);
                  return player ? `${player.name} drinks!` : null;
                }).filter(Boolean).join(', ')}
              </>
            )}
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