import { Prompt, PromptType } from '@/types/prompt';
import { Player } from '@/types/game';
import { 
  REACTION_PROMPTS, 
  POPLOCK_PROMPTS,
  BATTLESHIP_PROMPTS,
  WORDRACE_PROMPTS,
  CHARADES_PROMPTS,
  CHARADES_WORDS,
  WORDRACE_WORDS,
  TRUTH_PROMPTS,
  DARE_PROMPTS,
  VOTE_PROMPTS,
  TWO_OPTION_PROMPTS,
  GROUP_DRINK_PROMPTS,
  FAST_MONEY_PROMPTS,
  TONGUE_TWISTER_PROMPTS,
  RED_FLAG_PROMPTS,
  OVER_UNDER_PROMPTS,
  KEEP_THREE_PROMPTS
} from './promptData';

// Define reusable minigame types
export const REUSABLE_TYPES = [
  PromptType.REACTIONGAME,
  PromptType.POPLOCK,
  PromptType.BATTLESHIP,
  PromptType.WORDRACE
];

// Define types that need unique content (words/phrases/categories)
export const UNIQUE_CONTENT_TYPES = [
  PromptType.WORDRACE,
  PromptType.CHARADES,
  PromptType.FAST_MONEY,
  PromptType.TONGUE_TWISTER
];

// Define types that need unique prompts (questions/scenarios)
export const UNIQUE_PROMPT_TYPES = [
  PromptType.TRUTH,
  PromptType.DARE,
  PromptType.VOTE,
  PromptType.TWO_OPTION_VOTE,
  PromptType.RED_FLAG,
  PromptType.OVER_UNDER,
  PromptType.KEEP_THREE
];

// Define prompt type default titles
const DEFAULT_TITLES: Record<PromptType, string> = {
  [PromptType.TRUTH]: 'Truth',
  [PromptType.DARE]: 'Dare',
  [PromptType.DRINK]: 'Drink',
  [PromptType.GROUP_DRINK]: 'Group Drink',
  [PromptType.VOTE]: 'Vote',
  [PromptType.TWO_OPTION_VOTE]: 'Vote',
  [PromptType.RED_FLAG]: 'Red Flag or Green Flag',
  [PromptType.OVER_UNDER]: 'Over or Under',
  [PromptType.KEEP_THREE]: 'Keep 3',
  [PromptType.REACTIONGAME]: 'Reaction Test',
  [PromptType.FAST_MONEY]: 'Fast Money',
  [PromptType.TONGUE_TWISTER]: 'Tongue Twister',
  [PromptType.POPLOCK]: 'Pop the Lock',
  [PromptType.BATTLESHIP]: 'Battlesips',
  [PromptType.WORDRACE]: 'Word Race',
  [PromptType.CHARADES]: 'Charades'
};

// Get prompts function
export const getPrompts = (
  spiceLevel: number, 
  drinkLevel: number, 
  lastPromptTypes: PromptType[] = [],
  usedWords: string[] = [],
  usedPrompts: string[] = []
) => {
  // Include all game prompts
  const prompts = [
    ...REACTION_PROMPTS, 
    ...POPLOCK_PROMPTS,
    ...BATTLESHIP_PROMPTS,
    ...WORDRACE_PROMPTS,
    ...CHARADES_PROMPTS,
    ...TRUTH_PROMPTS,
    ...DARE_PROMPTS,
    ...VOTE_PROMPTS,
    ...RED_FLAG_PROMPTS,
    ...OVER_UNDER_PROMPTS,
    ...GROUP_DRINK_PROMPTS,
    ...FAST_MONEY_PROMPTS,
    ...TONGUE_TWISTER_PROMPTS,
    ...KEEP_THREE_PROMPTS,
    ...TWO_OPTION_PROMPTS
  ];
  
  // Filter prompts based on difficulty levels
  let availablePrompts = prompts.filter(prompt => 
    (prompt.spiceLevel || 0) <= spiceLevel && 
    (prompt.drinkLevel || 0) <= drinkLevel
  );

  // Don't repeat any of the last 12 prompt types
  if (lastPromptTypes.length > 0) {
    availablePrompts = availablePrompts.filter(prompt => 
      !lastPromptTypes.includes(prompt.type || PromptType.DRINK)
    );
  }

  // For certain types, filter out used prompts
  availablePrompts = availablePrompts.filter(prompt => {
    if (UNIQUE_PROMPT_TYPES.includes(prompt.type || PromptType.DRINK)) {
      return !usedPrompts.includes(prompt.prompt || '');
    }
    return true;
  });

  return availablePrompts;
};

// Create new prompt function
export const createNewPrompt = (
  spiceLevel: number, 
  drinkLevel: number, 
  targetPlayerId: string,
  players: Player[],
  lastPromptTypes: PromptType[] = [],
  usedWords: string[] = [],
  usedPrompts: string[] = []
): Prompt => {
  // Get available prompts
  let availablePrompts = getPrompts(spiceLevel, drinkLevel, lastPromptTypes, usedWords, usedPrompts);
  
  // If no prompts available, reset but still avoid last prompt type
  if (availablePrompts.length === 0) {
    // For minigames, just avoid last prompt type
    if (lastPromptTypes.length > 0) {
      availablePrompts = getPrompts(spiceLevel, drinkLevel, [lastPromptTypes[lastPromptTypes.length - 1]], [], []);
    } else {
      availablePrompts = getPrompts(spiceLevel, drinkLevel, [], [], []);
    }
  }

  // If still no prompts available, use all prompts
  if (availablePrompts.length === 0) {
    availablePrompts = [
      ...REACTION_PROMPTS, 
      ...POPLOCK_PROMPTS,
      ...BATTLESHIP_PROMPTS,
      ...WORDRACE_PROMPTS,
      ...CHARADES_PROMPTS,
      ...TRUTH_PROMPTS,
      ...DARE_PROMPTS,
      ...VOTE_PROMPTS,
      ...RED_FLAG_PROMPTS,
      ...OVER_UNDER_PROMPTS,
      ...GROUP_DRINK_PROMPTS,
      ...FAST_MONEY_PROMPTS,
      ...TONGUE_TWISTER_PROMPTS,
      ...KEEP_THREE_PROMPTS
    ].filter(prompt => 
      (prompt.spiceLevel || 0) <= spiceLevel && 
      (prompt.drinkLevel || 0) <= drinkLevel
    );
  }

  // Ensure we have at least one prompt
  if (availablePrompts.length === 0) {
    // Fallback to a simple truth prompt
    availablePrompts = [{
      type: PromptType.TRUTH,
      title: "Truth",
      prompt: "Tell us something interesting about yourself",
      spiceLevel: 0,
      drinkLevel: 0,
      targetPlayers: [targetPlayerId],
      completed: false
    }];
  }

  // Get a random prompt from available ones
  const template = availablePrompts[Math.floor(Math.random() * availablePrompts.length)];
  
  // Create base prompt with required fields
  const basePrompt: Prompt = {
    id: crypto.randomUUID(),
    type: template.type!,
    title: template.title || DEFAULT_TITLES[template.type!],  // Use type-specific default title
    prompt: template.prompt || "Your turn!",  // Provide default prompt
    targetPlayers: [targetPlayerId],
    spiceLevel: template.spiceLevel || spiceLevel,
    drinkLevel: template.drinkLevel || drinkLevel,
    completed: false,
    syncNeeded: template.syncNeeded || false,
    groupResponse: template.groupResponse || false,
    voteOptions: template.voteOptions || [],
    votingComplete: template.votingComplete || false
  };

  // Add style only if it exists and is needed
  if (template.style && [
    PromptType.WORDRACE,
    PromptType.CHARADES,
    PromptType.POPLOCK,
    PromptType.BATTLESHIP,
    PromptType.REACTIONGAME
  ].includes(template.type!)) {
    basePrompt.style = template.style;
  }

  // For vote prompts that use players as options
  if (template.type === PromptType.VOTE) {
    basePrompt.voteOptions = players.map(player => ({
      id: player.id,
      text: player.name,
      votes: []
    }));
  } else if (template.type === PromptType.TWO_OPTION_VOTE) {
    // For two option votes, use the template options
    basePrompt.voteOptions = template.voteOptions;
  }

  // Add game-specific options based on type
  if (template.type === PromptType.REACTIONGAME) {
    basePrompt.ReactionGameOptions = {
      style: 'reaction' as const,  // Force the literal type
      instructions: template.ReactionGameOptions?.instructions || "Tap when the screen turns red!",
      prize: template.ReactionGameOptions?.prize || "Slowest player drinks!",
      reactionStarted: false,
      allReactionTimes: {}
    };
  } else if (template.type === PromptType.POPLOCK) {
    basePrompt.PopLockOptions = {
      style: 'poplock' as const,  // Force the literal type
      instructions: template.PopLockOptions?.instructions || "Tap when the line hits the dot!",
      prize: template.PopLockOptions?.prize || "Lowest score drinks!",
      speed: template.PopLockOptions?.speed || 3,
      targetScore: template.PopLockOptions?.targetScore || 5,
      scores: {},
      gameEnded: false
    };
  } else if (template.type === PromptType.BATTLESHIP) {
    basePrompt.BattleshipOptions = {
      style: 'ships' as const,  // Force the literal type
      instructions: template.BattleshipOptions?.instructions || "Place your ship secretly!",
      prize: template.BattleshipOptions?.prize || "Hit = Ship captain drinks, Miss = Shooter drinks!",
      shots: {},
      hits: [],
      gameEnded: false
    };
  } else if (template.type === PromptType.WORDRACE) {
    // Get unused word
    const availableWords = WORDRACE_WORDS.filter(word => !usedWords.includes(word));
    const randomWord = availableWords.length > 0 
      ? availableWords[Math.floor(Math.random() * availableWords.length)]
      : WORDRACE_WORDS[Math.floor(Math.random() * WORDRACE_WORDS.length)];
    
    basePrompt.WordRaceOptions = {
      style: 'wordle' as const,  // Force the literal type
      instructions: "Type a 4-letter word. First to find it wins!",
      prize: "Winner gives out a drink, everyone else drinks!",
      word: randomWord,
      guesses: {},
      gameEnded: false
    };
  } else if (template.type === PromptType.CHARADES) {
    // Get unused word
    const availableWords = CHARADES_WORDS.filter(word => !usedWords.includes(word));
    const randomWord = availableWords.length > 0 
      ? availableWords[Math.floor(Math.random() * availableWords.length)]
      : CHARADES_WORDS[Math.floor(Math.random() * CHARADES_WORDS.length)];
    
    basePrompt.CharadesOptions = {
      style: 'charades' as const,  // Force the literal type
      instructions: "Act out the word without speaking! Other players try to guess.",
      timeLimit: template.CharadesOptions?.timeLimit || 45,
      word: randomWord,
      showWord: false,
      gameEnded: false
    };
  } else if (template.type === PromptType.FAST_MONEY) {
    if (!template.FastMoneyOptions?.category) {
      console.error('Fast Money prompt missing category:', template);
    }
    
    basePrompt.FastMoneyOptions = {
      category: template.FastMoneyOptions?.category!,  // Remove default value
      instructions: template.FastMoneyOptions?.instructions || `List as many ${template.FastMoneyOptions?.category}s as you can!`,
      timeLimit: template.FastMoneyOptions?.timeLimit || 15,
      showCategory: false
    };
  } else if (template.type === PromptType.TONGUE_TWISTER) {
    // Get unused phrase
    const availablePhrases = template.TongueTwisterOptions?.phrase ? 
      [template.TongueTwisterOptions.phrase].filter(phrase => !usedWords.includes(phrase)) : [];
    const phrase = availablePhrases.length > 0 
      ? availablePhrases[0]
      : "She sells seashells";  // Default fallback

    basePrompt.TongueTwisterOptions = {
      phrase: phrase,
      instructions: template.TongueTwisterOptions?.instructions || "Say it 3 times fast!",
      timeLimit: template.TongueTwisterOptions?.timeLimit || 15
    };
  } else if (template.type === PromptType.KEEP_THREE) {
    // Get unused category
    const availableCategories = template.keepThreeOptions?.category ? 
      [template.keepThreeOptions.category].filter(cat => !usedWords.includes(cat)) : [];
    const category = availableCategories.length > 0 
      ? availableCategories[0]
      : "Items";  // Default fallback

    basePrompt.keepThreeOptions = {
      category: category,
      items: template.keepThreeOptions?.items || [],
      selectedOptions: []
    };
  }

  return basePrompt;
}; 