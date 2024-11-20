import { Prompt, PromptType } from '@/types/prompt';
import { Player } from '@/types/game';
import { TRUTH_PROMPTS, VOTE_PROMPTS, TWO_OPTION_PROMPTS } from '@/lib/promptData';

// Get prompts function
export const getPrompts = (spiceLevel: number, drinkLevel: number, votingOnly = false) => {
  const prompts = votingOnly 
    ? [...VOTE_PROMPTS, ...TWO_OPTION_PROMPTS] 
    : [...TRUTH_PROMPTS, ...VOTE_PROMPTS, ...TWO_OPTION_PROMPTS];
  
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
    //availablePrompts = [...VOTE_PROMPTS, ...TWO_OPTION_PROMPTS];
    availablePrompts = [...TWO_OPTION_PROMPTS];
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
    groupResponse: true,
    votingComplete: false
  };

  // Add type-specific properties
  if (template.type === PromptType.TWO_OPTION_VOTE) {
    return {
      ...basePrompt,
      voteOptions: template.voteOptions || [
        { id: 'option1', text: 'Option 1', votes: [] },
        { id: 'option2', text: 'Option 2', votes: [] }
      ]
    } as Prompt;
  } else {
    return {
      ...basePrompt,
      voteOptions: players.map(player => ({
        id: player.id,
        text: player.name,
        votes: []
      }))
    } as Prompt;
  }
}; 