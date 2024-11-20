'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRoom } from '@/hooks/useRoom';
import { useRouter } from 'next/navigation';

interface CreateRoomModalProps {
  onClose: () => void;
}

export default function CreateRoomModal({ onClose }: CreateRoomModalProps) {
  const [hostName, setHostName] = useState('');
  const [error, setError] = useState('');
  const { createRoom, loading } = useRoom();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!hostName.trim()) {
      setError('Please enter your name');
      return;
    }

    try {
      const { roomCode, playerId } = await createRoom(hostName);
      localStorage.setItem(`room_${roomCode}_player`, playerId);
      router.push(`/room/${roomCode}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create room');
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
        <h2 className="text-3xl font-bold text-emerald-400 mb-6">Host Game</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="hostName" className="block text-white mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="hostName"
              value={hostName}
              onChange={(e) => setHostName(e.target.value)}
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
              {loading ? 'Creating...' : 'Create Room'}
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
} 