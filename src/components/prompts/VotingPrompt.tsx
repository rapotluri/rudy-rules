'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Prompt } from '@/types/prompt';
import { Player } from '@/types/game';

interface VotingPromptProps {
  prompt: Prompt;
  currentPlayer: Player;
  allPlayers: Player[];
  isCurrentPlayer: boolean;
  onVote: (optionId: string) => void;
  onComplete: () => void;
}

const VOTING_TIME_LIMIT = 30;

const getDrinkingMessage = (drinkLevel: number, playerName: string, isWinner: boolean) => {
  const status = isWinner ? "Winner" : "Loser";
  
  switch (drinkLevel) {
    case 2:
      return `${status} ${playerName} finishes their drink!`;
    case 1:
      return `${status} ${playerName} takes 3 sips!`;
    default:
      return `${status} ${playerName} takes a sip!`;
  }
};

export default function VotingPrompt({
  prompt,
  currentPlayer,
  allPlayers,
  isCurrentPlayer,
  onVote,
  onComplete
}: VotingPromptProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(VOTING_TIME_LIMIT);
  const [votingEnded, setVotingEnded] = useState(false);

  // Calculate total votes
  const totalVotes = prompt.voteOptions?.reduce((sum, option) => sum + option.votes.length, 0) || 0;
  const allVoted = totalVotes === allPlayers.length;

  // Get synchronized results
  const winnerDrinks = prompt.winnerDrinks;
  const results = prompt.results;
  
  const winningPlayer = results?.winner ? 
    allPlayers.find(p => p.id === results.winner.id) : 
    null;

  const losingPlayer = results?.loser ? 
    allPlayers.find(p => p.id === results.loser.id) : 
    null;

  const drinkingPlayer = winnerDrinks ? winningPlayer : losingPlayer;

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

      {/* Voting Options or Results */}
      <div className="w-full max-w-md space-y-4">
        {prompt.voteOptions?.map((option) => (
          <motion.div
            key={option.id}
            className="relative"
          >
            {votingEnded ? (
              // Results Display
              <motion.div
                className="relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Progress Bar */}
                <motion.div
                  className={`absolute inset-0 ${
                    results?.winner?.id === option.id 
                      ? 'bg-emerald-500/20' 
                      : results?.loser?.id === option.id 
                      ? 'bg-red-500/20' 
                      : 'bg-gray-700/20'
                  }`}
                  initial={{ width: '0%' }}
                  animate={{ 
                    width: `${(option.votes.length / allPlayers.length) * 100}%` 
                  }}
                  transition={{ duration: 1, delay: 0.2 }}
                />

                {/* Content */}
                <div className="relative px-6 py-4 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-lg">
                      {option.text}
                    </span>
                    {results?.winner?.id === option.id && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="text-xl"
                      >
                        👑
                      </motion.span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-lg">
                      {option.votes.length}
                    </span>
                    <span className="text-sm text-gray-400">
                      {option.votes.length === 1 ? 'vote' : 'votes'}
                    </span>
                  </div>
                </div>
              </motion.div>
            ) : (
              // Voting Button
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleVote(option.id)}
                disabled={!!selectedOption}
                className={`w-full p-4 rounded-xl text-white font-semibold transition-all ${
                  selectedOption === option.id
                    ? 'bg-emerald-500 shadow-lg shadow-emerald-500/20'
                    : selectedOption
                    ? 'bg-gray-800/50 backdrop-blur-sm'
                    : 'bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50'
                }`}
              >
                {option.text}
              </motion.button>
            )}
          </motion.div>
        ))}
      </div>

      {/* Status Messages */}
      {!votingEnded && !selectedOption && timeLeft === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-red-400 mt-4"
        >
          Time&apos;s up! You didn&apos;t vote!
        </motion.p>
      )}

      {!votingEnded && selectedOption && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mt-6"
        >
          <p className="text-gray-400 font-medium">
            Waiting for other players...
          </p>
          <p className="text-sm text-gray-500 mt-1">
            {totalVotes}/{allPlayers.length} votes
          </p>
        </motion.div>
      )}

      {/* Results Message */}
      {votingEnded && drinkingPlayer && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 text-2xl font-bold text-center text-white"
        >
          {getDrinkingMessage(prompt.drinkLevel, drinkingPlayer.name, winnerDrinks || false)}
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
          className="mt-8 bg-emerald-500 text-white px-8 py-3 rounded-xl font-semibold shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all"
        >
          End Turn
        </motion.button>
      )}
    </div>
  );
} 