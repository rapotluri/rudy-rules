import { Prompt, PromptType } from '@/types/prompt';

// Basic truth prompts from DrinkRoyale
export const TRUTH_PROMPTS: Partial<Prompt>[] = [
  {
    type: PromptType.TRUTH,
    title: "Truth",
    prompt: "What is your biggest turn on?",
    spiceLevel: 2,
    drinkLevel: 0
  },
  {
    type: PromptType.TRUTH,
    title: "Truth",
    prompt: "What is your biggest turn off?",
    spiceLevel: 2,
    drinkLevel: 0
  },
  {
    type: PromptType.TRUTH,
    title: "Truth",
    prompt: "What is the strangest place you've had sex?",
    spiceLevel: 2,
    drinkLevel: 0
  },
  {
    type: PromptType.TRUTH,
    title: "Truth",
    prompt: "Who is your celebrity crush?",
    spiceLevel: 1,
    drinkLevel: 0
  },
  {
    type: PromptType.TRUTH,
    title: "Truth",
    prompt: "Do you have a 'comfort movie'?",
    spiceLevel: 0,
    drinkLevel: 0
  },
  {
    type: PromptType.TRUTH,
    prompt: "Do you have any guilty pleasures?",
    spiceLevel: 0,
    drinkLevel: 0
  },
  {
    type: PromptType.TRUTH,
    prompt: "What is your favorite movie genre?",
    spiceLevel: 0,
    drinkLevel: 0
  },
  {
    type: PromptType.TRUTH,
    prompt: "What is your non-work non-school proudest achievement?",
    spiceLevel: 0,
    drinkLevel: 0
  },
  {
    type: PromptType.TRUTH,
    prompt: "Do you have any habits you're trying to break?",
    spiceLevel: 0,
    drinkLevel: 0
  },
  {
    type: PromptType.TRUTH,
    prompt: "What is your ideal date?",
    spiceLevel: 1,
    drinkLevel: 0
  }
];

// Add Voting Challenges
export const VOTE_PROMPTS: Partial<Prompt>[] = [
  {
    type: PromptType.VOTE,
    title: "Most Likely To...",
    prompt: "Who is most likely to become a millionaire?",
    spiceLevel: 0,
    drinkLevel: 1,
    groupResponse: true,
    syncNeeded: true
  },
  {
    type: PromptType.VOTE,
    title: "Most Likely To...",
    prompt: "Who is most likely to become famous?",
    spiceLevel: 0,
    drinkLevel: 1,
    groupResponse: true,
    syncNeeded: true
  },
  {
    type: PromptType.VOTE,
    title: "Most Likely To...",
    prompt: "Who is most likely to get arrested?",
    spiceLevel: 1,
    drinkLevel: 1,
    groupResponse: true,
    syncNeeded: true
  },
  {
    type: PromptType.VOTE,
    title: "Most Likely To...",
    prompt: "Who would survive the longest in a zombie apocalypse?",
    spiceLevel: 0,
    drinkLevel: 1,
    groupResponse: true,
    syncNeeded: true
  },
  {
    type: PromptType.VOTE,
    title: "Most Likely To...",
    prompt: "Who would win in a fight?",
    spiceLevel: 1,
    drinkLevel: 1,
    groupResponse: true,
    syncNeeded: true
  },
  {
    type: PromptType.VOTE,
    title: "Most Likely To...",
    prompt: "Who would make the best superhero?",
    spiceLevel: 0,
    drinkLevel: 1,
    groupResponse: true,
    syncNeeded: true
  },
  {
    type: PromptType.VOTE,
    title: "Most Likely To...",
    prompt: "Who would be the first to survive on a desert island?",
    spiceLevel: 0,
    drinkLevel: 1,
    groupResponse: true,
    syncNeeded: true
  },
  {
    type: PromptType.VOTE,
    title: "Most Likely To...",
    prompt: "Who is most likely to become president?",
    spiceLevel: 0,
    drinkLevel: 1,
    groupResponse: true,
    syncNeeded: true
  },
  {
    type: PromptType.VOTE,
    title: "Most Likely To...",
    prompt: "Who is most likely to sleep through an important event?",
    spiceLevel: 0,
    drinkLevel: 1,
    groupResponse: true,
    syncNeeded: true
  },
  {
    type: PromptType.VOTE,
    title: "Most Likely To...",
    prompt: "Who would be the best stand-up comedian?",
    spiceLevel: 0,
    drinkLevel: 1,
    groupResponse: true,
    syncNeeded: true
  }
];

export const TWO_OPTION_PROMPTS: Partial<Prompt>[] = [
  {
    type: PromptType.TWO_OPTION_VOTE,
    title: "Would You Rather",
    prompt: "Would you rather live in extreme heat or extreme cold?",
    voteOptions: [
      { id: "heat", text: "Extreme Heat", votes: [] },
      { id: "cold", text: "Extreme Cold", votes: [] }
    ],
    spiceLevel: 0,
    drinkLevel: 1
  },
  {
    type: PromptType.TWO_OPTION_VOTE,
    title: "Over/Under",
    prompt: "Is Taco Bell overrated or underrated?",
    voteOptions: [
      { id: "over", text: "Overrated", votes: [] },
      { id: "under", text: "Underrated", votes: [] }
    ],
    spiceLevel: 0,
    drinkLevel: 1
  }
];