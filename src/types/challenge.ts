export enum ChallengeType {
  TRUTH = 'TRUTH',
  DARE = 'DARE',
  DRINK = 'DRINK',
  GROUP_DRINK = 'GROUP_DRINK',
  VOTE = 'VOTE',
  MINIGAME = 'MINIGAME'
}

export interface VoteOption {
  id: string;
  text: string;
  votes: string[];  // Array of player IDs who voted for this option
}

export interface Challenge {
  id: string;
  type: ChallengeType;
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
}

// Basic challenge library
export const BASIC_CHALLENGES: Partial<Challenge>[] = [
  {
    type: ChallengeType.DRINK,
    title: "Take a Drink",
    prompt: "Take {n} sips",
    drinkLevel: 1,
    spiceLevel: 0
  },
  {
    type: ChallengeType.TRUTH,
    title: "Truth",
    prompt: "What's your most embarrassing moment?",
    drinkLevel: 0,
    spiceLevel: 1
  },
  {
    type: ChallengeType.DARE,
    title: "Dare",
    prompt: "Do your best impression of another player",
    drinkLevel: 0,
    spiceLevel: 1
  },
  {
    type: ChallengeType.GROUP_DRINK,
    title: "Group Drink",
    prompt: "Everyone drink!",
    drinkLevel: 1,
    spiceLevel: 0
  }
]; 