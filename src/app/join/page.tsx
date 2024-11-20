'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useRoom } from '@/hooks/useRoom';
import { isValidRoomCode } from '@/utils/roomCode';

export default function JoinRoom() {
  const [roomCode, setRoomCode] = useState('');
  const [playerName, setPlayerName] = useState('');
  const [error, setError] = useState('');
  const { joinRoom, loading } = useRoom();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validate inputs
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
      await joinRoom(formattedCode, playerName);
      router.push(`/room/${formattedCode}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to join room');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-white mb-6">Join Room</h1>
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
              className="w-full p-2 rounded bg-gray-700 text-white uppercase"
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
              className="w-full p-2 rounded bg-gray-700 text-white"
              disabled={loading}
            />
          </div>
          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 disabled:opacity-50"
          >
            {loading ? 'Joining...' : 'Join Room'}
          </button>
        </form>
      </div>
    </div>
  );
} 