'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Prompt } from '@/types/prompt';
import { Player } from '@/types/game';

interface TwoOptionPromptProps {
  prompt: Prompt;
  currentPlayer: Player;
  allPlayers: Player[];
  isCurrentPlayer: boolean;
  onVote: (optionId: string) => void;
  onComplete: () => void;
}

const VOTING_TIME_LIMIT = 30;


export default function TwoOptionPrompt({
  prompt,
  currentPlayer,
  allPlayers,
  isCurrentPlayer,
  onVote,
  onComplete
}: TwoOptionPromptProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(VOTING_TIME_LIMIT);
  const [votingEnded, setVotingEnded] = useState(false);
  const [majorityDrinks] = useState(Math.random() < 0.5); // Randomly decide if majority drinks

  // Calculate total votes
  const totalVotes = prompt.voteOptions?.reduce((sum, option) => sum + option.votes.length, 0) || 0;
  const allVoted = totalVotes === allPlayers.length;

  // Handle voting timer
  useEffect(() => {
    if (!votingEnded) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 0 || allVoted) {
            clearInterval(timer);
            setVotingEnded(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [votingEnded, allVoted]);

  const handleVote = (optionId: string) => {
    if (!selectedOption && !votingEnded) {
      setSelectedOption(optionId);
      onVote(optionId);
    }
  };

  const getDrinkingMessage = () => {
    if (!prompt.voteOptions) return '';
    
    const [option1, option2] = prompt.voteOptions;
    const option1Votes = option1.votes.length;
    const option2Votes = option2.votes.length;
    const majorityOption = option1Votes > option2Votes ? option1 : option2;
    const minorityOption = option1Votes > option2Votes ? option2 : option1;

    if (majorityDrinks) {
      return `Players who voted for ${majorityOption.text} drink!`;
    } else {
      return `Players who voted for ${minorityOption.text} drink!`;
    }
  };

  // Rest of the component remains the same until the results section
  return (
    <div className="min-h-[60vh] max-h-[80vh] flex flex-col items-center justify-center p-4">
      {/* Timer */}
      {!votingEnded && (
        <motion.div
          className="text-2xl font-bold mb-4"
          animate={{ 
            color: timeLeft < 10 ? '#ef4444' : '#ffffff',
            scale: timeLeft < 10 ? [1, 1.1, 1] : 1
          }}
          transition={{ repeat: timeLeft < 10 ? Infinity : 0, duration: 0.5 }}
        >
          {timeLeft}s
        </motion.div>
      )}

      {/* Prompt */}
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-3xl font-bold text-center mb-12"
      >
        {prompt.prompt}
      </motion.h2>

      {/* Two Big Option Buttons */}
      <div className="w-full max-w-xl grid grid-cols-2 gap-6">
        {prompt.voteOptions?.map((option) => (
          <motion.div key={option.id} className="relative">
            {votingEnded ? (
              // Results Display
              <motion.div
                className="relative h-40 overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <motion.div
                  className="absolute inset-0 bg-emerald-500/20"
                  initial={{ height: '0%' }}
                  animate={{ 
                    height: `${(option.votes.length / allPlayers.length) * 100}%` 
                  }}
                  transition={{ duration: 1 }}
                />
                <div className="relative h-full flex flex-col items-center justify-center p-4">
                  <span className="font-bold text-xl mb-2">{option.text}</span>
                  <span className="text-2xl font-bold">
                    {Math.round((option.votes.length / allPlayers.length) * 100)}%
                  </span>
                </div>
              </motion.div>
            ) : (
              // Voting Button
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleVote(option.id)}
                disabled={!!selectedOption}
                className={`w-full h-40 rounded-xl text-white text-xl font-bold transition-all ${
                  selectedOption === option.id
                    ? 'bg-emerald-500'
                    : selectedOption
                    ? 'bg-gray-800/50'
                    : 'bg-gray-800/50 hover:bg-gray-700/50'
                }`}
              >
                {option.text}
              </motion.button>
            )}
          </motion.div>
        ))}
      </div>

      {/* Results Message */}
      {votingEnded && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 text-2xl font-bold text-center text-white"
        >
          {getDrinkingMessage()}
        </motion.div>
      )}

      {/* End Turn Button */}
      {votingEnded && isCurrentPlayer && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onComplete}
          className="mt-8 bg-emerald-500 text-white px-8 py-3 rounded-xl font-semibold"
        >
          End Turn
        </motion.button>
      )}
    </div>
  );
} 