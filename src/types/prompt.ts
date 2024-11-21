export enum PromptType {
  TRUTH = 'TRUTH',
  DARE = 'DARE',
  DRINK = 'DRINK',
  GROUP_DRINK = 'GROUP_DRINK',
  VOTE = 'VOTE',
  TWO_OPTION_VOTE = 'TWO_OPTION_VOTE',
  KEEP_THREE = 'KEEP_THREE',
  REACTIONGAME = 'REACTIONGAME',
  TIMED = 'TIMED'
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

export interface TimedPromptOptions {
  category?: string;
  instructions: string;
  timeLimit: number;  // in seconds
  showCategory: boolean;  // to control when to show category
  style: 'fast_money' | 'tongue_twister';
}

export interface ReactionGameOptions {
  style: 'reaction';
  instructions: string;
  prize: string;
  reactionStarted?: boolean;
  allReactionTimes?: Record<string, number>;
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
  timedOptions?: TimedPromptOptions;
  ReactionGameOptions?: ReactionGameOptions;
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