import { Prompt, PromptType } from '@/types/prompt';

// Basic truth prompts from DrinkRoyale
const TRUTH_PROMPTS: Partial<Prompt>[] = [
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
const VOTE_PROMPTS: Partial<Prompt>[] = [
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

const TWO_OPTION_PROMPTS: Partial<Prompt>[] = [
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
  },
  {
    type: PromptType.TWO_OPTION_VOTE,
    title: "Red Flag or Green Flag",
    prompt: "Is it a red flag if your date still has their ex on social media?",
    voteOptions: [
      { id: "red", text: "🚩 Red Flag", votes: [] },
      { id: "green", text: "🟢 Green Flag", votes: [] }
    ],
    spiceLevel: 1,
    drinkLevel: 1
  },
  {
    type: PromptType.TWO_OPTION_VOTE,
    title: "Red Flag or Green Flag",
    prompt: "Is it a red flag if they live with their parents at 25?",
    voteOptions: [
      { id: "red", text: "🚩 Red Flag", votes: [] },
      { id: "green", text: "🟢 Green Flag", votes: [] }
    ],
    spiceLevel: 1,
    drinkLevel: 1
  },
  {
    type: PromptType.TWO_OPTION_VOTE,
    title: "Red Flag or Green Flag",
    prompt: "Is it a red flag if they don't drink alcohol?",
    voteOptions: [
      { id: "red", text: "🚩 Red Flag", votes: [] },
      { id: "green", text: "🟢 Green Flag", votes: [] }
    ],
    spiceLevel: 1,
    drinkLevel: 1
  },
  {
    type: PromptType.TWO_OPTION_VOTE,
    title: "Red Flag or Green Flag",
    prompt: "Is it a red flag if they're still friends with all their exes?",
    voteOptions: [
      { id: "red", text: "🚩 Red Flag", votes: [] },
      { id: "green", text: "🟢 Green Flag", votes: [] }
    ],
    spiceLevel: 2,
    drinkLevel: 1
  },
  {
    type: PromptType.TWO_OPTION_VOTE,
    title: "Red Flag or Green Flag",
    prompt: "Is it a red flag if they don't have any close friends?",
    voteOptions: [
      { id: "red", text: "🚩 Red Flag", votes: [] },
      { id: "green", text: "🟢 Green Flag", votes: [] }
    ],
    spiceLevel: 1,
    drinkLevel: 1
  }
];

const KEEP_THREE_PROMPTS: Partial<Prompt>[] = [
  {
    type: PromptType.KEEP_THREE,
    title: "Keep 3",
    prompt: "Which 3 apps would you keep if you had to delete the rest?",
    keepThreeOptions: {
      category: "Apps",
      items: [
        "Instagram",
        "TikTok",
        "Snapchat",
        "Twitter/X",
        "WhatsApp",
        "YouTube",
        "Spotify",
        "Netflix"
      ]
    },
    spiceLevel: 0,
    drinkLevel: 1
  },
  {
    type: PromptType.KEEP_THREE,
    title: "Keep 3",
    prompt: "Which 3 fast food places would you keep if the rest disappeared?",
    keepThreeOptions: {
      category: "Fast Food",
      items: [
        "McDonald's",
        "Burger King",
        "Wendy's",
        "Taco Bell",
        "KFC",
        "Subway",
        "Chipotle",
        "Five Guys"
      ]
    },
    spiceLevel: 0,
    drinkLevel: 1
  },
  {
    type: PromptType.KEEP_THREE,
    title: "Keep 3",
    prompt: "Which 3 superpowers would you choose?",
    keepThreeOptions: {
      category: "Superpowers",
      items: [
        "Invisibility",
        "Flight",
        "Mind Reading",
        "Time Travel",
        "Super Strength",
        "Teleportation",
        "Healing",
        "Shape Shifting"
      ]
    },
    spiceLevel: 0,
    drinkLevel: 1
  }
];

const FAST_MONEY_PROMPTS: Partial<Prompt>[] = [
  {
    type: PromptType.TIMED,
    title: "Fast Money",
    prompt: "List as many items as you can",
    timedOptions: {
      category: "Disney Movies",
      instructions: "List as many Disney movies as you can. Give out that many sips, or drink if you can't name any!",
      timeLimit: 15,
      showCategory: false,
      style: "fast_money"
    },
    spiceLevel: 0,
    drinkLevel: 1
  },
  {
    type: PromptType.TIMED,
    title: "Fast Money",
    prompt: "List as many items as you can",
    timedOptions: {
      category: "Alcoholic Drinks",
      instructions: "List as many alcoholic drinks as you can. Give out that many sips, or drink if you can't name any!",
      timeLimit: 15,
      showCategory: false,
      style: "fast_money"
    },
    spiceLevel: 0,
    drinkLevel: 1
  },
  {
    type: PromptType.TIMED,
    title: "Fast Money",
    prompt: "List as many items as you can",
    timedOptions: {
      category: "Fast Food Menu Items",
      instructions: "List as many fast food menu items as you can. Give out that many sips, or drink if you can't name any!",
      timeLimit: 15,
      showCategory: false,
      style: "fast_money"
    },
    spiceLevel: 0,
    drinkLevel: 1
  }
];

const TONGUE_TWISTER_PROMPTS: Partial<Prompt>[] = [
  {
    type: PromptType.TIMED,
    title: "Tongue Twister",
    prompt: "Say it 3 times fast",
    timedOptions: {
      category: "She sells seashells by the seashore",
      instructions: "Say the tongue twister 3 times fast. Give out 3 sips if you succeed, drink if you fail!",
      timeLimit: 15,
      showCategory: false,
      style: "tongue_twister"
    },
    spiceLevel: 0,
    drinkLevel: 1
  },
  // Add more tongue twisters here
];

const REACTION_PROMPTS: Partial<Prompt>[] = [
  {
    type: PromptType.REACTIONGAME,
    title: "Reaction Test",
    prompt: "Tap when the screen turns red",
    ReactionGameOptions: {
      style: 'reaction',
      instructions: "Tap when the screen turns red. The player with the slowest reaction time drinks!",
      prize: "Slowest player drinks!"
    },
    spiceLevel: 0,
    drinkLevel: 1
  }
];

// Add this alongside your REACTION_PROMPTS
const POPLOCK_PROMPTS: Partial<Prompt>[] = [
  {
    type: PromptType.POPLOCK,
    title: "Pop the Lock",
    prompt: "Tap when the line hits the dot! First to 5 wins!",
    spiceLevel: 0,
    drinkLevel: 1,
    syncNeeded: true,
    groupResponse: true,
    PopLockOptions: {
      style: 'poplock',
      instructions: "Tap when the line hits the dot!",
      prize: "Lowest score drinks!",
      speed: 2,
      targetScore: 5
    }
  },
  {
    type: PromptType.POPLOCK,
    title: "Speed Lock",
    prompt: "Tap when the line hits the dot! Watch out, it gets faster!",
    spiceLevel: 0,
    drinkLevel: 1,
    syncNeeded: true,
    groupResponse: true,
    PopLockOptions: {
      style: 'poplock',
      instructions: "Tap when the line hits the dot!",
      prize: "Lowest score drinks!",
      speed: 1.5,
      targetScore: 3
    }
  },
  {
    type: PromptType.POPLOCK,
    title: "Master Lock",
    prompt: "Tap when the line hits the dot! High stakes version!",
    spiceLevel: 0,
    drinkLevel: 2,
    syncNeeded: true,
    groupResponse: true,
    PopLockOptions: {
      style: 'poplock',
      instructions: "Tap when the line hits the dot!",
      prize: "Winner gives out drinks, loser takes them!",
      speed: 1,
      targetScore: 7
    }
  }
];

// Single export statement
export {
  TRUTH_PROMPTS,
  VOTE_PROMPTS,
  TWO_OPTION_PROMPTS,
  KEEP_THREE_PROMPTS,
  FAST_MONEY_PROMPTS,
  TONGUE_TWISTER_PROMPTS,
  REACTION_PROMPTS,
  POPLOCK_PROMPTS
};