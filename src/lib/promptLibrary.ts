import { Prompt, PromptType } from '@/types/prompt';
import { Player } from '@/types/game';
import { 
  KEEP_THREE_PROMPTS, 
  VOTE_PROMPTS, 
  FAST_MONEY_PROMPTS, 
  TONGUE_TWISTER_PROMPTS 
} from './promptData';

// Get prompts function
export const getPrompts = (spiceLevel: number, drinkLevel: number, votingOnly = false) => {
  // Return all prompt types
  const prompts = [
    ...KEEP_THREE_PROMPTS, 
    ...VOTE_PROMPTS, 
    ...FAST_MONEY_PROMPTS,
    ...TONGUE_TWISTER_PROMPTS
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
    availablePrompts = [...TONGUE_TWISTER_PROMPTS];
  }

  // Get a random prompt from available ones
  const template = availablePrompts[Math.floor(Math.random() * availablePrompts.length)];
  
  // Create base prompt
  const basePrompt: Partial<Prompt> = {
    id: crypto.randomUUID(),
    type: template.type || PromptType.VOTE,
    title: template.title || 'Vote',
    prompt: template.prompt || 'Who is most likely to...',
    targetPlayers: [targetPlayerId],
    spiceLevel: template.spiceLevel || spiceLevel,
    drinkLevel: template.drinkLevel || drinkLevel,
    completed: false,
    syncNeeded: true,
    groupResponse: template.type === PromptType.VOTE,
    selectedOptions: [],
  };

  // Add type-specific properties
  if (template.type === PromptType.VOTE) {
    basePrompt.voteOptions = players.map(player => ({
      id: player.id,
      text: player.name,
      votes: []
    }));
  } else if (template.type === PromptType.KEEP_THREE && template.keepThreeOptions) {
    basePrompt.keepThreeOptions = {
      items: template.keepThreeOptions.items,
      category: template.keepThreeOptions.category,
      selectedOptions: []
    };
  } else if (template.type === PromptType.TIMED && template.timedOptions) {
    basePrompt.timedOptions = {
      ...template.timedOptions,
      showCategory: false  // Initialize as false
    };
  }

  return basePrompt as Prompt;
}; 