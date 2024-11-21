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
    syncNeeded: true,
    voteOptions: [],
    votingComplete: false
  },
  {
    type: PromptType.VOTE,
    title: "Most Likely To...",
    prompt: "Who is most likely to become famous?",
    spiceLevel: 0,
    drinkLevel: 1,
    groupResponse: true,
    syncNeeded: true,
    voteOptions: [],
    votingComplete: false
  },
  {
    type: PromptType.VOTE,
    title: "Most Likely To...",
    prompt: "Who is most likely to get arrested?",
    spiceLevel: 1,
    drinkLevel: 1,
    groupResponse: true,
    syncNeeded: true,
    voteOptions: [],
    votingComplete: false
  },
  {
    type: PromptType.VOTE,
    title: "Most Likely To...",
    prompt: "Who would survive the longest in a zombie apocalypse?",
    spiceLevel: 0,
    drinkLevel: 1,
    groupResponse: true,
    syncNeeded: true,
    voteOptions: [],
    votingComplete: false
  },
  {
    type: PromptType.VOTE,
    title: "Most Likely To...",
    prompt: "Who would win in a fight?",
    spiceLevel: 1,
    drinkLevel: 1,
    groupResponse: true,
    syncNeeded: true,
    voteOptions: [],
    votingComplete: false
  },
  {
    type: PromptType.VOTE,
    title: "Most Likely To...",
    prompt: "Who would make the best superhero?",
    spiceLevel: 0,
    drinkLevel: 1,
    groupResponse: true,
    syncNeeded: true,
    voteOptions: [],
    votingComplete: false
  },
  {
    type: PromptType.VOTE,
    title: "Most Likely To...",
    prompt: "Who would be the first to survive on a desert island?",
    spiceLevel: 0,
    drinkLevel: 1,
    groupResponse: true,
    syncNeeded: true,
    voteOptions: [],
    votingComplete: false
  },
  {
    type: PromptType.VOTE,
    title: "Most Likely To...",
    prompt: "Who is most likely to become president?",
    spiceLevel: 0,
    drinkLevel: 1,
    groupResponse: true,
    syncNeeded: true,
    voteOptions: [],
    votingComplete: false
  },
  {
    type: PromptType.VOTE,
    title: "Most Likely To...",
    prompt: "Who is most likely to sleep through an important event?",
    spiceLevel: 0,
    drinkLevel: 1,
    groupResponse: true,
    syncNeeded: true,
    voteOptions: [],
    votingComplete: false
  },
  {
    type: PromptType.VOTE,
    title: "Most Likely To...",
    prompt: "Who would be the best stand-up comedian?",
    spiceLevel: 0,
    drinkLevel: 1,
    groupResponse: true,
    syncNeeded: true,
    voteOptions: [],
    votingComplete: false
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
    drinkLevel: 1,
    votingComplete: false
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
    drinkLevel: 1,
    votingComplete: false
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
    drinkLevel: 1,
    votingComplete: false
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
    drinkLevel: 1,
    votingComplete: false
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
    drinkLevel: 1,
    votingComplete: false
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
    drinkLevel: 1,
    votingComplete: false
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
    drinkLevel: 1,
    votingComplete: false
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
      speed: 3,
      targetScore: 7
    }
  }
];

// Update the BATTLESHIP_PROMPTS
const BATTLESHIP_PROMPTS: Partial<Prompt>[] = [
  {
    type: PromptType.BATTLESHIP,
    title: "Battlesips",
    prompt: "⛵ Current player places a ship, others try to sink it! Hit = Current player drinks, Miss = You drink!",
    spiceLevel: 0,
    drinkLevel: 1,
    syncNeeded: true,
    groupResponse: true,
    BattleshipOptions: {
      style: 'ships',
      instructions: "Place your ship secretly, others will try to sink it!",
      prize: "Hit = Ship captain drinks, Miss = Shooter drinks!"
    }
  },
  {
    type: PromptType.BATTLESHIP,
    title: "Battleshots",
    prompt: "⛵ Current player places a ship, others try to sink it! Hit = Current player takes a shot, Miss = You take a shot!",
    spiceLevel: 0,
    drinkLevel: 2,
    syncNeeded: true,
    groupResponse: true,
    BattleshipOptions: {
      style: 'ships',
      instructions: "Place your ship secretly, others will try to sink it!",
      prize: "Hit = Ship captain takes a shot, Miss = Shooter takes a shot!"
    }
  }
];

// Add Word Race words array
export const WORDRACE_WORDS = [
  // Drinking/Party
  "BEER", "SHOT", "WINE", "BREW", "SIPS", "PINT", "MALT", "POUR",
  "GULP", "CHUG", "FOAM", "BUZZ", "BARS", "CLUB", "RAVE", "BASS",
  "BEAT", "SONG", "TUNE", "FUNK", "ROCK", "WEED", "HIGH", "ROLL",
  "TRIP", "DOPE", "FADE", "JUUL", "COKE", "LEAN", "SESH", "RAGE",
  "YOLO", "TURN", "HOOK", "BODY", "TITS", "SEXY", "KISS", "LICK",
  "SUCK", "BITE", "MOAN", "LOVE", "LUST", "WILD", "HARD", "SOFT",
  
  // Party Actions
  "DARE", "PLAY", "SPIN", "FLIP", "LUCK", "RISK", "BOLD", "COOL",
  "VIBE", "HYPE", "JUMP", "WINK", "GLOW", "NEON", "MOVE", "SING",
  "LOUD", "LATE", "DARK", "GRND", "TASE", "BUMP", "SLAM", "BANG",
  
  // States/Feelings
  "SICK", "FADE", "GONE", "LOST", "WOKE", "DEAD", "LIVE", "WILD",
  "HYPE", "DUMB", "LAZY", "FINE", "CUTE", "HUNG", "HURT", "SORE",
  
  // Dating/Hookup
  "DATE", "FLRT", "TIND", "SNAP", "SEND", "NUDE", "SEXT", "DTFF",
  "WIFE", "BABE", "GIRL", "BOYS", "STUD", "MILF", "DILF", "THOT",
  
  // Party Places
  "CLUB", "BARS", "ROOM", "BEDS", "BATH", "POOL", "YARD", "DORM",
  "CAVE", "TRAP", "RAVE", "HOOD", "TOWN", "CRIB", "SPOT", "ZONE"
];

// Update WORDRACE_PROMPTS to use the word list
const WORDRACE_PROMPTS: Partial<Prompt>[] = [
  {
    type: PromptType.WORDRACE,
    title: "Word Race",
    prompt: "Find the 4-letter word before time runs out!",
    spiceLevel: 0,
    drinkLevel: 1,
    syncNeeded: true,
    groupResponse: true,
    WordRaceOptions: {
      style: 'wordle',
      instructions: "Type a 4-letter word. First to find it wins!",
      prize: "Winner gives out a drink, everyone else drinks!",
      word: WORDRACE_WORDS[0]  // Default word, will be randomized in promptLibrary
    }
  },
  {
    type: PromptType.WORDRACE,
    title: "Word Race",
    prompt: "Find the 4-letter word before time runs out!",
    spiceLevel: 0,
    drinkLevel: 2,
    syncNeeded: true,
    groupResponse: true,
    WordRaceOptions: {
      style: 'wordle',
      instructions: "Type a 4-letter word. First to find it wins!",
      prize: "Winner gives out shots, everyone else takes a shot!",
      word: WORDRACE_WORDS[0]  // Default word, will be randomized in promptLibrary
    }
  }
];

// Add charades words array
export const CHARADES_WORDS = [
  "Beer Pong",
  "Hangover",
  "Shot Glass",
  "Bartender",
  "Beer Belly",
  "Drunk Text",
  "Tequila Shot",
  "Wine Tasting",
  "Beer Goggles",
  "Dance Floor",
  "Last Call",
  "Happy Hour",
  "Pub Crawl",
  "Cocktail",
  "Drinking Game",
  "DJ",
  "Bouncer",
  "Dance Battle",
  "Selfie",
  "Karaoke",
  "Grinding",
  "Twerking",
  "Club Line",
  "VIP Section",
  "After Party",
  "Walk of Shame",
  "Drunk Eating",
  "Drunk Crying",
  "Flirting",
  "Making Out",
  "Passing Out",
  "Throwing Up",
  "Drunk Dancing",
  "Drunk Texting",
  "Pregaming",
  "Beer Run",
  "House Party",
  "Drinking Contest",
  "Flip Cup",
  "Body Shots",
  "Drunk Fight",
  "Lost Phone",
  "Drunk Food",
  "Hangover Cure",
  "Strip Club",
  "69",
  "Missionary",
  "Doggy Style",
  "Cowgirl",
  "Reverse Cowgirl",
  "Spooning",
  "Netflix and Chill",
  "Strip Tease",
  "Lap Dance",
  "Booty Call",
  "Friends with Benefits",
  "One Night Stand",
  "Morning Wood",
  "Walk of Shame",
  "Sexting",
  "Dry Humping",
  "French Kiss",
  "Hickey",
  "Skinny Dipping",
  "Seven Minutes in Heaven",
  "Body Shot",
  "Pole Dancing",
  "Dirty Dancing",
  "Motorboat",
  "Handcuffs",
  "Blindfold",
  "Striptease",
  "Bondage",
  "Spanking",
  "Foreplay",
  "Make Out",
  "Hook Up",
  "Late Night Text",
  "Dating App",
  "Tinder Match",
  "Dick Pic",
  "Nudes",
  "Thirst Trap",
  "Sugar Daddy",
  "Sugar Baby",
  "Drunk Dial"
];

// Update CHARADES_PROMPTS to include a word from the list
const CHARADES_PROMPTS: Partial<Prompt>[] = [
  {
    type: PromptType.CHARADES,
    title: "Charades",
    prompt: "Act out the word without speaking!",
    spiceLevel: 0,
    drinkLevel: 1,
    syncNeeded: true,
    groupResponse: true,
    CharadesOptions: {
      style: 'charades',
      instructions: "Act out the word without speaking! Other players try to guess.",
      timeLimit: 45,
      showWord: false,
      word: CHARADES_WORDS[0]
    }
  },
  {
    type: PromptType.CHARADES,
    title: "Spicy Charades",
    prompt: "Act out the word without speaking!",
    spiceLevel: 2,
    drinkLevel: 1,
    syncNeeded: true,
    groupResponse: true,
    CharadesOptions: {
      style: 'charades',
      instructions: "Act out the word without speaking! Other players try to guess.",
      timeLimit: 60,
      showWord: false,
      word: CHARADES_WORDS[0]
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
  POPLOCK_PROMPTS,
  BATTLESHIP_PROMPTS,
  WORDRACE_PROMPTS,
  CHARADES_PROMPTS
};