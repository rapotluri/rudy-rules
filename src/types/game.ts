export interface Player {
  id: string;
  name: string;
  isHost: boolean;
  isConnected: boolean;
  score: number;
  color: string;
  avatar?: string;
}

export interface Room {
  id: string;
  code: string;
  hostId: string;
  players: Player[];
  gameState: GameState;
  createdAt: number;
  updatedAt: number;
}

export enum GameState {
  LOBBY = 'LOBBY',
  PLAYING = 'PLAYING',
  ENDED = 'ENDED'
} 