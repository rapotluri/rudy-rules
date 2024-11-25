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
  endCharadesTimer?: () => void;
}

export default function CharadesPrompt({
  prompt,
  currentPlayer,
  isCurrentPlayer,
  onComplete,
  onVote,
  showTimedCategory,
  endCharadesTimer
}: CharadesPromptProps) {
  const [timeLeft, setTimeLeft] = useState(prompt.CharadesOptions?.timeLimit || 30);

  const showWord = prompt.CharadesOptions?.showWord || false;
  const timerEnded = prompt.CharadesOptions?.timerEnded || false;

  // Start timer when word is shown
  useEffect(() => {
    if (showWord && !timerEnded) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            if (endCharadesTimer) {
              endCharadesTimer();
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [showWord, timerEnded, endCharadesTimer]);

  const handleShowWord = () => {
    if (showTimedCategory) {
      showTimedCategory();
    }
  };

  const handleEndTimer = () => {
    if (endCharadesTimer) {
      endCharadesTimer();
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

      {/* Word Display - shown to current player during game, shown to everyone after timer ends */}
      {((showWord && isCurrentPlayer) || timerEnded) && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-4xl font-bold text-white text-center mb-12 max-w-xl mx-auto"
        >
          {timerEnded && !isCurrentPlayer ? (
            <div>
              <div className="text-xl text-gray-400 mb-2">The word was:</div>
              <div className="text-emerald-400">{prompt.CharadesOptions?.word}</div>
            </div>
          ) : (
            prompt.CharadesOptions?.word
          )}
        </motion.div>
      )}

      {/* Timer - shown to everyone once word is revealed */}
      {showWord && !timerEnded && (
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
          {showWord && !timerEnded && (
            <motion.button
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleEndTimer}
              className="bg-white/10 text-white px-12 py-4 rounded-lg text-xl font-bold shadow-lg border-2 border-emerald-500"
            >
              Someone Guessed It!
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