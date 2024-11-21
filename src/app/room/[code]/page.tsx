'use client';

import { useEffect, useState } from 'react';
import { useRoom } from '@/hooks/useRoom';
import { GameState } from '@/types/game';
import { PromptType } from '@/types/prompt';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import { useParams } from 'next/navigation';
import HostControls from '@/components/HostControls';
import TurnScreen from '@/components/TurnScreen';
import PromptDisplay from '@/components/PromptDisplay';
import Image from 'next/image';

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
    startTurn, 
    completePrompt, 
    submitVote,
    submitKeepThreeSelection, 
    showTimedCategory, 
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

  const handleVote = async (optionId: string) => {
    if (!roomCode || !playerId) return;
    
    // Handle Keep Three selections
    if (room?.currentPrompt?.type === PromptType.KEEP_THREE) {
      await submitKeepThreeSelection(roomCode, optionId.split(','));
    } else {
      await submitVote(roomCode, playerId, optionId);
    }
  };

  const isKicked = playerId && room && !room.players.find(p => p.id === playerId);

  if (isKicked) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="bg-gray-900/80 p-8 rounded-lg text-center max-w-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <div className="mb-6">
                <Image
                  src="/images/kicked.png"
                  alt="Kicked from room"
                  width={200}
                  height={200}
                  className="mx-auto"
                />
              </div>
              <h2 className="text-2xl font-bold text-red-500 mb-4">
                You have been kicked from the room
              </h2>
              <p className="text-gray-300 mb-6">
                The host has removed you from this game session.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  localStorage.removeItem(`room_${roomCode}_player`);
                  window.location.href = '/';
                }}
                className="bg-emerald-500 text-white px-6 py-2 rounded-lg hover:bg-emerald-600"
              >
                Return to Home
              </motion.button>
            </motion.div>
          </div>
        </div>
      </Layout>
    );
  }

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
          {/* Room Header */}
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

          {/* Lobby or Game Content */}
          {room.gameState === GameState.LOBBY ? (
            <>
              {/* Host Controls */}
              {isHost && (
                <HostControls
                  players={room.players}
                  onKickPlayer={(playerId) => kickPlayer(roomCode, playerId)}
                  onUpdateSettings={(settings) => updateGameSettings(roomCode, settings)}
                  currentSettings={room.settings}
                />
              )}

              {/* Players List */}
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

              {/* Start Game Button */}
              {isHost && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => startGame(roomCode)}
                  className="w-full bg-emerald-500 text-white py-3 rounded-lg font-semibold text-lg hover:bg-emerald-600 transition-colors"
                >
                  Start Game
                </motion.button>
              )}
            </>
          ) : (
            <>
              {/* Game Content */}
              {room.gameState === GameState.PLAYING && (
                room.showPrompt && room.currentPrompt ? (
                  <PromptDisplay
                    prompt={room.currentPrompt}
                    currentPlayer={room.players.find(p => p.id === room.currentTurn)!}
                    allPlayers={room.players}
                    isCurrentPlayer={playerId === room.currentTurn}
                    onComplete={() => completePrompt(roomCode)}
                    onVote={handleVote}
                    showTimedCategory={() => showTimedCategory(roomCode)}
                  />
                ) : (
                  <TurnScreen
                    currentPlayer={room.players.find(p => p.id === room.currentTurn)!}
                    isCurrentPlayer={playerId === room.currentTurn}
                    onStartTurn={() => startTurn(roomCode)}
                  />
                )
              )}
            </>
          )}
        </div>
      </div>
    </Layout>
  );
} 