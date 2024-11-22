export enum PromptType {
  TRUTH = 'TRUTH',
  DARE = 'DARE',
  DRINK = 'DRINK',
  GROUP_DRINK = 'GROUP_DRINK',
  VOTE = 'VOTE',
  TWO_OPTION_VOTE = 'TWO_OPTION_VOTE',
  KEEP_THREE = 'KEEP_THREE',
  REACTIONGAME = 'REACTIONGAME',
  FAST_MONEY = 'FAST_MONEY',
  TONGUE_TWISTER = 'TONGUE_TWISTER',
  POPLOCK = 'POPLOCK',
  BATTLESHIP = 'BATTLESHIP',
  WORDRACE = 'WORDRACE',
  CHARADES = 'CHARADES'
}

export interface VoteOption {
  id: string;
  text: string;
  votes: string[];  // Array of player IDs who voted for this option
}

export interface KeepThreeOptions {
  items: string[];
  category: string;
  selectedOptions?: string[];
}

export interface FastMoneyOptions {
  category?: string;
  instructions: string;
  timeLimit: number;
  showCategory: boolean;
}

export interface TongueTwisterOptions {
  phrase: string;
  instructions: string;
  timeLimit: number;
  showPhrase?: boolean;
}

export interface ReactionGameOptions {
  style: 'reaction';
  instructions: string;
  prize: string;
  reactionStarted?: boolean;
  allReactionTimes?: Record<string, number>;
}

export interface PopLockOptions {
  style: 'poplock';
  instructions: string;
  prize: string;
  speed?: number;
  targetScore?: number;
  scores?: Record<string, number>;
  gameEnded?: boolean;
}

export interface BattleshipOptions {
  style: 'ships';
  instructions: string;
  prize: string;
  ship?: {x: number, y: number};  // Current player's ship position
  shots?: Record<string, {x: number, y: number}>;  // Each player's shot
  hits?: string[];  // Players who hit the ship (only shown at end)
  pendingHits?: string[];  // Players who hit the ship (hidden until end)
  gameEnded?: boolean;
}

export interface WordRaceOptions {
  style: 'wordle';
  instructions: string;
  prize: string;
  word?: string;  // The target word
  guesses?: Record<string, string>;  // Player guesses
  winner?: string;  // ID of player who found the word
  gameEnded?: boolean;
}

export interface CharadesOptions {
  style: 'charades';
  instructions: string;
  timeLimit: number;
  word?: string;
  category?: string;
  showWord: boolean;
  gameEnded?: boolean;
}

export interface Prompt {
  id: string;
  type: PromptType;
  title?: string;
  prompt: string;
  targetPlayers: string[];
  spiceLevel: number;
  drinkLevel: number;
  completed: boolean;
  result?: unknown;
  style?: string;
  syncNeeded?: boolean;
  groupResponse?: boolean;
  // Voting specific properties
  voteOptions?: VoteOption[];
  votingComplete?: boolean;
  winnerDrinks?: boolean;
  results?: {
    winner: VoteOption;
    loser: VoteOption;
  };
  keepThreeOptions?: KeepThreeOptions;
  selectedOptions?: string[];
  FastMoneyOptions?: FastMoneyOptions;
  TongueTwisterOptions?: TongueTwisterOptions;
  ReactionGameOptions?: ReactionGameOptions;
  PopLockOptions?: PopLockOptions;
  BattleshipOptions?: BattleshipOptions;
  WordRaceOptions?: WordRaceOptions;
  CharadesOptions?: CharadesOptions;
}

// Basic challenge library
export const BASIC_PROMPTS: Partial<Prompt>[] = [
  {
    type: PromptType.DRINK,
    title: "Take a Drink",
    prompt: "Take {n} sips",
    drinkLevel: 1,
    spiceLevel: 0
  },
  {
    type: PromptType.TRUTH,
    title: "Truth",
    prompt: "What's your most embarrassing moment?",
    drinkLevel: 0,
    spiceLevel: 1
  },
  {
    type: PromptType.DARE,
    title: "Dare",
    prompt: "Do your best impression of another player",
    drinkLevel: 0,
    spiceLevel: 1
  },
  {
    type: PromptType.GROUP_DRINK,
    title: "Group Drink",
    prompt: "Everyone drink!",
    drinkLevel: 1,
    spiceLevel: 0
  }
]; 