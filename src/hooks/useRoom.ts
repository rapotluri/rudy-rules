import { useState, useEffect, useCallback } from 'react';
import { db } from '@/lib/firebase';
import { Room, Player, GameState, Challenge, DrinkLevel, SpiceLevel } from '@/types/game';
import { generateRoomCode } from '@/utils/roomCode';
import {
  doc,
  collection,
  setDoc,
  getDoc,
  updateDoc,
  onSnapshot,
  serverTimestamp,
  runTransaction,
} from 'firebase/firestore';

const INACTIVE_TIMEOUT = 60000; // 60 seconds of inactivity before marking as disconnected
const HEARTBEAT_INTERVAL = 30000; // Send heartbeat every 30 seconds

export const useRoom = () => {
  const [room, setRoom] = useState<Room | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createRoom = async (hostName: string): Promise<{ roomCode: string; playerId: string }> => {
    try {
      setLoading(true);
      const roomCode = generateRoomCode();
      const hostId = crypto.randomUUID();
      
      const newRoom: Room = {
        id: roomCode,
        code: roomCode,
        hostId,
        players: [{
          id: hostId,
          name: hostName,
          isHost: true,
          isConnected: true,
          score: 0,
          color: '#' + Math.floor(Math.random()*16777215).toString(16),
          drinks: 0,
          lastActive: Date.now()
        }],
        gameState: GameState.LOBBY,
        currentTurn: null,
        currentChallenge: null,
        roundNumber: 0,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        settings: {
          drinkLevel: DrinkLevel.CASUAL,
          spiceLevel: SpiceLevel.FAMILY
        }
      };

      await setDoc(doc(db, 'rooms', roomCode), newRoom);
      return { roomCode, playerId: hostId };
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create room');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const joinRoom = async (roomCode: string, playerName: string): Promise<{ playerId: string }> => {
    try {
      setLoading(true);
      const roomRef = doc(db, 'rooms', roomCode);
      const roomSnap = await getDoc(roomRef);

      if (!roomSnap.exists()) {
        throw new Error('Room not found');
      }

      const roomData = roomSnap.data() as Room;
      if (roomData.gameState !== GameState.LOBBY) {
        throw new Error('Game already in progress');
      }

      const playerId = crypto.randomUUID();
      const newPlayer: Player = {
        id: playerId,
        name: playerName,
        isHost: false,
        isConnected: true,
        score: 0,
        color: '#' + Math.floor(Math.random()*16777215).toString(16),
        drinks: 0,
        lastActive: Date.now()
      };

      await updateDoc(roomRef, {
        players: [...roomData.players, newPlayer],
        updatedAt: serverTimestamp()
      });

      return { playerId };
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to join room');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const startGame = async (roomCode: string) => {
    try {
      const roomRef = doc(db, 'rooms', roomCode);
      await runTransaction(db, async (transaction) => {
        const roomDoc = await transaction.get(roomRef);
        if (!roomDoc.exists()) throw new Error('Room not found');

        const roomData = roomDoc.data() as Room;
        if (roomData.gameState !== GameState.LOBBY) {
          throw new Error('Game has already started');
        }

        if (roomData.players.length < 2) {
          throw new Error('Need at least 2 players to start');
        }

        // Randomly select first player
        const firstPlayer = roomData.players[Math.floor(Math.random() * roomData.players.length)];

        transaction.update(roomRef, {
          gameState: GameState.PLAYING,
          currentTurn: firstPlayer.id,
          roundNumber: 1,
          updatedAt: serverTimestamp(),
        });
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to start game');
      throw err;
    }
  };

  const endTurn = async (roomCode: string) => {
    try {
      const roomRef = doc(db, 'rooms', roomCode);
      await runTransaction(db, async (transaction) => {
        const roomDoc = await transaction.get(roomRef);
        if (!roomDoc.exists()) throw new Error('Room not found');

        const roomData = roomDoc.data() as Room;
        const currentPlayerIndex = roomData.players.findIndex(p => p.id === roomData.currentTurn);
        const nextPlayerIndex = (currentPlayerIndex + 1) % roomData.players.length;

        transaction.update(roomRef, {
          currentTurn: roomData.players[nextPlayerIndex].id,
          currentChallenge: null,
          updatedAt: serverTimestamp(),
        });
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to end turn');
      throw err;
    }
  };

  const updatePlayerConnection = async (roomCode: string, playerId: string, isConnected: boolean) => {
    try {
      const roomRef = doc(db, 'rooms', roomCode);
      await runTransaction(db, async (transaction) => {
        const roomDoc = await transaction.get(roomRef);
        if (!roomDoc.exists()) throw new Error('Room not found');

        const roomData = roomDoc.data() as Room;
        const updatedPlayers = roomData.players.map(player => 
          player.id === playerId 
            ? { ...player, isConnected, lastActive: Date.now() }
            : player
        );

        transaction.update(roomRef, {
          players: updatedPlayers,
          updatedAt: serverTimestamp(),
        });
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update connection status');
      throw err;
    }
  };

  const updatePresence = useCallback(async (roomCode: string, playerId: string) => {
    try {
      const roomRef = doc(db, 'rooms', roomCode);
      await runTransaction(db, async (transaction) => {
        const roomDoc = await transaction.get(roomRef);
        if (!roomDoc.exists()) return;

        const roomData = roomDoc.data() as Room;
        const updatedPlayers = roomData.players.map(player => 
          player.id === playerId 
            ? { ...player, isConnected: true, lastActive: Date.now() }
            : {
                ...player,
                isConnected: player.isConnected && 
                  (Date.now() - player.lastActive) < INACTIVE_TIMEOUT
              }
        );

        transaction.update(roomRef, {
          players: updatedPlayers,
          updatedAt: serverTimestamp(),
        });
      });
    } catch (error) {
      console.error('Error updating presence:', error);
    }
  }, []);

  const setupPresence = useCallback((roomCode: string, playerId: string) => {
    let heartbeatInterval: NodeJS.Timeout;

    // Update presence when tab visibility changes
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        updatePresence(roomCode, playerId);
      }
    };

    // Update presence before unload
    const handleBeforeUnload = () => {
      updatePresence(roomCode, playerId);
    };

    // Start heartbeat
    const startHeartbeat = () => {
      updatePresence(roomCode, playerId);
      heartbeatInterval = setInterval(() => {
        updatePresence(roomCode, playerId);
      }, HEARTBEAT_INTERVAL);
    };

    // Set up event listeners
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);
    startHeartbeat();

    // Cleanup function
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      clearInterval(heartbeatInterval);
    };
  }, [updatePresence]);

  const subscribeToRoom = useCallback((roomCode: string, playerId?: string) => {
    const unsubscribe = onSnapshot(
      doc(db, 'rooms', roomCode),
      (doc) => {
        if (doc.exists()) {
          const roomData = doc.data() as Room;
          
          // Update connected status based on lastActive timestamp
          const updatedRoom = {
            ...roomData,
            players: roomData.players.map(player => ({
              ...player,
              isConnected: (Date.now() - player.lastActive) < INACTIVE_TIMEOUT
            }))
          };
          
          setRoom(updatedRoom);
          setError(null);
        } else {
          setRoom(null);
          setError('Room not found');
        }
      },
      (err) => {
        setError(err.message);
      }
    );

    // Set up presence system if playerId is provided
    let cleanupPresence = () => {};
    if (playerId) {
      cleanupPresence = setupPresence(roomCode, playerId);
    }

    return () => {
      unsubscribe();
      cleanupPresence();
    };
  }, [setupPresence]);

  const updateGameSettings = async (
    roomCode: string,
    settings: { drinkLevel: DrinkLevel; spiceLevel: SpiceLevel }
  ) => {
    try {
      const roomRef = doc(db, 'rooms', roomCode);
      await updateDoc(roomRef, {
        settings,
        updatedAt: serverTimestamp()
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update settings');
      throw err;
    }
  };

  const kickPlayer = async (roomCode: string, playerId: string) => {
    try {
      const roomRef = doc(db, 'rooms', roomCode);
      await runTransaction(db, async (transaction) => {
        const roomDoc = await transaction.get(roomRef);
        if (!roomDoc.exists()) throw new Error('Room not found');

        const roomData = roomDoc.data() as Room;
        const updatedPlayers = roomData.players.filter(p => p.id !== playerId);

        transaction.update(roomRef, {
          players: updatedPlayers,
          updatedAt: serverTimestamp()
        });
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to kick player');
      throw err;
    }
  };

  return {
    room,
    loading,
    error,
    createRoom,
    joinRoom,
    startGame,
    endTurn,
    updatePlayerConnection,
    subscribeToRoom,
    updateGameSettings,
    kickPlayer
  };
}; 