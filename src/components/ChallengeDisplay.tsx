'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Challenge, ChallengeType } from '@/types/challenge';
import { Player } from '@/types/game';
import { useEffect, useState } from 'react';

interface ChallengeDisplayProps {
  challenge: Challenge;
  currentPlayer: Player;
  isCurrentPlayer: boolean;
  onComplete: () => void;
}

const challengeThemes: Record<ChallengeType, { 
  color: string; 
  title: string; 
  emoji: string;
  garnish: string;
}> = {
  [ChallengeType.TRUTH]: {
    color: '#87CEEB',
    title: 'Truth',
    emoji: '🤔',
    garnish: '🍋' // Lemon
  },
  [ChallengeType.DARE]: {
    color: '#FF69B4',
    title: 'Dare',
    emoji: '😈',
    garnish: '🍒' // Cherry
  },
  [ChallengeType.DRINK]: {
    color: '#98FB98',
    title: 'Drink',
    emoji: '🍸',
    garnish: '🌿' // Mint
  },
  [ChallengeType.GROUP_DRINK]: {
    color: '#FFD700',
    title: 'Group Drink',
    emoji: '🍹',
    garnish: '🍊' // Orange
  },
  [ChallengeType.VOTE]: {
    color: '#DDA0DD',
    title: 'Vote',
    emoji: '✋',
    garnish: '🫐' // Blueberry
  },
  [ChallengeType.MINIGAME]: {
    color: '#FF7F50',
    title: 'Mini Game',
    emoji: '🎮',
    garnish: '🍓' // Strawberry
  }
};

export default function ChallengeDisplay({
  challenge,
  currentPlayer,
  isCurrentPlayer,
  onComplete
}: ChallengeDisplayProps) {
  const [showPrompt, setShowPrompt] = useState(false);
  const theme = challengeThemes[challenge.type];

  useEffect(() => {
    const timer = setTimeout(() => setShowPrompt(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-between p-4 relative overflow-hidden">
      {/* Animated Liquid Background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute bottom-0 left-0 right-0"
          style={{ 
            background: `linear-gradient(to top, 
              ${theme.color}20 0%,
              ${theme.color}10 50%,
              transparent 100%
            )`
          }}
          initial={{ height: '0%' }}
          animate={{ height: '100%' }}
          transition={{
            duration: 1.5,
            ease: "easeOut"
          }}
        >
          {/* Multiple Floating Garnishes */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`garnish-${i}`}
              className="absolute text-4xl"
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: -50,
                rotate: Math.random() * 360,
                scale: 0 
              }}
              animate={{ 
                x: [
                  Math.random() * window.innerWidth,
                  Math.random() * window.innerWidth,
                  Math.random() * window.innerWidth,
                  Math.random() * window.innerWidth
                ],
                y: [
                  Math.random() * window.innerHeight * 0.8,
                  Math.random() * window.innerHeight * 0.8,
                  Math.random() * window.innerHeight * 0.8,
                  Math.random() * window.innerHeight * 0.8
                ],
                rotate: [0, 180, 360],
                scale: 1
              }}
              transition={{
                duration: 20 + i * 5, // Different duration for each garnish
                repeat: Infinity,
                ease: "linear",
                times: [0, 0.33, 0.66, 1],
                delay: i * 0.5
              }}
            >
              {theme.garnish}
            </motion.div>
          ))}

          {/* Slower Bubble animations */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`bubble-${i}`}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 15 + 8,
                height: Math.random() * 15 + 8,
                left: `${Math.random() * 100}%`,
                backgroundColor: theme.color,
                opacity: 0.2
              }}
              initial={{ y: '100vh' }}
              animate={{ y: '-100vh' }}
              transition={{
                duration: Math.random() * 5 + 4,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "linear"
              }}
            />
          ))}

          {/* Ice Cubes */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`ice-${i}`}
              className="absolute rounded-lg bg-white/10"
              style={{
                width: Math.random() * 30 + 20,
                height: Math.random() * 30 + 20,
                left: `${20 + Math.random() * 60}%`,
                rotate: Math.random() * 45,
                backdropFilter: 'blur(8px)'
              }}
              initial={{ y: '100vh' }}
              animate={{
                y: '-100vh',
                rotate: [0, 180, 360],
                x: [0, 30, -30, 0]
              }}
              transition={{
                duration: Math.random() * 8 + 6,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "linear"
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-2xl mx-auto">
        {/* Challenge Title */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold" style={{ color: theme.color }}>
            {theme.emoji} {theme.title} {theme.emoji}
          </h2>
        </motion.div>

        {/* Challenge Content */}
        <AnimatePresence>
          {showPrompt && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-black/50 rounded-2xl p-8 shadow-xl border border-white/10"
            >
              <p className="text-white text-2xl text-center font-medium mb-6">
                {challenge.prompt}
              </p>

              {/* Difficulty Indicators */}
              <div className="flex justify-center gap-6">
                {challenge.spiceLevel > 0 && (
                  <div className="flex items-center gap-1">
                    {[...Array(challenge.spiceLevel)].map((_, i) => (
                      <motion.span
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="text-2xl"
                      >
                        🌶️
                      </motion.span>
                    ))}
                  </div>
                )}
                {challenge.drinkLevel > 0 && (
                  <div className="flex items-center gap-1">
                    {[...Array(challenge.drinkLevel)].map((_, i) => (
                      <motion.span
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="text-2xl"
                      >
                        🍺
                      </motion.span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action Button */}
        {isCurrentPlayer && (
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
              style={{ borderColor: theme.color }}
            >
              Complete Challenge
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
} 