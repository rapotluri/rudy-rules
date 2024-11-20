'use client';

import { motion } from 'framer-motion';
import { Player } from '@/types/game';
import Image from 'next/image';

interface TurnScreenProps {
  currentPlayer: Player;
  isCurrentPlayer: boolean;
  onStartTurn: () => void;
}

export default function TurnScreen({ 
  currentPlayer, 
  isCurrentPlayer,
  onStartTurn 
}: TurnScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col items-center justify-between p-4"
    >
      {/* Player's Turn Text */}
      <div className="text-center mt-8">
        <motion.h1 
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-4xl font-bold mb-2"
          style={{ color: currentPlayer.color }}
        >
          {currentPlayer.name}&apos;s Turn
        </motion.h1>
      </div>

      {/* Center Content */}
      <div className="flex-1 flex flex-col items-center justify-center gap-8">
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative w-48 h-48"
        >
          <Image
            src="/images/waiting.png"
            alt="Waiting"
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Action Button or Waiting Text */}
        {isCurrentPlayer ? (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onStartTurn}
            className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-12 py-4 rounded-lg text-xl font-bold shadow-lg hover:from-emerald-600 hover:to-emerald-700 transition-all"
          >
            Start Turn
          </motion.button>
        ) : (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-400 text-xl text-center"
          >
            Waiting for {currentPlayer.name} to start their turn...
          </motion.p>
        )}
      </div>

      {/* Turn Order */}
      <div className="w-full mt-8">
        <p className="text-gray-500 text-center mb-4 text-sm uppercase tracking-wider">Next Players</p>
        <div className="flex justify-center gap-3">
          {Array(5).fill(0).map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full"
              style={{
                backgroundColor: i === 0 ? currentPlayer.color : 'rgba(255,255,255,0.1)',
                transform: `scale(${1 - i * 0.1})`
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
} 