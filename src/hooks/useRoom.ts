import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { Room, Player, GameState } from '@/types/game';
import { generateRoomCode } from '@/utils/roomCode';
import { 
  doc, 
  collection, 
  setDoc, 
  getDoc, 
  onSnapshot,
  updateDoc,
  serverTimestamp 
} from 'firebase/firestore';

export const useRoom = () => {
  const [room, setRoom] = useState<Room | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createRoom = async (hostName: string): Promise<string> => {
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
          color: '#' + Math.floor(Math.random()*16777215).toString(16) // Random color
        }],
        gameState: GameState.LOBBY,
        createdAt: Date.now(),
        updatedAt: Date.now()
      };

      await setDoc(doc(db, 'rooms', roomCode), newRoom);
      return roomCode;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create room');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const joinRoom = async (roomCode: string, playerName: string): Promise<void> => {
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

      const newPlayer: Player = {
        id: crypto.randomUUID(),
        name: playerName,
        isHost: false,
        isConnected: true,
        score: 0,
        color: '#' + Math.floor(Math.random()*16777215).toString(16)
      };

      await updateDoc(roomRef, {
        players: [...roomData.players, newPlayer],
        updatedAt: serverTimestamp()
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to join room');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const subscribeToRoom = (roomCode: string) => {
    const unsubscribe = onSnapshot(
      doc(db, 'rooms', roomCode),
      (doc) => {
        if (doc.exists()) {
          setRoom(doc.data() as Room);
        } else {
          setRoom(null);
          setError('Room not found');
        }
      },
      (err) => {
        setError(err.message);
      }
    );

    return unsubscribe;
  };

  return {
    room,
    loading,
    error,
    createRoom,
    joinRoom,
    subscribeToRoom
  };
}; 