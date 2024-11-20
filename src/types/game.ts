export interface Player {
  id: string;
  name: string;
  isHost: boolean;
  isConnected: boolean;
  score: number;
  color: string;
  avatar?: string;
  drinks: number;
  lastActive: number;
}

export interface Room {
  id: string;
  code: string;
  hostId: string;
  players: Player[];
  gameState: GameState;
  currentTurn: string | null;
  currentChallenge: Challenge | null;
  roundNumber: number;
  createdAt: number;
  updatedAt: number;
  settings: GameSettings;
}

export interface Challenge {
  id: string;
  type: ChallengeType;
  prompt: string;
  targetPlayers: string[];
  result?: any;
  timeLimit?: number;
}

export enum GameState {
  LOBBY = 'LOBBY',
  STARTING = 'STARTING',
  PLAYING = 'PLAYING',
  CHALLENGE_ACTIVE = 'CHALLENGE_ACTIVE',
  ROUND_END = 'ROUND_END',
  ENDED = 'ENDED'
}

export enum ChallengeType {
  DRINK = 'DRINK',
  GIVE_DRINK = 'GIVE_DRINK',
  GROUP_CHALLENGE = 'GROUP_CHALLENGE',
  VOTE = 'VOTE',
  MINI_GAME = 'MINI_GAME',
  TRUTH_OR_DARE = 'TRUTH_OR_DARE'
}

export interface GameSettings {
  drinkLevel: DrinkLevel;
  spiceLevel: SpiceLevel;
}

export enum DrinkLevel {
  CASUAL = 'CASUAL',     // 1-2 sips
  MODERATE = 'MODERATE', // 2-3 sips
  HEAVY = 'HEAVY'        // 4-5 sips
}

export enum SpiceLevel {
  FAMILY = 'FAMILY',         // Clean fun
  SPICY = 'SPICY',          // Suggestive content
  EXTRA_SPICY = 'EXTRA_SPICY' // Adult content
} 