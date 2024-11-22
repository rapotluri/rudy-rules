'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Prompt } from '@/types/prompt';
import { Player } from '@/types/game';

interface TongueTwisterPromptProps {
  prompt: Prompt;
  currentPlayer: Player;
  isCurrentPlayer: boolean;
  onComplete: () => void;
  onVote?: (optionId: string) => void;
  showTimedCategory?: () => void;
}

export default function TongueTwisterPrompt({
  prompt,
  currentPlayer,
  isCurrentPlayer,
  onComplete,
  onVote,
  showTimedCategory
}: TongueTwisterPromptProps) {
  const [timeLeft, setTimeLeft] = useState(prompt.TongueTwisterOptions?.timeLimit || 15);
  const [timerEnded, setTimerEnded] = useState(false);

  const showPhrase = prompt.TongueTwisterOptions?.showPhrase || false;

  // Start timer when phrase is shown
  useEffect(() => {
    if (showPhrase && !timerEnded) {
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
  }, [showPhrase, timerEnded]);

  const handleShowPhrase = () => {
    if (showTimedCategory) {
      showTimedCategory();
    }
  };

  return (
    <div className="min-h-[60vh] max-h-[80vh] flex flex-col items-center justify-center p-4">
      {/* Instructions */}
      {!showPhrase && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <div className="text-xl text-gray-300 max-w-xl mx-auto">
            <p>
              Say the tongue twister 3 times fast. Give out 3 sips if you succeed, 
              drink if you fail! Other players judge.
            </p>
          </div>
        </motion.div>
      )}

      {/* Phrase Display - shown to everyone after button press */}
      {showPhrase && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-4xl font-bold text-white text-center mb-12 max-w-xl mx-auto"
        >
          {prompt.TongueTwisterOptions?.phrase}
        </motion.div>
      )}

      {/* Timer - shown to everyone once phrase is revealed */}
      {showPhrase && !timerEnded && (
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
          {!showPhrase && (
            <motion.button
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleShowPhrase}
              className="bg-white/10 text-white px-12 py-4 rounded-lg text-xl font-bold shadow-lg border-2 border-emerald-500"
            >
              Show Phrase
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