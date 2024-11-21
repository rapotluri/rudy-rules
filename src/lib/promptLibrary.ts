import { Prompt, PromptType } from '@/types/prompt';
import { Player } from '@/types/game';
import { REACTION_PROMPTS } from './promptData';

// Get prompts function
export const getPrompts = (spiceLevel: number, drinkLevel: number, votingOnly = false) => {
  // For testing, only return Reaction prompts
  const prompts = REACTION_PROMPTS;
  
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
    availablePrompts = REACTION_PROMPTS;
  }

  // Get a random prompt from available ones
  const template = availablePrompts[Math.floor(Math.random() * availablePrompts.length)];
  
  // Create base prompt
  const basePrompt: Partial<Prompt> = {
    id: crypto.randomUUID(),
    type: template.type || PromptType.MINIGAME,
    title: template.title || 'Reaction Test',
    prompt: template.prompt || 'Tap when the screen turns red',
    targetPlayers: [targetPlayerId],
    spiceLevel: template.spiceLevel || spiceLevel,
    drinkLevel: template.drinkLevel || drinkLevel,
    completed: false,
    syncNeeded: true,
    groupResponse: true,
    minigameOptions: template.minigameOptions
  };

  return basePrompt as Prompt;
}; 