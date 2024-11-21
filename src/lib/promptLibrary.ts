import { Prompt, PromptType } from '@/types/prompt';
import { Player } from '@/types/game';
import { 
  //REACTION_PROMPTS, 
  //POPLOCK_PROMPTS,
  //BATTLESHIP_PROMPTS,
 WORDRACE_PROMPTS,
  //CHARADES_PROMPTS,
  CHARADES_WORDS,
  WORDRACE_WORDS
} from './promptData';

// Get prompts function
export const getPrompts = (spiceLevel: number, drinkLevel: number, votingOnly = false) => {
  // Include all game prompts
  const prompts = [
    //...REACTION_PROMPTS, 
    //...POPLOCK_PROMPTS,
    //...BATTLESHIP_PROMPTS,
    ...WORDRACE_PROMPTS,
    //...CHARADES_PROMPTS
  ];
  
  return prompts.filter(prompt => 
    (prompt.spiceLevel || 0) <= spiceLevel && 
    (prompt.drinkLevel || 0) <= drinkLevel
  );
};

// Create new prompt function
export const createNewPrompt = (
  spiceLevel: number, 
  drinkLevel: number, 
  targetPlayerId: string,
  players: Player[],
  usedPrompts: string[] = []
): Prompt => {
  // Get available prompts
  let availablePrompts = getPrompts(spiceLevel, drinkLevel, true)
    .filter(prompt => !usedPrompts.includes(prompt.prompt || ''));
  
  // If all prompts have been used, reset the pool
  if (availablePrompts.length === 0) {
    availablePrompts = [
      //...REACTION_PROMPTS, 
      //...POPLOCK_PROMPTS,
      //...BATTLESHIP_PROMPTS,
      ...WORDRACE_PROMPTS,
      //...CHARADES_PROMPTS
    ];
  }

  // Get a random prompt from available ones
  const template = availablePrompts[Math.floor(Math.random() * availablePrompts.length)];
  
  // Create base prompt
  const basePrompt: Partial<Prompt> = {
    id: crypto.randomUUID(),
    type: template.type || PromptType.REACTIONGAME,
    title: template.title || 'Reaction Test',
    prompt: template.prompt || 'Tap when the screen turns red',
    targetPlayers: [targetPlayerId],
    spiceLevel: template.spiceLevel || spiceLevel,
    drinkLevel: template.drinkLevel || drinkLevel,
    completed: false,
    syncNeeded: true,
    groupResponse: true,
  };

  // Add game-specific options based on type
  if (template.type === PromptType.REACTIONGAME) {
    basePrompt.ReactionGameOptions = template.ReactionGameOptions;
  } else if (template.type === PromptType.POPLOCK) {
    basePrompt.PopLockOptions = template.PopLockOptions;
  } else if (template.type === PromptType.BATTLESHIP) {
    basePrompt.BattleshipOptions = template.BattleshipOptions;
  } else if (template.type === PromptType.WORDRACE) {
    // Get random word from our words array
    const randomWord = WORDRACE_WORDS[Math.floor(Math.random() * WORDRACE_WORDS.length)];
    
    basePrompt.WordRaceOptions = {
      style: 'wordle',
      instructions: "Type a 4-letter word. First to find it wins!",
      prize: "Winner gives out a drink, everyone else drinks!",
      word: randomWord,
      guesses: {},
      gameEnded: false
    };
  } else if (template.type === PromptType.CHARADES) {
    // Get random word from our words array
    const randomWord = CHARADES_WORDS[Math.floor(Math.random() * CHARADES_WORDS.length)];
    
    basePrompt.CharadesOptions = {
      style: 'charades',
      instructions: "Act out the word without speaking! Other players try to guess.",
      timeLimit: template.CharadesOptions?.timeLimit || 45,
      word: randomWord,
      showWord: false,
      gameEnded: false
    };
  }

  return basePrompt as Prompt;
}; 