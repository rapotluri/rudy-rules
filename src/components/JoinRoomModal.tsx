'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRoom } from '@/hooks/useRoom';
import { useRouter } from 'next/navigation';
import { isValidRoomCode } from '@/utils/roomCode';

interface JoinRoomModalProps {
  onClose: () => void;
}

export default function JoinRoomModal({ onClose }: JoinRoomModalProps) {
  const [roomCode, setRoomCode] = useState('');
  const [playerName, setPlayerName] = useState('');
  const [error, setError] = useState('');
  const { joinRoom, loading } = useRoom();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!playerName.trim()) {
      setError('Please enter your name');
      return;
    }

    const formattedCode = roomCode.trim().toUpperCase();
    if (!isValidRoomCode(formattedCode)) {
      setError('Invalid room code. Please enter a 4-letter code');
      return;
    }

    try {
      const { playerId } = await joinRoom(formattedCode, playerName);
      // Store playerId in localStorage
      localStorage.setItem(`room_${formattedCode}_player`, playerId);
      router.push(`/room/${formattedCode}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to join room');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-gray-900/90 p-8 rounded-2xl shadow-xl w-full max-w-md mx-4"
      >
        <h2 className="text-3xl font-bold text-emerald-400 mb-6">Join Game</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="roomCode" className="block text-white mb-2">
              Room Code
            </label>
            <input
              type="text"
              id="roomCode"
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
              maxLength={4}
              placeholder="ABCD"
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all uppercase"
              disabled={loading}
            />
          </div>
          <div>
            <label htmlFor="playerName" className="block text-white mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="playerName"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
              disabled={loading}
            />
          </div>
          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}
          <div className="flex space-x-3 pt-2">
            <motion.button
              type="button"
              onClick={onClose}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 bg-gray-700 text-white p-3 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Cancel
            </motion.button>
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 bg-emerald-500 text-white p-3 rounded-lg hover:bg-emerald-600 transition-colors disabled:opacity-50"
            >
              {loading ? 'Joining...' : 'Join Game'}
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
} 