'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Prompt } from '@/types/prompt';
import { Player } from '@/types/game';

interface CharadesPromptProps {
  prompt: Prompt;
  currentPlayer: Player;
  isCurrentPlayer: boolean;
  onComplete: () => void;
  onVote?: (optionId: string) => void;
  showTimedCategory?: () => void;
}

export default function CharadesPrompt({
  prompt,
  currentPlayer,
  isCurrentPlayer,
  onComplete,
  onVote,
  showTimedCategory
}: CharadesPromptProps) {
  const [timeLeft, setTimeLeft] = useState(prompt.CharadesOptions?.timeLimit || 30);
  const [timerEnded, setTimerEnded] = useState(false);

  const showWord = prompt.CharadesOptions?.showWord || false;

  // Start timer when word is shown
  useEffect(() => {
    if (showWord && !timerEnded) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setTimerEnded(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [showWord, timerEnded]);

  const handleShowWord = () => {
    if (showTimedCategory) {
      showTimedCategory();
    }
  };

  return (
    <div className="min-h-[60vh] max-h-[80vh] flex flex-col items-center justify-center p-4">
      {/* Instructions */}
      {!showWord && isCurrentPlayer && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <div className="text-xl text-gray-300 max-w-xl mx-auto">
            <p>
              You'll be shown a word to act out! Other players will try to guess it.
              No speaking allowed!
            </p>
          </div>
        </motion.div>
      )}

      {!showWord && !isCurrentPlayer && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <div className="text-xl text-gray-300 max-w-xl mx-auto">
            <p>
              {currentPlayer.name} will act out a word! Try to guess it!
            </p>
          </div>
        </motion.div>
      )}

      {/* Word Display - only shown to current player */}
      {showWord && isCurrentPlayer && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-4xl font-bold text-white text-center mb-12 max-w-xl mx-auto"
        >
          {prompt.CharadesOptions?.word}
        </motion.div>
      )}

      {/* Timer - shown to everyone once word is revealed */}
      {showWord && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-6xl font-bold mb-8"
          style={{ 
            color: timeLeft <= 5 ? '#ef4444' : '#ffffff'
          }}
        >
          {timeLeft}
        </motion.div>
      )}

      {/* Time's Up Message */}
      {timerEnded && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-4xl font-bold text-red-500 mb-8"
        >
          Time's Up!
        </motion.div>
      )}

      {/* Action Buttons */}
      {isCurrentPlayer && (
        <>
          {!showWord && (
            <motion.button
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleShowWord}
              className="bg-white/10 text-white px-12 py-4 rounded-lg text-xl font-bold shadow-lg border-2 border-emerald-500"
            >
              Show Word
            </motion.button>
          )}
          {timerEnded && (
            <motion.button
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onComplete}
              className="bg-white/10 text-white px-12 py-4 rounded-lg text-xl font-bold shadow-lg border-2 border-emerald-500"
            >
              End Turn
            </motion.button>
          )}
        </>
      )}
    </div>
  );
} 