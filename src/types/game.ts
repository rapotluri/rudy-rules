import type { Prompt, PromptType } from './prompt';

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
  currentPrompt: Prompt | null;
  showPrompt: boolean;
  roundNumber: number;
  createdAt: number;
  updatedAt: number;
  settings: GameSettings;
  lastPromptTypes: PromptType[];
  usedWords: string[];
  usedPrompts: string[];
} 