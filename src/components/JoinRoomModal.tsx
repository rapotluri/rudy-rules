'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRoom } from '@/hooks/useRoom';
import { useRouter } from 'next/navigation';

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
    // ... existing join logic ...
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
          {/* ... existing form fields with enhanced styling ... */}
        </form>
      </motion.div>
    </div>
  );
} 