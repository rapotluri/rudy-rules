import { Challenge, ChallengeType } from '@/types/challenge';
import { Player } from '@/types/game';

// Basic truth challenges from DrinkRoyale
export const TRUTH_CHALLENGES: Partial<Challenge>[] = [
  {
    type: ChallengeType.TRUTH,
    title: "Truth",
    prompt: "What is your biggest turn on?",
    spiceLevel: 2,
    drinkLevel: 0
  },
  {
    type: ChallengeType.TRUTH,
    title: "Truth",
    prompt: "What is your biggest turn off?",
    spiceLevel: 2,
    drinkLevel: 0
  },
  {
    type: ChallengeType.TRUTH,
    title: "Truth",
    prompt: "What is the strangest place you've had sex?",
    spiceLevel: 2,
    drinkLevel: 0
  },
  {
    type: ChallengeType.TRUTH,
    title: "Truth",
    prompt: "Who is your celebrity crush?",
    spiceLevel: 1,
    drinkLevel: 0
  },
  {
    type: ChallengeType.TRUTH,
    title: "Truth",
    prompt: "Do you have a 'comfort movie'?",
    spiceLevel: 0,
    drinkLevel: 0
  },
  {
    type: ChallengeType.TRUTH,
    prompt: "Do you have any guilty pleasures?",
    spiceLevel: 0,
    drinkLevel: 0
  },
  {
    type: ChallengeType.TRUTH,
    prompt: "What is your favorite movie genre?",
    spiceLevel: 0,
    drinkLevel: 0
  },
  {
    type: ChallengeType.TRUTH,
    prompt: "What is your non-work non-school proudest achievement?",
    spiceLevel: 0,
    drinkLevel: 0
  },
  {
    type: ChallengeType.TRUTH,
    prompt: "Do you have any habits you're trying to break?",
    spiceLevel: 0,
    drinkLevel: 0
  },
  {
    type: ChallengeType.TRUTH,
    prompt: "What is your ideal date?",
    spiceLevel: 1,
    drinkLevel: 0
  }
];

// Add Voting Challenges
export const VOTE_CHALLENGES: Partial<Challenge>[] = [
  {
    type: ChallengeType.VOTE,
    title: "Most Likely To...",
    prompt: "Who is most likely to become a millionaire?",
    spiceLevel: 0,
    drinkLevel: 1,
    groupResponse: true,
    syncNeeded: true
  },
  {
    type: ChallengeType.VOTE,
    title: "Most Likely To...",
    prompt: "Who is most likely to become famous?",
    spiceLevel: 0,
    drinkLevel: 1,
    groupResponse: true,
    syncNeeded: true
  },
  {
    type: ChallengeType.VOTE,
    title: "Most Likely To...",
    prompt: "Who is most likely to get arrested?",
    spiceLevel: 1,
    drinkLevel: 1,
    groupResponse: true,
    syncNeeded: true
  },
  {
    type: ChallengeType.VOTE,
    title: "Most Likely To...",
    prompt: "Who would survive the longest in a zombie apocalypse?",
    spiceLevel: 0,
    drinkLevel: 1,
    groupResponse: true,
    syncNeeded: true
  },
  {
    type: ChallengeType.VOTE,
    title: "Most Likely To...",
    prompt: "Who would win in a fight?",
    spiceLevel: 1,
    drinkLevel: 1,
    groupResponse: true,
    syncNeeded: true
  },
  {
    type: ChallengeType.VOTE,
    title: "Most Likely To...",
    prompt: "Who would make the best superhero?",
    spiceLevel: 0,
    drinkLevel: 1,
    groupResponse: true,
    syncNeeded: true
  },
  {
    type: ChallengeType.VOTE,
    title: "Most Likely To...",
    prompt: "Who would be the first to survive on a desert island?",
    spiceLevel: 0,
    drinkLevel: 1,
    groupResponse: true,
    syncNeeded: true
  },
  {
    type: ChallengeType.VOTE,
    title: "Most Likely To...",
    prompt: "Who is most likely to become president?",
    spiceLevel: 0,
    drinkLevel: 1,
    groupResponse: true,
    syncNeeded: true
  },
  {
    type: ChallengeType.VOTE,
    title: "Most Likely To...",
    prompt: "Who is most likely to sleep through an important event?",
    spiceLevel: 0,
    drinkLevel: 1,
    groupResponse: true,
    syncNeeded: true
  },
  {
    type: ChallengeType.VOTE,
    title: "Most Likely To...",
    prompt: "Who would be the best stand-up comedian?",
    spiceLevel: 0,
    drinkLevel: 1,
    groupResponse: true,
    syncNeeded: true
  }
];

// Update getChallenges to handle both types
export const getChallenges = (spiceLevel: number, drinkLevel: number, votingOnly = false) => {
  const challenges = votingOnly ? VOTE_CHALLENGES : [...TRUTH_CHALLENGES, ...VOTE_CHALLENGES];
  return challenges.filter(challenge => 
    (challenge.spiceLevel || 0) <= spiceLevel && 
    (challenge.drinkLevel || 0) <= drinkLevel
  );
};

// Update createNewChallenge to handle both types
export const createNewChallenge = (
  spiceLevel: number, 
  drinkLevel: number, 
  targetPlayerId: string,
  players: Player[],
  usedChallenges: string[] = []
): Challenge => {
  // Get available challenges
  let availableChallenges = getChallenges(spiceLevel, drinkLevel, true)
    .filter(challenge => !usedChallenges.includes(challenge.prompt || ''));
  
  // If all challenges have been used, reset the pool
  if (availableChallenges.length === 0) {
    availableChallenges = VOTE_CHALLENGES;
  }

  // Get a random challenge from available ones
  const template = availableChallenges[Math.floor(Math.random() * availableChallenges.length)];
  
  return {
    id: crypto.randomUUID(),
    type: ChallengeType.VOTE,
    title: template.title || 'Vote',
    prompt: template.prompt || 'Who is most likely to...',
    targetPlayers: [targetPlayerId],
    spiceLevel: template.spiceLevel || spiceLevel,
    drinkLevel: template.drinkLevel || drinkLevel,
    completed: false,
    syncNeeded: true,
    groupResponse: true,
    voteOptions: players.map(player => ({
      id: player.id,
      text: player.name,
      votes: []
    })),
    votingComplete: false
  };
}; 