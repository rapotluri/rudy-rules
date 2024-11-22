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
    prompt: "Tits or ass?",
    spiceLevel: 2,
    drinkLevel: 0
  },
  {
    type: PromptType.TRUTH,
    title: "Truth",
    prompt: "Which player smells the best?",
    spiceLevel: 2,
    drinkLevel: 0
  },
  {
    type: PromptType.TRUTH,
    title: "Truth",
    prompt: "What's a song you'd put in a sex playlist?",
    spiceLevel: 2,
    drinkLevel: 0
  },
  {
    type: PromptType.TRUTH,
    title: "Truth",
    prompt: "What color is your underwear?",
    spiceLevel: 2,
    drinkLevel: 0
  },
  {
    type: PromptType.TRUTH,
    title: "Truth",
    prompt: "When is the last time you had sex?",
    spiceLevel: 2,
    drinkLevel: 0
  },
  {
    type: PromptType.TRUTH,
    title: "Truth",
    prompt: "Name a celebrity that you don't think is as attractive as people say",
    spiceLevel: 1,
    drinkLevel: 0
  },
  {
    type: PromptType.TRUTH,
    title: "Truth",
    prompt: "What non-physical trait is the most attractive?",
    spiceLevel: 1,
    drinkLevel: 0
  },
  {
    type: PromptType.TRUTH,
    title: "Truth",
    prompt: "How much would you actually need to be paid for a sex tape?",
    spiceLevel: 2,
    drinkLevel: 0
  },
  {
    type: PromptType.TRUTH,
    title: "Truth",
    prompt: "What is the most times you've masturbated in one day?",
    spiceLevel: 2,
    drinkLevel: 0
  },
  {
    type: PromptType.TRUTH,
    title: "Truth",
    prompt: "Who do you think is the most attractive celebrity that is your gender?",
    spiceLevel: 1,
    drinkLevel: 0
  },
  {
    type: PromptType.TRUTH,
    title: "Truth",
    prompt: "What's a sexual fantasy you'd roleplay?",
    spiceLevel: 2,
    drinkLevel: 0
  },
  {
    type: PromptType.TRUTH,
    title: "Truth",
    prompt: "If you could pick any two celebrities for a threesome, who would it be?",
    spiceLevel: 2,
    drinkLevel: 0
  },
  {
    type: PromptType.TRUTH,
    title: "Truth",
    prompt: "What is the most questionable thing you've masturbated to?",
    spiceLevel: 2,
    drinkLevel: 0
  },
  {
    type: PromptType.TRUTH,
    title: "Truth",
    prompt: "What is your favorite sex position?",
    spiceLevel: 2,
    drinkLevel: 0
  },
  {
    type: PromptType.TRUTH,
    title: "Truth",
    prompt: "Name your sexual awakening TV/Movie character - who was your first crush?",
    spiceLevel: 2,
    drinkLevel: 0
  },
  {
    type: PromptType.TRUTH,
    title: "Truth",
    prompt: "What's something you haven't tried in bed - but want to?",
    spiceLevel: 2,
    drinkLevel: 0
  },
  {
    type: PromptType.TRUTH,
    title: "Truth",
    prompt: "Describe your 'type'",
    spiceLevel: 1,
    drinkLevel: 0
  },
  {
    type: PromptType.TRUTH,
    title: "Truth",
    prompt: "What is your strangest 'hear me out' celebrity crush?",
    spiceLevel: 1,
    drinkLevel: 0
  },
  {
    type: PromptType.TRUTH,
    title: "Truth",
    prompt: "Do you prefer rough or gentle?",
    spiceLevel: 2,
    drinkLevel: 0
  },
  {
    type: PromptType.TRUTH,
    title: "Truth",
    prompt: "What is your favorite porn category?",
    spiceLevel: 2,
    drinkLevel: 0
  },
  {
    type: PromptType.TRUTH,
    title: "Truth",
    prompt: "Do you prefer morning sex or evening sex?",
    spiceLevel: 2,
    drinkLevel: 0
  },
  {
    type: PromptType.TRUTH,
    title: "Truth",
    prompt: "Would you rather have a threesome with an extra woman or extra man?",
    spiceLevel: 2,
    drinkLevel: 0
  },
  {
    type: PromptType.TRUTH,
    title: "Truth",
    prompt: "What is your LEAST favorite sex position?",
    spiceLevel: 2,
    drinkLevel: 0
  },
  {
    type: PromptType.TRUTH,
    title: "Truth",
    prompt: "Are you loud in bed?",
    spiceLevel: 2,
    drinkLevel: 0
  },
  {
    type: PromptType.TRUTH,
    title: "Truth",
    prompt: "What is the LEAST sexy thing you've heard someone say in the bedroom?",
    spiceLevel: 2,
    drinkLevel: 0
  },
  {
    type: PromptType.TRUTH,
    title: "Truth",
    prompt: "Do you have a clear answer for the best sex you've ever had?",
    spiceLevel: 2,
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

// Add Dare prompts
const DARE_PROMPTS: Partial<Prompt>[] = [
  {
    type: PromptType.DARE,
    title: "Dare",
    prompt: "Without taking anything off, unzip, unbutton, unhook, and untie everything you're wearing for the rest of the game",
    spiceLevel: 2,
    drinkLevel: 0
  },
  {
    type: PromptType.DARE,
    title: "Dare",
    prompt: "Give someone a wet willy",
    spiceLevel: 2,
    drinkLevel: 0
  },
  {
    type: PromptType.DARE,
    title: "Dare",
    prompt: "Trade an article of clothing with someone else",
    spiceLevel: 2,
    drinkLevel: 1
  },
  {
    type: PromptType.DARE,
    title: "Dare",
    prompt: "Let someone give you a sharpie tattoo",
    spiceLevel: 1,
    drinkLevel: 0
  },
  {
    type: PromptType.DARE,
    title: "Dare",
    prompt: "Let the players to your left and right pinch your nipples",
    spiceLevel: 2,
    drinkLevel: 0
  },
  {
    type: PromptType.DARE,
    title: "Dare",
    prompt: "Tap dance until your next turn",
    spiceLevel: 1,
    drinkLevel: 0
  },
  {
    type: PromptType.DARE,
    title: "Dare",
    prompt: "Take a drink without using your hands",
    spiceLevel: 0,
    drinkLevel: 1
  },
  {
    type: PromptType.DARE,
    title: "Dare",
    prompt: "Let someone sit on your lap and try to guess who it is while blindfolded",
    spiceLevel: 2,
    drinkLevel: 1
  },
  {
    type: PromptType.DARE,
    title: "Dare",
    prompt: "Everyone puts a hand on you and the game continues. First player to remove their hand loses and takes a shot",
    spiceLevel: 2,
    drinkLevel: 2
  },
  {
    type: PromptType.DARE,
    title: "Dare",
    prompt: "Kiss or Strip - Choose between kissing someone or losing 1 article of clothing",
    spiceLevel: 2,
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

// Separate Over/Under prompts
const OVER_UNDER_PROMPTS: Partial<Prompt>[] = [
  {
    type: PromptType.OVER_UNDER,
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
    type: PromptType.OVER_UNDER,
    title: "Over/Under",
    prompt: "Are house parties overrated or underrated?",
    voteOptions: [
      { id: "over", text: "Overrated", votes: [] },
      { id: "under", text: "Underrated", votes: [] }
    ],
    spiceLevel: 0,
    drinkLevel: 1,
    votingComplete: false
  }
];

// Separate Red Flag prompts
const RED_FLAG_PROMPTS: Partial<Prompt>[] = [
  {
    type: PromptType.RED_FLAG,
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
    type: PromptType.RED_FLAG,
    title: "Red Flag or Green Flag",
    prompt: "Is it a red flag if they live with their parents at 25?",
    voteOptions: [
      { id: "red", text: "🚩 Red Flag", votes: [] },
      { id: "green", text: "🟢 Green Flag", votes: [] }
    ],
    spiceLevel: 1,
    drinkLevel: 1,
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

// Add Fast Money prompts
const FAST_MONEY_PROMPTS: Partial<Prompt>[] = [
  {
    type: PromptType.FAST_MONEY,
    title: "Fast Money",
    prompt: "List as many items as you can",
    spiceLevel: 0,
    drinkLevel: 1,
    syncNeeded: true,
    groupResponse: true,
    FastMoneyOptions: {
      category: "Disney Movies",
      instructions: "List as many Disney movies as you can. Give out that many sips, or drink if you can't name any!",
      timeLimit: 15,
      showCategory: false
    }
  },
  {
    type: PromptType.FAST_MONEY,
    title: "Fast Money",
    prompt: "List as many items as you can",
    spiceLevel: 0,
    drinkLevel: 1,
    syncNeeded: true,
    groupResponse: true,
    FastMoneyOptions: {
      category: "Alcoholic Drinks",
      instructions: "List as many alcoholic drinks as you can. Give out that many sips, or drink if you can't name any!",
      timeLimit: 15,
      showCategory: false
    }
  },
  {
    type: PromptType.FAST_MONEY,
    title: "Fast Money",
    prompt: "List as many items as you can",
    spiceLevel: 0,
    drinkLevel: 1,
    syncNeeded: true,
    groupResponse: true,
    FastMoneyOptions: {
      category: "Fast Food Menu Items",
      instructions: "List as many fast food menu items as you can. Give out that many sips, or drink if you can't name any!",
      timeLimit: 15,
      showCategory: false
    }
  }
];

// Add Tongue Twister prompts
const TONGUE_TWISTER_PROMPTS: Partial<Prompt>[] = [
  {
    type: PromptType.TONGUE_TWISTER,
    title: "Tongue Twister",
    prompt: "Say it 3 times fast",
    spiceLevel: 0,
    drinkLevel: 1,
    syncNeeded: true,
    groupResponse: true,
    TongueTwisterOptions: {
      phrase: "She sells seashells by the seashore",
      instructions: "Say the tongue twister 3 times fast. Give out 3 sips if you succeed, drink if you fail!",
      timeLimit: 15
    }
  },
  {
    type: PromptType.TONGUE_TWISTER,
    title: "Tongue Twister",
    prompt: "Say it 3 times fast",
    spiceLevel: 0,
    drinkLevel: 1,
    syncNeeded: true,
    groupResponse: true,
    TongueTwisterOptions: {
      phrase: "Peter Piper picked a peck of pickled peppers",
      instructions: "Say the tongue twister 3 times fast. Give out 3 sips if you succeed, drink if you fail!",
      timeLimit: 15
    }
  }
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

// Add Group Drink prompts
const GROUP_DRINK_PROMPTS: Partial<Prompt>[] = [
  // Mild prompts (spiceLevel: 0)
  {
    type: PromptType.GROUP_DRINK,
    title: "Group Drink",
    prompt: "Drink if you've ever had a bar tab over $100",
    spiceLevel: 0,
    drinkLevel: 1,
    groupResponse: true
  },
  {
    type: PromptType.GROUP_DRINK,
    title: "Group Drink",
    prompt: "Drink if you've ever fired a gun<br>•​​ Drink double if you own one",
    spiceLevel: 0,
    drinkLevel: 1,
    groupResponse: true
  },
  {
    type: PromptType.GROUP_DRINK,
    title: "Group Drink",
    prompt: "Drink if you've ever pissed yourself as an adult",
    spiceLevel: 0,
    drinkLevel: 1,
    groupResponse: true
  },

  // Medium prompts (spiceLevel: 1)
  {
    type: PromptType.GROUP_DRINK,
    title: "Group Drink",
    prompt: "Drink if you've been to a strip club",
    spiceLevel: 1,
    drinkLevel: 1,
    groupResponse: true
  },
  {
    type: PromptType.GROUP_DRINK,
    title: "Group Drink",
    prompt: "Drink if you've ever gone commando",
    spiceLevel: 1,
    drinkLevel: 1,
    groupResponse: true
  },

  // Spicy prompts (spiceLevel: 2)
  {
    type: PromptType.GROUP_DRINK,
    title: "Group Drink",
    prompt: "Drink if you're eskimo brothers with a friend<br>•​​ Drink double if they're playing now",
    spiceLevel: 2,
    drinkLevel: 1,
    groupResponse: true
  },
  {
    type: PromptType.GROUP_DRINK,
    title: "Group Drink",
    prompt: "Drink if you've ever tasted cum",
    spiceLevel: 2,
    drinkLevel: 1,
    groupResponse: true
  },
  {
    type: PromptType.GROUP_DRINK,
    title: "Group Drink",
    prompt: "Drink if you've kissed someone here",
    spiceLevel: 2,
    drinkLevel: 1,
    groupResponse: true
  },
  {
    type: PromptType.GROUP_DRINK,
    title: "Group Drink",
    prompt: "Drink if you've had car sex",
    spiceLevel: 2,
    drinkLevel: 1,
    groupResponse: true
  },
  {
    type: PromptType.GROUP_DRINK,
    title: "Group Drink",
    prompt: "Drink if you've had shower sex",
    spiceLevel: 2,
    drinkLevel: 1,
    groupResponse: true
  },
  {
    type: PromptType.GROUP_DRINK,
    title: "Group Drink",
    prompt: "Drink if you've had a std",
    spiceLevel: 2,
    drinkLevel: 1,
    groupResponse: true
  },
  {
    type: PromptType.GROUP_DRINK,
    title: "Group Drink",
    prompt: "Drink if you've had a one night stand",
    spiceLevel: 2,
    drinkLevel: 1,
    groupResponse: true
  },
  {
    type: PromptType.GROUP_DRINK,
    title: "Group Drink",
    prompt: "Drink if you've been skinny dipping",
    spiceLevel: 2,
    drinkLevel: 1,
    groupResponse: true
  },
  {
    type: PromptType.GROUP_DRINK,
    title: "Group Drink",
    prompt: "Drink if you've faked an orgasm",
    spiceLevel: 2,
    drinkLevel: 1,
    groupResponse: true
  },
  {
    type: PromptType.GROUP_DRINK,
    title: "Group Drink",
    prompt: "Drink if you've tried anal",
    spiceLevel: 2,
    drinkLevel: 1,
    groupResponse: true
  },
  {
    type: PromptType.GROUP_DRINK,
    title: "Group Drink",
    prompt: "Drink if you've been walked in on",
    spiceLevel: 2,
    drinkLevel: 1,
    groupResponse: true
  },
  {
    type: PromptType.GROUP_DRINK,
    title: "Group Drink",
    prompt: "Drink if you've walked in on someone",
    spiceLevel: 2,
    drinkLevel: 1,
    groupResponse: true
  },
  {
    type: PromptType.GROUP_DRINK,
    title: "Group Drink",
    prompt: "Drink if you've gotten back with an ex",
    spiceLevel: 2,
    drinkLevel: 1,
    groupResponse: true
  },
  {
    type: PromptType.GROUP_DRINK,
    title: "Group Drink",
    prompt: "Drink if you've had a pregnancy scare",
    spiceLevel: 2,
    drinkLevel: 1,
    groupResponse: true
  },
  {
    type: PromptType.GROUP_DRINK,
    title: "Group Drink",
    prompt: "Drink if you have nudes saved",
    spiceLevel: 2,
    drinkLevel: 1,
    groupResponse: true
  },
  {
    type: PromptType.GROUP_DRINK,
    title: "Group Drink",
    prompt: "Drink if you've hooked up with someone and not known their name",
    spiceLevel: 2,
    drinkLevel: 1,
    groupResponse: true
  },
  {
    type: PromptType.GROUP_DRINK,
    title: "Group Drink",
    prompt: "Drink if you've had a finger up the ass",
    spiceLevel: 2,
    drinkLevel: 1,
    groupResponse: true
  },
  {
    type: PromptType.GROUP_DRINK,
    title: "Group Drink",
    prompt: "Drink if you own sex toys",
    spiceLevel: 2,
    drinkLevel: 1,
    groupResponse: true
  },
  {
    type: PromptType.GROUP_DRINK,
    title: "Group Drink",
    prompt: "Drink if you've ever masturbated more than twice in a day",
    spiceLevel: 2,
    drinkLevel: 1,
    groupResponse: true
  },
  {
    type: PromptType.GROUP_DRINK,
    title: "Group Drink",
    prompt: "Drink if you watched porn today",
    spiceLevel: 2,
    drinkLevel: 1,
    groupResponse: true
  },
  {
    type: PromptType.GROUP_DRINK,
    title: "Group Drink",
    prompt: "Drink if you're the player that masturbated most recently",
    spiceLevel: 2,
    drinkLevel: 1,
    groupResponse: true
  },
  {
    type: PromptType.GROUP_DRINK,
    title: "Group Drink",
    prompt: "Drink if you're the player that had sex most recently",
    spiceLevel: 2,
    drinkLevel: 1,
    groupResponse: true
  },
  {
    type: PromptType.GROUP_DRINK,
    title: "Group Drink",
    prompt: "Drink if you're the player in the longest current dry spell",
    spiceLevel: 2,
    drinkLevel: 1,
    groupResponse: true
  }
];

// Single export statement
export {
  TRUTH_PROMPTS,
  DARE_PROMPTS,
  VOTE_PROMPTS,
  TWO_OPTION_PROMPTS,
  GROUP_DRINK_PROMPTS,
  KEEP_THREE_PROMPTS,
  FAST_MONEY_PROMPTS,
  TONGUE_TWISTER_PROMPTS,
  REACTION_PROMPTS,
  POPLOCK_PROMPTS,
  BATTLESHIP_PROMPTS,
  WORDRACE_PROMPTS,
  CHARADES_PROMPTS,
  OVER_UNDER_PROMPTS,
  RED_FLAG_PROMPTS
};