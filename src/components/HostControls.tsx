'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Player } from '@/types/game';

interface HostControlsProps {
  players: Player[];
  onKickPlayer: (playerId: string) => void;
  onUpdateSettings: (settings: { drinkLevel: number; spiceLevel: number }) => void;
  currentSettings: {
    drinkLevel: number;
    spiceLevel: number;
  };
}

export default function HostControls({
  players,
  onKickPlayer,
  onUpdateSettings,
  currentSettings = { drinkLevel: 0, spiceLevel: 0 },
}: HostControlsProps) {
  const [showSettings, setShowSettings] = useState(false);

  const drinkLevelLabels: Record<number, string> = {
    0: '🍺 Casual (1-2 sips)',
    1: '🍻 Moderate (2-3 sips)',
    2: '🥂 Heavy (4-5 sips)'
  };

  const spiceLevelLabels: Record<number, string> = {
    0: '😊 Family Friendly',
    1: '🌶️ Spicy',
    2: '🔥 Extra Spicy'
  };

  const settings = currentSettings || { drinkLevel: 0, spiceLevel: 0 };

  return (
    <div className="bg-gray-900/80 rounded-lg p-4 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-emerald-400">Host Controls</h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowSettings(!showSettings)}
          className="bg-emerald-500 text-white px-4 py-2 rounded-lg"
        >
          {showSettings ? 'Hide Settings' : 'Show Settings'}
        </motion.button>
      </div>

      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-white mb-2">Drink Level</label>
                <div className="grid grid-cols-3 gap-2">
                  {[0, 1, 2].map((level) => (
                    <button
                      key={level}
                      onClick={() => onUpdateSettings({ ...settings, drinkLevel: level })}
                      className={`p-2 rounded-lg text-sm ${
                        settings.drinkLevel === level
                          ? 'bg-emerald-500 text-white'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      {drinkLevelLabels[level]}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-white mb-2">Spice Level</label>
                <div className="grid grid-cols-3 gap-2">
                  {[0, 1, 2].map((level) => (
                    <button
                      key={level}
                      onClick={() => onUpdateSettings({ ...settings, spiceLevel: level })}
                      className={`p-2 rounded-lg text-sm ${
                        settings.spiceLevel === level
                          ? 'bg-emerald-500 text-white'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      {spiceLevelLabels[level]}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-white mb-2">Player Management</h3>
              <div className="space-y-2">
                {players.filter(p => !p.isHost).map((player) => (
                  <div
                    key={player.id}
                    className="flex items-center justify-between bg-gray-800 p-2 rounded-lg"
                  >
                    <span className="text-white">{player.name}</span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => onKickPlayer(player.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-600"
                    >
                      Kick
                    </motion.button>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 