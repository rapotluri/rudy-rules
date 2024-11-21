'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Prompt, PromptType } from '@/types/prompt';
import { Player } from '@/types/game';
import { useEffect, useState } from 'react';
import VotingPrompt from './prompts/VotingPrompt';
import TwoOptionPrompt from './prompts/TwoOptionPrompt';
import KeepThreePrompt from './prompts/KeepThreePrompt';
import TimedPrompt from './prompts/TimedPrompt';
import ReactionPrompt from './prompts/ReactionPrompt';

interface PromptDisplayProps {
  prompt: Prompt;
  currentPlayer: Player;
  allPlayers: Player[];
  isCurrentPlayer: boolean;
  onComplete: () => void;
  onVote?: (optionId: string) => void;
  showTimedCategory?: () => void;
}

const promptThemes: Record<PromptType, { 
  color: string; 
  title: string; 
  emoji: string;
  garnish: string;
}> = {
  [PromptType.TRUTH]: {
    color: '#87CEEB',
    title: 'Truth',
    emoji: '🤔',
    garnish: '🍋' // Lemon
  },
  [PromptType.DARE]: {
    color: '#FF69B4',
    title: 'Dare',
    emoji: '😈',
    garnish: '🍒' // Cherry
  },
  [PromptType.DRINK]: {
    color: '#98FB98',
    title: 'Drink',
    emoji: '🍸',
    garnish: '🌿' // Mint
  },
  [PromptType.GROUP_DRINK]: {
    color: '#FFD700',
    title: 'Group Drink',
    emoji: '🍹',
    garnish: '🍊' // Orange
  },
  [PromptType.VOTE]: {
    color: '#DDA0DD',
    title: 'Vote',
    emoji: '✋',
    garnish: '🫐' // Blueberry
  },
  [PromptType.TWO_OPTION_VOTE]: {
    color: '#FF9933',
    title: 'Vote',
    emoji: '⚖️',
    garnish: '🍊'
  },
  [PromptType.MINIGAME]: {
    color: '#FF7F50',
    title: 'Mini Game',
    emoji: '🎮',
    garnish: '🍓' // Strawberry
  },
  [PromptType.KEEP_THREE]: {
    color: '#98FB98',  // Light green
    title: 'Keep 3',
    emoji: '🎯',
    garnish: '🍀'  // Four leaf clover
  },
  [PromptType.TIMED]: {
    color: '#FF6B6B',  // This will be overridden based on style
    title: '',  // This will be overridden based on style
    emoji: '⏱️',
    garnish: '🌶️'
  },
};

const getTimedTheme = (prompt: Prompt) => {
  const baseTheme = promptThemes[PromptType.TIMED];
  
  if (prompt.timedOptions?.style === 'fast_money') {
    return {
      ...baseTheme,
      color: '#FF6B6B',  // Coral red
      title: 'Fast Money',
      emoji: '⏱️'
    };
  } else if (prompt.timedOptions?.style === 'tongue_twister') {
    return {
      ...baseTheme,
      color: '#9370DB',  // Medium purple
      title: 'Tongue Twister',
      emoji: '👅'
    };
  }
  
  return baseTheme;
};

export default function PromptDisplay({
  prompt,
  currentPlayer,
  allPlayers,
  isCurrentPlayer,
  onComplete,
  onVote,
  showTimedCategory
}: PromptDisplayProps) {
  const [showPrompt, setShowPrompt] = useState(false);
  const theme = prompt.type === PromptType.TIMED ? getTimedTheme(prompt) : promptThemes[prompt.type];

  useEffect(() => {
    const timer = setTimeout(() => setShowPrompt(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const renderPromptContent = () => {
    switch (prompt.type) {
      case PromptType.VOTE:
        return (
          <VotingPrompt
            prompt={prompt}
            currentPlayer={currentPlayer}
            allPlayers={allPlayers}
            isCurrentPlayer={isCurrentPlayer}
            onVote={onVote!}
            onComplete={onComplete}
          />
        );
      case PromptType.TWO_OPTION_VOTE:
        return (
          <TwoOptionPrompt
            prompt={prompt}
            currentPlayer={currentPlayer}
            allPlayers={allPlayers}
            isCurrentPlayer={isCurrentPlayer}
            onVote={onVote!}
            onComplete={onComplete}
          />
        );
      case PromptType.KEEP_THREE:
        return (
          <KeepThreePrompt
            prompt={prompt}
            currentPlayer={currentPlayer}
            isCurrentPlayer={isCurrentPlayer}
            onComplete={onComplete}
            onVote={onVote}
          />
        );
      case PromptType.TIMED:
        return (
          <TimedPrompt
            prompt={prompt}
            currentPlayer={currentPlayer}
            isCurrentPlayer={isCurrentPlayer}
            onComplete={onComplete}
            onVote={onVote}
            showTimedCategory={showTimedCategory}
          />
        );
      case PromptType.MINIGAME:
        if (prompt.minigameOptions?.style === 'reaction') {
          return (
            <ReactionPrompt
              prompt={prompt}
              currentPlayer={currentPlayer}
              allPlayers={allPlayers}
              isCurrentPlayer={isCurrentPlayer}
              onComplete={onComplete}
              onVote={onVote}
            />
          );
        }
        return null;
      default:
        return (
          <AnimatePresence>
            {showPrompt && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-black/40 backdrop-blur-md rounded-2xl p-8 shadow-2xl"
              >
                <p className="text-white text-2xl text-center mb-6">
                  {prompt.prompt}
                </p>

                {/* Difficulty Indicators */}
                <div className="flex justify-center gap-6">
                  {prompt.spiceLevel > 0 && (
                    <div className="flex items-center gap-1">
                      {[...Array(prompt.spiceLevel)].map((_, i) => (
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
                  {prompt.drinkLevel > 0 && (
                    <div className="flex items-center gap-1">
                      {[...Array(prompt.drinkLevel)].map((_, i) => (
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
        );
    }
  };

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
                duration: 20 + i * 5,
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
        {/* Prompt Title */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12 px-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold flex items-center justify-center gap-3 whitespace-nowrap">
            <span className="inline-flex items-center justify-center w-12 h-12">{theme.emoji}</span>
            <span>{prompt.title || theme.title}</span>
            <span className="inline-flex items-center justify-center w-12 h-12">{theme.emoji}</span>
          </h2>
        </motion.div>

        {/* Prompt Content */}
        {renderPromptContent()}

        {/* Action Button (only for non-voting/non-timed/non-minigame prompts) */}
        {prompt.type !== PromptType.VOTE && 
         prompt.type !== PromptType.TWO_OPTION_VOTE && 
         prompt.type !== PromptType.KEEP_THREE &&
         prompt.type !== PromptType.TIMED &&
         prompt.type !== PromptType.MINIGAME &&
         isCurrentPlayer && (
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
              Complete Prompt
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
} 