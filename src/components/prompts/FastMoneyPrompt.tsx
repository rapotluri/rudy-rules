'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Prompt } from '@/types/prompt';
import { Player } from '@/types/game';

interface FastMoneyPromptProps {
  prompt: Prompt;
  currentPlayer: Player;
  isCurrentPlayer: boolean;
  onComplete: () => void;
  onVote?: (optionId: string) => void;
  showTimedCategory?: () => void;
}

export default function FastMoneyPrompt({
  prompt,
  currentPlayer,
  isCurrentPlayer,
  onComplete,
  onVote,
  showTimedCategory
}: FastMoneyPromptProps) {
  const [timeLeft, setTimeLeft] = useState(prompt.FastMoneyOptions?.timeLimit || 15);
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerEnded, setTimerEnded] = useState(false);

  const showCategory = prompt.FastMoneyOptions?.showCategory || false;

  useEffect(() => {
    if (showCategory && !timerStarted) {
      setTimerStarted(true);
    }
  }, [showCategory, timerStarted]);

  useEffect(() => {
    if (timerStarted && !timerEnded) {
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
  }, [timerStarted, timerEnded]);

  const handleShowCategory = () => {
    if (showTimedCategory) {
      showTimedCategory();
    }
  };

  return (
    <div className="min-h-[60vh] max-h-[80vh] flex flex-col items-center justify-center p-4">
      {/* Instructions */}
      {!showCategory && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <div className="text-xl text-gray-300 max-w-xl mx-auto">
            <p>
              List as many items from the category shown. Give out that many sips, 
              or drink if you can't name any! Other players keep count.
            </p>
          </div>
        </motion.div>
      )}

      {/* Category Display */}
      {showCategory && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-4xl font-bold text-white text-center mb-12 max-w-xl mx-auto"
        >
          {prompt.FastMoneyOptions?.category}
        </motion.div>
      )}

      {/* Timer */}
      {timerStarted && !timerEnded && (
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
          {!showCategory && (
            <motion.button
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleShowCategory}
              className="bg-white/10 text-white px-12 py-4 rounded-lg text-xl font-bold shadow-lg border-2 border-emerald-500"
            >
              Show Category
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