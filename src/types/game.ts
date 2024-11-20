import type { Challenge } from './challenge';

export enum GameState {
  LOBBY = 'LOBBY',
  PLAYING = 'PLAYING',
  ENDED = 'ENDED'
}

export interface Player {
  id: string;
  name: string;
  isHost: boolean;
  isConnected: boolean;
  score: number;
  color: string;
  drinks: number;
  lastActive: number;
}

export interface GameSettings {
  drinkLevel: number;
  spiceLevel: number;
}

export interface Room {
  id: string;
  code: string;
  hostId: string;
  players: Player[];
  gameState: GameState;
  currentTurn: string | null;
  currentChallenge: Challenge | null;
  showChallenge: boolean;
  roundNumber: number;
  createdAt: number;
  updatedAt: number;
  settings: GameSettings;
  usedChallenges?: string[];
} 