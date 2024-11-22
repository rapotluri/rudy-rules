import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Player } from '@/types/game';
import { Prompt } from '@/types/prompt';

interface WordRaceGameProps {
  prompt: Prompt;
  currentPlayer: Player;
  allPlayers: Player[];
  isCurrentPlayer: boolean;
  onComplete: () => void;
  onVote?: (guess: string) => void;
}

const KEYBOARD_LAYOUT = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACK']
];

// Add new interface for guess with feedback
interface GuessWithFeedback {
  word: string;
  feedback: ('correct' | 'present' | 'absent')[];
}

export default function WordRaceGame({
  prompt,
  currentPlayer,
  allPlayers,
  isCurrentPlayer,
  onComplete,
  onVote
}: WordRaceGameProps) {
  const [currentGuess, setCurrentGuess] = useState('');
  const [timeLeft, setTimeLeft] = useState(60);
  const [localGuesses, setLocalGuesses] = useState<GuessWithFeedback[]>([]);
  const [myGuessHistory, setMyGuessHistory] = useState<string[]>([]);

  const word = prompt.WordRaceOptions?.word || '';
  const winner = prompt.WordRaceOptions?.winner;
  const gameEnded = prompt.WordRaceOptions?.gameEnded || false;

  // Remove debug logging for state changes
  useEffect(() => {
    if (winner || (gameEnded && timeLeft === 0)) {
      // Game end logic
    }
  }, [winner, gameEnded, timeLeft]);

  const checkGuess = (guess: string): GuessWithFeedback => {
    const guessArray = guess.toLowerCase().split('');
    const wordArray = word.toLowerCase().split('');
    const feedback: ('correct' | 'present' | 'absent')[] = Array(4).fill('absent');
    
    // First pass: mark correct letters
    guessArray.forEach((letter, i) => {
      if (letter === wordArray[i]) {
        feedback[i] = 'correct';
        wordArray[i] = '#'; // Mark as used
        guessArray[i] = '*'; // Mark as processed
      }
    });
    
    // Second pass: mark present letters
    guessArray.forEach((letter, i) => {
      if (letter !== '*') { // Skip already processed letters
        const wordIndex = wordArray.indexOf(letter);
        if (wordIndex !== -1) {
          feedback[i] = 'present';
          wordArray[wordIndex] = '#'; // Mark as used
        }
      }
    });

    return { word: guess, feedback };
  };

  // Timer effect
  useEffect(() => {
    if (gameEnded) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          onVote?.('timeout');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameEnded, onVote]);

  // Move guesses inside useEffect
  useEffect(() => {
    const currentGuesses = prompt.WordRaceOptions?.guesses || {};
    const myGuesses = Object.entries(currentGuesses)
      .filter(([playerId]) => playerId === currentPlayer.id)
      .map(([_, guess]) => guess);
    setMyGuessHistory(myGuesses);
  }, [prompt.WordRaceOptions?.guesses, currentPlayer.id]);

  // Wrap handleKeyPress in useCallback to prevent it from changing on every render
  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (gameEnded || localGuesses.length >= 5) return;

    if (event.key === 'BACK') {
      setCurrentGuess(prev => prev.slice(0, -1));
    } else if (event.key === 'ENTER' && currentGuess.length === 4) {
      const guessWithFeedback = checkGuess(currentGuess);
      setLocalGuesses(prev => [...prev, guessWithFeedback]);
      
      if (currentGuess.toLowerCase() === word.toLowerCase()) {
        onVote?.(currentGuess.toLowerCase());
      }
      
      setCurrentGuess('');
    } else if (event.key !== 'ENTER' && currentGuess.length < 4) {
      setCurrentGuess(prev => prev + event.key);
    }
  }, [currentGuess, gameEnded, localGuesses.length, word, checkGuess, onVote]);

  // Add effect to handle game end state
  useEffect(() => {
    if (winner || (gameEnded && timeLeft === 0)) {
      // Game end logic
    }
  }, [winner, gameEnded, timeLeft]);

  // Handle physical keyboard
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  return (
    <div className="min-h-[60vh] max-h-[80vh] flex flex-col items-center justify-center p-4">
      {!gameEnded ? (
        <>
          {/* Timer */}
          <div className="text-3xl text-white font-mono mb-4">
            {timeLeft}s
          </div>

          <div className="text-lg text-gray-300 mb-4 text-center max-w-md">
            {localGuesses.length >= 5 ? 
              "Out of tries! Wait for other players or timer to end..." :
              `Find the 4-letter word! (${5 - localGuesses.length} tries left)`
            }
          </div>

          {/* Current Guess */}
          <div className="grid grid-cols-4 gap-1 mb-4">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className={`w-12 h-12 border-2 rounded-lg flex items-center justify-center text-xl font-bold
                  ${currentGuess[i] ? 'border-white text-white' : 'border-white/30 text-white/30'}`}
              >
                {currentGuess[i] || ''}
              </motion.div>
            ))}
          </div>

          {/* Previous Guesses with updated styling */}
          <div className="grid grid-rows-5 gap-1 mb-4">
            {[...Array(5)].map((_, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-4 gap-1">
                {[...Array(4)].map((_, colIndex) => {
                  const guess = localGuesses[rowIndex];
                  const letterState = guess?.feedback[colIndex];
                  
                  return (
                    <motion.div
                      key={colIndex}
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      className={`w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold
                        ${!guess ? 'border-2 border-white/10' : 
                          letterState === 'correct' ? 'bg-green-500' :
                          letterState === 'present' ? 'bg-yellow-500' :
                          'bg-gray-500'}`}
                    >
                      {guess ? guess.word[colIndex].toUpperCase() : ''}
                    </motion.div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Virtual Keyboard - Simplified without colors */}
          <div className="w-full max-w-md px-1">
            {KEYBOARD_LAYOUT.map((row, i) => (
              <div key={i} className="flex justify-center gap-1 mb-1">
                {row.map(key => (
                  <motion.button
                    key={key}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleKeyPress(new KeyboardEvent('keydown', { key: key }))}
                    className={`px-2 py-3 rounded font-bold text-xs
                      ${key.length > 1 ? 'px-4' : ''}
                      bg-white/20 hover:bg-white/30`}
                  >
                    {key}
                  </motion.button>
                ))}
              </div>
            ))}
          </div>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center bg-black/20 backdrop-blur-sm rounded-xl p-6 w-full max-w-md"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Results</h3>
          
          {/* Results */}
          <div className="text-3xl font-mono text-white mb-8">
            The word was: {word.toUpperCase()}
          </div>

          {/* Winner section with updated message */}
          <div className="mb-8">
            {winner ? (
              <div className="text-2xl font-bold text-emerald-400">
                {allPlayers.find(p => p.id === winner)?.name} wins! 🏆
              </div>
            ) : (
              <div className="text-2xl font-bold text-red-500">
                Time's up! No one found the word!
              </div>
            )}
          </div>

          {/* Updated drinking message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-2xl font-bold text-red-500"
          >
            {winner ? 
              `${allPlayers.find(p => p.id === winner)?.name} can give out a drink! 🍻` :
              "Everyone drinks!"
            }
          </motion.div>

          {/* End Turn Button stays the same */}
          {isCurrentPlayer && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onComplete}
              className="mt-8 bg-white/10 text-white px-12 py-4 rounded-lg text-xl font-bold shadow-lg border-2 border-emerald-500"
            >
              End Turn
            </motion.button>
          )}
        </motion.div>
      )}
    </div>
  );
} 