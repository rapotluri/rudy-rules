'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Prompt } from '@/types/prompt';
import { Player } from '@/types/game';

interface KeepThreePromptProps {
  prompt: Prompt;
  currentPlayer: Player;
  isCurrentPlayer: boolean;
  onComplete: () => void;
  onVote?: (optionId: string) => void;
}

export default function KeepThreePrompt({
  prompt,
  currentPlayer,
  isCurrentPlayer,
  onComplete,
  onVote
}: KeepThreePromptProps) {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (prompt.selectedOptions) {
      setSelectedItems(new Set(prompt.selectedOptions));
    }
  }, [prompt.selectedOptions]);

  const handleItemClick = (item: string) => {
    if (!isCurrentPlayer) return;

    const newSelected = new Set(selectedItems);
    if (selectedItems.has(item)) {
      newSelected.delete(item);
    } else if (selectedItems.size < 3) {
      newSelected.add(item);
    }
    setSelectedItems(newSelected);

    if (onVote) {
      console.log('Sending selection:', Array.from(newSelected));
      onVote(Array.from(newSelected).join(','));
    }
  };

  return (
    <div className="min-h-[60vh] max-h-[80vh] flex flex-col items-center justify-center p-4">
      {/* Player Instruction - Updated logic */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold text-white mb-2">
          {isCurrentPlayer 
            ? `${currentPlayer.name}, pick 3 to keep...`
            : selectedItems.size === 3 
              ? `Take a sip if you agree with ${currentPlayer.name}'s choices!`
              : `${currentPlayer.name} is picking 3 to keep...`}
        </h2>
      </motion.div>

      {/* Category */}
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-2xl text-gray-300 mb-8"
      >
        {prompt.keepThreeOptions?.category}
      </motion.h3>

      {/* Items Grid */}
      <div className="grid grid-cols-2 gap-4 w-full max-w-xl mb-8">
        {prompt.keepThreeOptions?.items.map((item) => (
          <motion.button
            key={item}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleItemClick(item)}
            className={`p-4 rounded-xl text-white font-semibold transition-all ${
              selectedItems.has(item)
                ? 'bg-emerald-500 shadow-lg shadow-emerald-500/20'
                : 'bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50'
            }`}
            disabled={!isCurrentPlayer || (selectedItems.size >= 3 && !selectedItems.has(item))}
          >
            {item}
          </motion.button>
        ))}
      </div>

      {/* Selection Counter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mb-8"
      >
        <p className="text-gray-400">
          {selectedItems.size}/3 selected
        </p>
      </motion.div>

      {/* End Turn Button - Only show for current player after 3 selections */}
      {selectedItems.size === 3 && isCurrentPlayer && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onComplete}
            className="bg-white/10 text-white px-12 py-4 rounded-lg text-xl font-bold shadow-lg border-2"
            style={{ borderColor: '#98FB98' }}
          >
            End Turn
          </motion.button>
        </motion.div>
      )}
    </div>
  );
} 