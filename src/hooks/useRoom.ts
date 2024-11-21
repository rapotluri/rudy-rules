import { useState, useCallback } from 'react';
import { db } from '@/lib/firebase';
import { Room, Player, GameState } from '@/types/game';
import { Prompt, PromptType } from '@/types/prompt';
import { createNewPrompt } from '@/lib/promptLibrary';
import { generateRoomCode } from '@/utils/roomCode';
import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  onSnapshot,
  serverTimestamp,
  runTransaction,
} from 'firebase/firestore';

const INACTIVE_TIMEOUT = 60000; // 60 seconds
const HEARTBEAT_INTERVAL = 30000; // 30 seconds

export const useRoom = () => {
  const [room, setRoom] = useState<Room | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [usedPrompts, setUsedPrompts] = useState<Set<string>>(new Set());

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
        currentPrompt: null,
        showPrompt: false,
        roundNumber: 0,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        settings: {
          drinkLevel: 0,
          spiceLevel: 0
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

        // Create first challenge - pass the players array
        const firstPrompt = createNewPrompt(
          roomData.settings.spiceLevel,
          roomData.settings.drinkLevel,
          firstPlayer.id,
          roomData.players
        );

        transaction.update(roomRef, {
          gameState: GameState.PLAYING,
          currentTurn: firstPlayer.id,
          currentPrompt: firstPrompt,
          roundNumber: 1,
          updatedAt: serverTimestamp(),
        });
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to start game');
      throw err;
    }
  };

  const startTurn = async (roomCode: string) => {
    try {
      const roomRef = doc(db, 'rooms', roomCode);
      await runTransaction(db, async (transaction) => {
        const roomDoc = await transaction.get(roomRef);
        if (!roomDoc.exists()) throw new Error('Room not found');

        const roomData = roomDoc.data() as Room;
        
        // Get used prompts from room data
        const usedPrompts = roomData.usedPrompts || [];

        // Create new prompt, avoiding used ones
        const newPrompt = createNewPrompt(
          roomData.settings.spiceLevel,
          roomData.settings.drinkLevel,
          roomData.currentTurn!,
          roomData.players,
          usedPrompts // Pass used prompts to avoid repetition
        );

        // Add new prompt to used prompts
        const updatedUsedPrompts = [...usedPrompts, newPrompt.prompt];

        transaction.update(roomRef, {
          currentPrompt: newPrompt,
          showPrompt: true,
          usedPrompts: updatedUsedPrompts,
          updatedAt: serverTimestamp(),
        });
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to start turn');
      throw err;
    }
  };

  const completePrompt = async (roomCode: string) => {
    try {
      const roomRef = doc(db, 'rooms', roomCode);
      await runTransaction(db, async (transaction) => {
        const roomDoc = await transaction.get(roomRef);
        if (!roomDoc.exists()) throw new Error('Room not found');

        const roomData = roomDoc.data() as Room;
        if (!roomData.currentPrompt) return;

        // Get next player (only from connected players)
        const connectedPlayers = roomData.players.filter(p => p.isConnected);
        if (connectedPlayers.length === 0) return;

        const currentPlayerIndex = connectedPlayers.findIndex(p => p.id === roomData.currentTurn);
        const nextPlayerIndex = (currentPlayerIndex + 1) % connectedPlayers.length;
        const nextPlayer = connectedPlayers[nextPlayerIndex];

        // Update room state
        transaction.update(roomRef, {
          currentTurn: nextPlayer.id,
          currentPrompt: null,
          showPrompt: false,
          roundNumber: roomData.roundNumber + 1,
          updatedAt: serverTimestamp(),
        });
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to complete challenge');
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
          setRoom(roomData);
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

    return unsubscribe;
  }, []);

  const updateGameSettings = async (roomCode: string, settings: { drinkLevel: number; spiceLevel: number }) => {
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

  const submitKeepThreeSelection = async (roomCode: string, selectedItems: string[]) => {
    try {
      const roomRef = doc(db, 'rooms', roomCode);
      await runTransaction(db, async (transaction) => {
        const roomDoc = await transaction.get(roomRef);
        if (!roomDoc.exists()) throw new Error('Room not found');

        const roomData = roomDoc.data() as Room;
        if (!roomData.currentPrompt || roomData.currentPrompt.type !== PromptType.KEEP_THREE) return;

        transaction.update(roomRef, {
          'currentPrompt.selectedOptions': selectedItems,
          updatedAt: serverTimestamp(),
        });
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit selection');
      throw err;
    }
  };

  const submitVote = async (roomCode: string, playerId: string, optionId: string) => {
    try {
      const roomRef = doc(db, 'rooms', roomCode);
      await runTransaction(db, async (transaction) => {
        const roomDoc = await transaction.get(roomRef);
        if (!roomDoc.exists()) throw new Error('Room not found');

        const roomData = roomDoc.data() as Room;
        if (!roomData.currentPrompt?.voteOptions) return;

        // Original voting logic stays the same
        const updatedOptions = roomData.currentPrompt.voteOptions.map(option => {
          if (option.id === optionId) {
            const votes = option.votes.filter(v => v !== playerId);
            votes.push(playerId);
            return { ...option, votes };
          } else {
            return { ...option, votes: option.votes.filter(v => v !== playerId) };
          }
        });

        // Check if all players have voted
        const totalVotes = updatedOptions.reduce((sum, option) => sum + option.votes.length, 0);
        const votingComplete = totalVotes === roomData.players.length;

        if (votingComplete) {
          // Sort options by votes to determine winner/loser
          const sortedOptions = [...updatedOptions].sort((a, b) => b.votes.length - a.votes.length);
          const winnerDrinks = Math.random() < 0.5; // Random but synchronized

          transaction.update(roomRef, {
            'currentPrompt.voteOptions': updatedOptions,
            'currentPrompt.votingComplete': true,
            'currentPrompt.winnerDrinks': winnerDrinks,
            'currentPrompt.results': {
              winner: sortedOptions[0],
              loser: sortedOptions[sortedOptions.length - 1]
            },
            updatedAt: serverTimestamp(),
          });
        } else {
          transaction.update(roomRef, {
            'currentPrompt.voteOptions': updatedOptions,
            updatedAt: serverTimestamp(),
          });
        }
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit vote');
      throw err;
    }
  };

  const showTimedCategory = async (roomCode: string) => {
    try {
      const roomRef = doc(db, 'rooms', roomCode);
      await runTransaction(db, async (transaction) => {
        const roomDoc = await transaction.get(roomRef);
        if (!roomDoc.exists()) throw new Error('Room not found');

        const roomData = roomDoc.data() as Room;
        if (!roomData.currentPrompt?.timedOptions) return;

        transaction.update(roomRef, {
          'currentPrompt.timedOptions.showCategory': true,
          updatedAt: serverTimestamp(),
        });
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to show category');
      throw err;
    }
  };

  const submitReactionTime = async (roomCode: string, playerId: string, reactionTime: string) => {
    try {
      const roomRef = doc(db, 'rooms', roomCode);
      await runTransaction(db, async (transaction) => {
        const roomDoc = await transaction.get(roomRef);
        if (!roomDoc.exists()) throw new Error('Room not found');

        const roomData = roomDoc.data() as Room;
        if (!roomData.currentPrompt?.ReactionGameOptions) return;

        // If it's the 'start' signal, just set reactionStarted to true
        if (reactionTime === 'start') {
          transaction.update(roomRef, {
            'currentPrompt.ReactionGameOptions.reactionStarted': true,
            updatedAt: serverTimestamp(),
          });
          return;
        }

        // Get current reaction times
        const currentTimes = roomData.currentPrompt.ReactionGameOptions.allReactionTimes || {};
        
        // Add this player's time
        const updatedTimes = {
          ...currentTimes,
          [playerId]: parseInt(reactionTime)
        };

        transaction.update(roomRef, {
          'currentPrompt.ReactionGameOptions.allReactionTimes': updatedTimes,
          updatedAt: serverTimestamp(),
        });
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit reaction time');
      throw err;
    }
  };

  const submitPopLockScore = async (roomCode: string, playerId: string, score: string) => {
    try {
      const roomRef = doc(db, 'rooms', roomCode);
      await runTransaction(db, async (transaction) => {
        const roomDoc = await transaction.get(roomRef);
        if (!roomDoc.exists()) throw new Error('Room not found');

        const roomData = roomDoc.data() as Room;
        if (!roomData.currentPrompt?.PopLockOptions) return;

        // Get current scores
        const currentScores = roomData.currentPrompt.PopLockOptions.scores || {};
        
        // Initialize scores for all players if this is the first submission
        if (Object.keys(currentScores).length === 0) {
          roomData.players.forEach(player => {
            currentScores[player.id] = 0;
          });
        }
        
        // Add this player's score
        const updatedScores = {
          ...currentScores,
          [playerId]: parseInt(score)
        };

        // Check if game should end - only if someone reaches target score
        const targetScore = roomData.currentPrompt.PopLockOptions.targetScore || 5;
        const shouldEndGame = parseInt(score) >= targetScore;

        transaction.update(roomRef, {
          'currentPrompt.PopLockOptions.scores': updatedScores,
          'currentPrompt.PopLockOptions.gameEnded': shouldEndGame,
          updatedAt: serverTimestamp(),
        });
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit score');
      throw err;
    }
  };

  const submitBattleshipMove = async (roomCode: string, playerId: string, move: string) => {
    try {
      const roomRef = doc(db, 'rooms', roomCode);
      await runTransaction(db, async (transaction) => {
        const roomDoc = await transaction.get(roomRef);
        if (!roomDoc.exists()) throw new Error('Room not found');

        const roomData = roomDoc.data() as Room;
        if (!roomData.currentPrompt?.BattleshipOptions) return;

        const [action, coords] = move.split(':');
        const [x, y] = coords.split(',').map(Number);

        if (action === 'place') {
          // Handle ship placement
          transaction.update(roomRef, {
            'currentPrompt.BattleshipOptions.ship': { x, y },
            updatedAt: serverTimestamp(),
          });
        } else if (action === 'shoot') {
          // Handle shooting
          const shots = roomData.currentPrompt.BattleshipOptions.shots || {};
          const hits = roomData.currentPrompt.BattleshipOptions.hits || [];
          const ship = roomData.currentPrompt.BattleshipOptions.ship;
          
          // Add shot to player's shots
          const updatedShots = {
            ...shots,
            [playerId]: { x, y }
          };

          // Check if shot hit the ship
          const isHit = ship && ship.x === x && ship.y === y;
          const updatedHits = isHit ? [...hits, playerId] : hits;

          // Game ends when all non-current players have taken their shot
          const nonCurrentPlayers = roomData.players.filter(p => p.id !== roomData.currentTurn);
          const allPlayersShot = nonCurrentPlayers.every(p => updatedShots[p.id]);

          transaction.update(roomRef, {
            'currentPrompt.BattleshipOptions.shots': updatedShots,
            'currentPrompt.BattleshipOptions.hits': updatedHits,
            'currentPrompt.BattleshipOptions.gameEnded': allPlayersShot,
            updatedAt: serverTimestamp(),
          });
        }
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit move');
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
    startTurn,
    completePrompt,
    submitVote,
    submitKeepThreeSelection,
    subscribeToRoom,
    updateGameSettings,
    kickPlayer,
    showTimedCategory,
    submitReactionTime,
    submitPopLockScore,
    submitBattleshipMove,
  };
}; 