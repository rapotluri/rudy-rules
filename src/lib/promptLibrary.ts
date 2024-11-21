import { Prompt, PromptType } from '@/types/prompt';
import { Player } from '@/types/game';
import { 
  REACTION_PROMPTS, 
  POPLOCK_PROMPTS,
  BATTLESHIP_PROMPTS,
  WORDRACE_PROMPTS
} from './promptData';

// Get prompts function
export const getPrompts = (spiceLevel: number, drinkLevel: number, votingOnly = false) => {
  // Include all game prompts
  const prompts = [
    ...REACTION_PROMPTS, 
    ...POPLOCK_PROMPTS,
    ...BATTLESHIP_PROMPTS,
    ...WORDRACE_PROMPTS
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
      ...REACTION_PROMPTS, 
      ...POPLOCK_PROMPTS,
      ...BATTLESHIP_PROMPTS,
      ...WORDRACE_PROMPTS
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
    // Pick a random word from your word list
    const words = [
      "HELM", "VAST", "WAKE", "YARD", "ZERO", "CHIP", "DUSK", "FERN",
      
      // Drinking related
      "BEER", "SHOT", "WINE", "BREW", "SIPS", "PINT", "MEAD", "SAKE",
      "BREW", "POUR", "GULP", "CHUG", "FIZZ", "FOAM", "BUZZ", "BARS",
      
      // Fun/Game related
      "WILD", "DARE", "GAME", "PLAY", "SPIN", "FLIP", "LUCK", "RISK",
      "BOLD", "COOL", "VIBE", "HYPE", "JUMP", "WINK", "GLOW", "NEON",
      "DICE", "CARD", "TEAM", "RACE", "BEAT", "WINS", "LOSE", "DRAW",
      
      // Common 4-letter words
      "TIME", "FIRE", "SAFE", "HOPE", "MIND", "SOFT", "SPOT", "LIME",
      "DIVE", "GOAL", "FISH", "LOCK", "SOCK", "RATE", "CORE", "SHOW",
      "LOVE", "LIST", "PAGE", "MILK", "WALK", "SPIN", "REST", "TWIN",
      "FAST", "SLOW", "TALL", "TINY", "HUGE", "GOOD", "BEST", "COOL",
      "DARK", "LIFE", "STAR", "MOON", "RAIN", "SNOW", "WIND", "WAVE",
      
      // Party related
      "CLUB", "RAVE", "BASS", "BEAT", "SONG", "TUNE", "FUNK", "ROCK",
      "MOVE", "SING", "LOUD", "WILD", "LATE", "NITE", "DAWN", "DUSK",
      "GLOW", "VIBE", "HYPE", "CREW", "GANG", "TEAM", "PACK", "CREW"
    ];
    const randomWord = words[Math.floor(Math.random() * words.length)];
    basePrompt.WordRaceOptions = {
      style: 'wordle',
      instructions: "Type a 4-letter word. First to find it wins!",
      prize: "Winner gives out a drink, everyone else drinks!",
      word: randomWord,
      guesses: {},
      gameEnded: false
    };
  }

  return basePrompt as Prompt;
}; 