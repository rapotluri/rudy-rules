import { Prompt, PromptType } from '@/types/prompt';
import { Player } from '@/types/game';
import { TRUTH_PROMPTS, VOTE_PROMPTS } from '@/lib/promptData';

// Get prompts function
export const getPrompts = (spiceLevel: number, drinkLevel: number, votingOnly = false) => {
  const prompts = votingOnly ? VOTE_PROMPTS : [...TRUTH_PROMPTS, ...VOTE_PROMPTS];
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
    availablePrompts = VOTE_PROMPTS;
  }

  // Get a random prompt from available ones
  const template = availablePrompts[Math.floor(Math.random() * availablePrompts.length)];
  
  return {
    id: crypto.randomUUID(),
    type: PromptType.VOTE,
    title: template.title || 'Vote',
    prompt: template.prompt || 'Who is most likely to...',
    targetPlayers: [targetPlayerId],
    spiceLevel: template.spiceLevel || spiceLevel,
    drinkLevel: template.drinkLevel || drinkLevel,
    completed: false,
    syncNeeded: true,
    groupResponse: true,
    voteOptions: players.map(player => ({
      id: player.id,
      text: player.name,
      votes: []
    })),
    votingComplete: false
  };
}; 