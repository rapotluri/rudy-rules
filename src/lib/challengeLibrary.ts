import { Challenge, ChallengeType } from '@/types/challenge';

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

// Function to get challenges based on spice and drink levels
export const getChallenges = (spiceLevel: number, drinkLevel: number) => {
  return TRUTH_CHALLENGES.filter(challenge => 
    (challenge.spiceLevel || 0) <= spiceLevel && 
    (challenge.drinkLevel || 0) <= drinkLevel
  );
};

// Function to create a complete challenge
export const createNewChallenge = (
  spiceLevel: number, 
  drinkLevel: number, 
  targetPlayerId: string
): Challenge => {
  const availableChallenges = getChallenges(spiceLevel, drinkLevel);
  
  if (availableChallenges.length === 0) {
    return {
      id: crypto.randomUUID(),
      type: ChallengeType.TRUTH,
      title: 'Truth',
      prompt: 'Tell us something interesting about yourself',
      targetPlayers: [targetPlayerId],
      spiceLevel: 0,
      drinkLevel: 0,
      completed: false,
      syncNeeded: false,
      groupResponse: false
    };
  }

  const template = availableChallenges[Math.floor(Math.random() * availableChallenges.length)];
  
  return {
    id: crypto.randomUUID(),
    type: template.type || ChallengeType.TRUTH,
    title: template.title || 'Challenge',
    prompt: template.prompt || '',
    targetPlayers: [targetPlayerId],
    spiceLevel: spiceLevel,
    drinkLevel: drinkLevel,
    completed: false,
    syncNeeded: template.syncNeeded || false,
    groupResponse: template.groupResponse || false
  };
}; 