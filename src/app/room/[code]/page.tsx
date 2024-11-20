'use client';

import { useEffect, useState } from 'react';
import { useRoom } from '@/hooks/useRoom';
import { GameState, DrinkLevel, SpiceLevel } from '@/types/game';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import { useParams } from 'next/navigation';
import HostControls from '@/components/HostControls';

export default function RoomPage() {
  const params = useParams();
  const roomCode = params.code as string;
  const [playerId, setPlayerId] = useState<string | null>(null);
  const { 
    room, 
    loading, 
    error, 
    subscribeToRoom, 
    startGame,
    updateGameSettings,
    kickPlayer 
  } = useRoom();

  useEffect(() => {
    const storedPlayerId = localStorage.getItem(`room_${roomCode}_player`);
    if (storedPlayerId) {
      setPlayerId(storedPlayerId);
    }
  }, [roomCode]);

  useEffect(() => {
    if (!roomCode || !playerId) return;
    const unsubscribe = subscribeToRoom(roomCode, playerId);
    return () => unsubscribe();
  }, [roomCode, playerId, subscribeToRoom]);

  const isHost = room?.players.find(p => p.id === playerId)?.isHost ?? false;

  const handleKickPlayer = async (playerIdToKick: string) => {
    if (!isHost || !roomCode) return;
    await kickPlayer(roomCode, playerIdToKick);
  };

  const handleUpdateSettings = async (settings: { drinkLevel: DrinkLevel; spiceLevel: SpiceLevel }) => {
    if (!isHost || !roomCode) return;
    await updateGameSettings(roomCode, settings);
  };

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-emerald-400 text-xl">Loading room...</div>
        </div>
      </Layout>
    );
  }

  if (error || !room) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-red-500 text-xl">Room not found</div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen p-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/80 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-emerald-400">
                Rudy&apos;s Rules
              </h1>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigator.clipboard.writeText(roomCode)}
                className="bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
              >
                <span className="text-xl font-mono">{roomCode}</span>
                <span className="text-sm text-gray-400">Click to copy</span>
              </motion.button>
            </div>
          </div>

          {isHost && room.gameState === GameState.LOBBY && (
            <HostControls
              players={room.players}
              onKickPlayer={handleKickPlayer}
              onUpdateSettings={handleUpdateSettings}
              currentSettings={room.settings}
            />
          )}

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
            {room.players.map((player) => (
              <motion.div
                key={player.id}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-gray-900/80 rounded-lg p-4"
              >
                <div
                  className="w-4 h-4 rounded-full mb-2"
                  style={{ backgroundColor: player.color }}
                />
                <div className="text-white font-semibold">
                  {player.name}
                  {player.isHost && (
                    <span className="ml-2 text-emerald-400 text-sm">(Host)</span>
                  )}
                </div>
                <div className="text-sm text-gray-400">
                  {player.isConnected ? 'Connected' : 'Disconnected'}
                </div>
              </motion.div>
            ))}
          </div>

          {room.gameState === GameState.LOBBY && (
            <motion.button
              whileHover={isHost ? { scale: 1.05 } : {}}
              whileTap={isHost ? { scale: 0.95 } : {}}
              onClick={() => isHost && startGame(roomCode)}
              className={`w-full py-3 rounded-lg font-semibold text-lg transition-colors ${
                isHost 
                  ? 'bg-emerald-500 text-white hover:bg-emerald-600 cursor-pointer' 
                  : 'bg-gray-600 text-gray-300 cursor-not-allowed'
              }`}
              disabled={!isHost}
            >
              {isHost ? 'Start Game' : 'Waiting for host to start...'}
            </motion.button>
          )}
        </div>
      </div>
    </Layout>
  );
} 