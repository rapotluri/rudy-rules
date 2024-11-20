'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useRoom } from '@/hooks/useRoom';

export default function CreateRoom() {
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
      const roomCode = await createRoom(hostName);
      router.push(`/room/${roomCode}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create room');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-white mb-6">Create Room</h1>
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
              className="w-full p-2 rounded bg-gray-700 text-white"
              disabled={loading}
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? 'Creating...' : 'Create Room'}
          </button>
        </form>
      </div>
    </div>
  );
} 