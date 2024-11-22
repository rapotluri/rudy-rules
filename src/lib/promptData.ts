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
  },
  {
    type: PromptType.DARE,
    title: "Dare",
    prompt: "Get slapped by the player to your left",
    spiceLevel: 1,
    drinkLevel: 0
  },
  {
    type: PromptType.DARE,
    title: "Dare",
    prompt: "Take a body shot",
    spiceLevel: 2,
    drinkLevel: 1
  },
  {
    type: PromptType.DARE,
    title: "Dare",
    prompt: "Do 10 push ups",
    spiceLevel: 0,
    drinkLevel: 0
  },
  {
    type: PromptType.DARE,
    title: "Dare",
    prompt: "Sit on someone's lap until your next turn",
    spiceLevel: 2,
    drinkLevel: 0
  },
  {
    type: PromptType.DARE,
    title: "Dare",
    prompt: "Either kiss or slap the player on your right",
    spiceLevel: 2,
    drinkLevel: 0
  },
  {
    type: PromptType.DARE,
    title: "Dare",
    prompt: "Let someone pour a drink into your mouth",
    spiceLevel: 1,
    drinkLevel: 1
  },
  {
    type: PromptType.DARE,
    title: "Dare",
    prompt: "Let someone 'mama bird' a drink into your mouth",
    spiceLevel: 2,
    drinkLevel: 1
  },
  {
    type: PromptType.DARE,
    title: "Dare",
    prompt: "Let the group give you a dare",
    spiceLevel: 0,
    drinkLevel: 0
  },
  {
    type: PromptType.DARE,
    title: "Dare",
    prompt: "Attempt wall twerking",
    spiceLevel: 1,
    drinkLevel: 0
  },
  {
    type: PromptType.DARE,
    title: "Dare",
    prompt: "Trade tops with someone",
    spiceLevel: 2,
    drinkLevel: 0
  },
  {
    type: PromptType.DARE,
    title: "Dare",
    prompt: "Lose 1 article of clothing",
    spiceLevel: 2,
    drinkLevel: 0
  },
  {
    type: PromptType.DARE,
    title: "Dare",
    prompt: "Do your best moan",
    spiceLevel: 2,
    drinkLevel: 0
  },
  {
    type: PromptType.DARE,
    title: "Dare",
    prompt: "Get spanked with a nearby object",
    spiceLevel: 2,
    drinkLevel: 0
  },
  {
    type: PromptType.DARE,
    title: "Dare",
    prompt: "Attempt doing the worm",
    spiceLevel: 1,
    drinkLevel: 2
  },
  {
    type: PromptType.DARE,
    title: "Dare",
    prompt: "Give someone a lap dance",
    spiceLevel: 2,
    drinkLevel: 0
  },
  {
    type: PromptType.DARE,
    title: "Dare",
    prompt: "Let someone draw a sharpie tattoo on you",
    spiceLevel: 2,
    drinkLevel: 0
  },
  {
    type: PromptType.DARE,
    title: "Dare",
    prompt: "Take off your bra or drink if you don't have one",
    spiceLevel: 2,
    drinkLevel: 1
  },
  {
    type: PromptType.DARE,
    title: "Dare",
    prompt: "Pick two players to kiss",
    spiceLevel: 2,
    drinkLevel: 0
  },
  {
    type: PromptType.DARE,
    title: "Dare",
    prompt: "Anyone who has kissed someone here must kiss them again",
    spiceLevel: 2,
    drinkLevel: 0
  },
  {
    type: PromptType.DARE,
    title: "Dare",
    prompt: "Scoot your ass on the carpet like a dog, or take a shot",
    spiceLevel: 2,
    drinkLevel: 1
  }
];

// Add Voting Challenges
const VOTE_PROMPTS: Partial<Prompt>[] = [
  {
    type: PromptType.VOTE,
    title: "Most Likely...",
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
    title: "Most Likely...",
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
    title: "Most Likely...",
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
    title: "Most Likely...",
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
    title: "Most Likely...",
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
    title: "Most Likely...",
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
    title: "Most Likely...",
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
    title: "Most Likely...",
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
    title: "Most Likely...",
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
    title: "Most Likely...",
    prompt: "Who would be the best stand-up comedian?",
    spiceLevel: 0,
    drinkLevel: 1,
    groupResponse: true,
    syncNeeded: true,
    voteOptions: [],
    votingComplete: false
  },
  {
    type: PromptType.VOTE,
    title: "Most Likely...",
    prompt: "Who is most likely to be bad at sex?",
    spiceLevel: 2,
    drinkLevel: 1,
    groupResponse: true,
    syncNeeded: true,
    voteOptions: [],
    votingComplete: false
  },
  {
    type: PromptType.VOTE,
    title: "Most Likely...",
    prompt: "Who is most likely to date within their friend group?",
    spiceLevel: 2,
    drinkLevel: 1,
    groupResponse: true,
    syncNeeded: true,
    voteOptions: [],
    votingComplete: false
  },
  {
    type: PromptType.VOTE,
    title: "Most Likely...",
    prompt: "Who is most likely to win at beer pong?",
    spiceLevel: 2,
    drinkLevel: 2,
    groupResponse: true,
    syncNeeded: true,
    voteOptions: [],
    votingComplete: false
  },
  {
    type: PromptType.VOTE,
    title: "Most Likely...",
    prompt: "Who is most likely to get whiskey dick?",
    spiceLevel: 2,
    drinkLevel: 2,
    groupResponse: true,
    syncNeeded: true,
    voteOptions: [],
    votingComplete: false
  },
  {
    type: PromptType.VOTE,
    title: "Most Likely...",
    prompt: "Who is most likely to fake being drunk?",
    spiceLevel: 2,
    drinkLevel: 1,
    groupResponse: true,
    syncNeeded: true,
    voteOptions: [],
    votingComplete: false
  },
  {
    type: PromptType.VOTE,
    title: "Most Likely...",
    prompt: "Who is most likely to cry when drunk?",
    spiceLevel: 2,
    drinkLevel: 2,
    groupResponse: true,
    syncNeeded: true,
    voteOptions: [],
    votingComplete: false
  },
  {
    type: PromptType.VOTE,
    title: "Most Likely...",
    prompt: "Who is most likely to get a tattoo of their partner's name?",
    spiceLevel: 2,
    drinkLevel: 1,
    groupResponse: true,
    syncNeeded: true,
    voteOptions: [],
    votingComplete: false
  },
  {
    type: PromptType.VOTE,
    title: "Most Likely...",
    prompt: "Who is most likely to give hickeys?",
    spiceLevel: 2,
    drinkLevel: 1,
    groupResponse: true,
    syncNeeded: true,
    voteOptions: [],
    votingComplete: false
  },
  {
    type: PromptType.VOTE,
    title: "Most Likely...",
    prompt: "Who is most likely to get noise complaints because of sex?",
    spiceLevel: 2,
    drinkLevel: 1,
    groupResponse: true,
    syncNeeded: true,
    voteOptions: [],
    votingComplete: false
  },
  {
    type: PromptType.VOTE,
    title: "Most Likely...",
    prompt: "Who is most likely to end a relationship because of bad sex?",
    spiceLevel: 2,
    drinkLevel: 1,
    groupResponse: true,
    syncNeeded: true,
    voteOptions: [],
    votingComplete: false
  },
  {
    type: PromptType.VOTE,
    title: "Most Likely...",
    prompt: "Who is most likely to watch porn daily?",
    spiceLevel: 2,
    drinkLevel: 1,
    groupResponse: true,
    syncNeeded: true,
    voteOptions: [],
    votingComplete: false
  },
  {
    type: PromptType.VOTE,
    title: "Most Likely...",
    prompt: "Who is most likely to be in an orgy?",
    spiceLevel: 2,
    drinkLevel: 1,
    groupResponse: true,
    syncNeeded: true,
    voteOptions: [],
    votingComplete: false
  },
  {
    type: PromptType.VOTE,
    title: "Most Likely...",
    prompt: "Who is most likely to hook up in a bathroom?",
    spiceLevel: 2,
    drinkLevel: 1,
    groupResponse: true,
    syncNeeded: true,
    voteOptions: [],
    votingComplete: false
  },
  {
    type: PromptType.VOTE,
    title: "Most Likely...",
    prompt: "Who is most likely to drunk text a crush?",
    spiceLevel: 2,
    drinkLevel: 2,
    groupResponse: true,
    syncNeeded: true,
    voteOptions: [],
    votingComplete: false
  },
  {
    type: PromptType.VOTE,
    title: "Most Likely...",
    prompt: "Who is most likely to have the highest body count?",
    spiceLevel: 2,
    drinkLevel: 1,
    groupResponse: true,
    syncNeeded: true,
    voteOptions: [],
    votingComplete: false
  },
  {
    type: PromptType.VOTE,
    title: "Most Likely...",
    prompt: "Who is most likely to lower their standards after some drinks?",
    spiceLevel: 2,
    drinkLevel: 2,
    groupResponse: true,
    syncNeeded: true,
    voteOptions: [],
    votingComplete: false
  },
  {
    type: PromptType.VOTE,
    title: "Most Likely...",
    prompt: "Who is most likely to have watched porn most recently?",
    spiceLevel: 2,
    drinkLevel: 1,
    groupResponse: true,
    syncNeeded: true,
    voteOptions: [],
    votingComplete: false
  },
  {
    type: PromptType.VOTE,
    title: "Most Likely...",
    prompt: "Who is most likely to have a one night stand tonight?",
    spiceLevel: 2,
    drinkLevel: 1,
    groupResponse: true,
    syncNeeded: true,
    voteOptions: [],
    votingComplete: false
  },
  {
    type: PromptType.VOTE,
    title: "Most Likely...",
    prompt: "Who is most likely to have the most questionable search history?",
    spiceLevel: 2,
    drinkLevel: 1,
    groupResponse: true,
    syncNeeded: true,
    voteOptions: [],
    votingComplete: false
  },
  {
    type: PromptType.VOTE,
    title: "Most Likely...",
    prompt: "Who is most likely to get free drinks at the bar?",
    spiceLevel: 2,
    drinkLevel: 1,
    groupResponse: true,
    syncNeeded: true,
    voteOptions: [],
    votingComplete: false
  },
  {
    type: PromptType.VOTE,
    title: "Most Likely...",
    prompt: "Who is most likely to cry during sex?",
    spiceLevel: 2,
    drinkLevel: 1,
    groupResponse: true,
    syncNeeded: true,
    voteOptions: [],
    votingComplete: false
  },
  {
    type: PromptType.VOTE,
    title: "Most Likely...",
    prompt: "Who is most likely to get back with an ex?",
    spiceLevel: 2,
    drinkLevel: 1,
    groupResponse: true,
    syncNeeded: true,
    voteOptions: [],
    votingComplete: false
  },
  {
    type: PromptType.VOTE,
    title: "Most Likely...",
    prompt: "Who is most likely to be the loudest in bed?",
    spiceLevel: 2,
    drinkLevel: 1,
    groupResponse: true,
    syncNeeded: true,
    voteOptions: [],
    votingComplete: false
  }
];

// Separate Over/Under prompts
const OVER_UNDER_PROMPTS: Partial<Prompt>[] = [
  // Regular prompts (spiceLevel: 0)
  {
    type: PromptType.OVER_UNDER,
    title: "Over/Under",
    prompt: "Is McDonald's overrated or underrated?",
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
  },
  {
    type: PromptType.OVER_UNDER,
    title: "Over/Under",
    prompt: "Is pizza overrated or underrated?",
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
    prompt: "Are Crocs overrated or underrated?",
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
    prompt: "Is Lululemon overrated or underrated?",
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
    prompt: "Are tattoos overrated or underrated?",
    voteOptions: [
      { id: "over", text: "Overrated", votes: [] },
      { id: "under", text: "Underrated", votes: [] }
    ],
    spiceLevel: 0,
    drinkLevel: 1,
    votingComplete: false
  },

  // Spicy prompts (spiceLevel: 2)
  {
    type: PromptType.OVER_UNDER,
    title: "Over/Under",
    prompt: "Are MILFs and DILFs overrated or underrated?",
    voteOptions: [
      { id: "over", text: "Overrated", votes: [] },
      { id: "under", text: "Underrated", votes: [] }
    ],
    spiceLevel: 2,
    drinkLevel: 1,
    votingComplete: false
  },
  {
    type: PromptType.OVER_UNDER,
    title: "Over/Under",
    prompt: "Is anal overrated or underrated?",
    voteOptions: [
      { id: "over", text: "Overrated", votes: [] },
      { id: "under", text: "Underrated", votes: [] }
    ],
    spiceLevel: 2,
    drinkLevel: 1,
    votingComplete: false
  },
  {
    type: PromptType.OVER_UNDER,
    title: "Over/Under",
    prompt: "Is shower sex overrated or underrated?",
    voteOptions: [
      { id: "over", text: "Overrated", votes: [] },
      { id: "under", text: "Underrated", votes: [] }
    ],
    spiceLevel: 2,
    drinkLevel: 1,
    votingComplete: false
  },
  {
    type: PromptType.OVER_UNDER,
    title: "Over/Under",
    prompt: "Are blondes overrated or underrated?",
    voteOptions: [
      { id: "over", text: "Overrated", votes: [] },
      { id: "under", text: "Underrated", votes: [] }
    ],
    spiceLevel: 2,
    drinkLevel: 1,
    votingComplete: false
  },
  {
    type: PromptType.OVER_UNDER,
    title: "Over/Under",
    prompt: "Are nipple piercings overrated or underrated?",
    voteOptions: [
      { id: "over", text: "Overrated", votes: [] },
      { id: "under", text: "Underrated", votes: [] }
    ],
    spiceLevel: 2,
    drinkLevel: 1,
    votingComplete: false
  },
  {
    type: PromptType.OVER_UNDER,
    title: "Over/Under",
    prompt: "Is missionary overrated or underrated?",
    voteOptions: [
      { id: "over", text: "Overrated", votes: [] },
      { id: "under", text: "Underrated", votes: [] }
    ],
    spiceLevel: 2,
    drinkLevel: 1,
    votingComplete: false
  },
  {
    type: PromptType.OVER_UNDER,
    title: "Over/Under",
    prompt: "Is 69ing overrated or underrated?",
    voteOptions: [
      { id: "over", text: "Overrated", votes: [] },
      { id: "under", text: "Underrated", votes: [] }
    ],
    spiceLevel: 2,
    drinkLevel: 1,
    votingComplete: false
  },
  {
    type: PromptType.OVER_UNDER,
    title: "Over/Under",
    prompt: "Is BDSM overrated or underrated?",
    voteOptions: [
      { id: "over", text: "Overrated", votes: [] },
      { id: "under", text: "Underrated", votes: [] }
    ],
    spiceLevel: 2,
    drinkLevel: 1,
    votingComplete: false
  },
  {
    type: PromptType.OVER_UNDER,
    title: "Over/Under",
    prompt: "Is oral overrated or underrated?",
    voteOptions: [
      { id: "over", text: "Overrated", votes: [] },
      { id: "under", text: "Underrated", votes: [] }
    ],
    spiceLevel: 2,
    drinkLevel: 1,
    votingComplete: false
  },
  {
    type: PromptType.OVER_UNDER,
    title: "Over/Under",
    prompt: "Are redheads overrated or underrated?",
    voteOptions: [
      { id: "over", text: "Overrated", votes: [] },
      { id: "under", text: "Underrated", votes: [] }
    ],
    spiceLevel: 2,
    drinkLevel: 1,
    votingComplete: false
  },
  {
    type: PromptType.OVER_UNDER,
    title: "Over/Under",
    prompt: "Are brunettes overrated or underrated?",
    voteOptions: [
      { id: "over", text: "Overrated", votes: [] },
      { id: "under", text: "Underrated", votes: [] }
    ],
    spiceLevel: 2,
    drinkLevel: 1,
    votingComplete: false
  },
  {
    type: PromptType.OVER_UNDER,
    title: "Over/Under",
    prompt: "Are tequila shots overrated or underrated?",
    voteOptions: [
      { id: "over", text: "Overrated", votes: [] },
      { id: "under", text: "Underrated", votes: [] }
    ],
    spiceLevel: 2,
    drinkLevel: 2,  // Higher drink level for alcohol-related prompts
    votingComplete: false
  },
  {
    type: PromptType.OVER_UNDER,
    title: "Over/Under",
    prompt: "Are espresso martinis overrated or underrated?",
    voteOptions: [
      { id: "over", text: "Overrated", votes: [] },
      { id: "under", text: "Underrated", votes: [] }
    ],
    spiceLevel: 2,
    drinkLevel: 2,  // Higher drink level for alcohol-related prompts
    votingComplete: false
  }
];

// Separate Red Flag prompts
const RED_FLAG_PROMPTS: Partial<Prompt>[] = [
  {
    type: PromptType.RED_FLAG,
    title: "Red/Green Flag",
    prompt: "Is it a red flag if they overthink anything & everything?",
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
    title: "Red/Green Flag",
    prompt: "Is it a red flag if they're overly confident?",
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
    title: "Red/Green Flag",
    prompt: "Is it a red flag if they use 3-in-1 shampoo?",
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
    title: "Red/Green Flag",
    prompt: "Is it a red flag if they never get jealous?",
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
    title: "Red/Green Flag",
    prompt: "Is it a red flag if they own a squishmallow?",
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
    title: "Red/Green Flag",
    prompt: "Is it a red flag if they have no social media?",
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
    title: "Red/Green Flag",
    prompt: "Is it a red flag if they want to share locations?",
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
    title: "Red/Green Flag",
    prompt: "Is it a red flag if they insist on splitting checks?",
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
    title: "Red/Green Flag",
    prompt: "Is it a red flag if they own a lot of stuffed animals?",
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
    title: "Red/Green Flag",
    prompt: "Is it a red flag if they ask for a prenup?",
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
    title: "Red/Green Flag",
    prompt: "Is it a red flag if they're overly close with their mom?",
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
    title: "Red/Green Flag",
    prompt: "Is it a red flag if they have a full sleeve tattoo?",
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
    title: "Red/Green Flag",
    prompt: "Is it a red flag if they have a face tattoo?",
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
    title: "Red/Green Flag",
    prompt: "Is it a red flag if they live with their parents?",
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
    title: "Red/Green Flag",
    prompt: "Is it a red flag if they talk about exes frequently?",
    voteOptions: [
      { id: "red", text: "🚩 Red Flag", votes: [] },
      { id: "green", text: "🟢 Green Flag", votes: [] }
    ],
    spiceLevel: 2,
    drinkLevel: 1,
    votingComplete: false
  },
  {
    type: PromptType.RED_FLAG,
    title: "Red/Green Flag",
    prompt: "Is it a red flag if they never text while they're out at the bars?",
    voteOptions: [
      { id: "red", text: "🚩 Red Flag", votes: [] },
      { id: "green", text: "🟢 Green Flag", votes: [] }
    ],
    spiceLevel: 2,
    drinkLevel: 1,
    votingComplete: false
  },
  {
    type: PromptType.RED_FLAG,
    title: "Red/Green Flag",
    prompt: "Is it a red flag if they don't like PDA?",
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
    title: "Red/Green Flag",
    prompt: "Is it a red flag if they have a best friend of the opposite gender?",
    voteOptions: [
      { id: "red", text: "🚩 Red Flag", votes: [] },
      { id: "green", text: "🟢 Green Flag", votes: [] }
    ],
    spiceLevel: 2,
    drinkLevel: 1,
    votingComplete: false
  },
  {
    type: PromptType.RED_FLAG,
    title: "Red/Green Flag",
    prompt: "Is it a red flag if they don't have a car, and you drive them to work?",
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
    title: "Red/Green Flag",
    prompt: "Is it a red flag if they have a snapscore of 2 million?",
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
    title: "Red/Green Flag",
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
    type: PromptType.RED_FLAG,
    title: "Red/Green Flag",
    prompt: "Is it a red flag if they have a secret OnlyFans?",
    voteOptions: [
      { id: "red", text: "🚩 Red Flag", votes: [] },
      { id: "green", text: "🟢 Green Flag", votes: [] }
    ],
    spiceLevel: 2,
    drinkLevel: 1,
    votingComplete: false
  },
  {
    type: PromptType.RED_FLAG,
    title: "Red/Green Flag",
    prompt: "Is it a red flag if they're active on dating apps but 'just looking for friends'?",
    voteOptions: [
      { id: "red", text: "🚩 Red Flag", votes: [] },
      { id: "green", text: "🟢 Green Flag", votes: [] }
    ],
    spiceLevel: 2,
    drinkLevel: 1,
    votingComplete: false
  },
  {
    type: PromptType.RED_FLAG,
    title: "Red/Green Flag",
    prompt: "Is it a red flag if they have a body count over 50?",
    voteOptions: [
      { id: "red", text: "🚩 Red Flag", votes: [] },
      { id: "green", text: "🟢 Green Flag", votes: [] }
    ],
    spiceLevel: 2,
    drinkLevel: 1,
    votingComplete: false
  },
  {
    type: PromptType.RED_FLAG,
    title: "Red/Green Flag",
    prompt: "Is it a red flag if they want an open relationship?",
    voteOptions: [
      { id: "red", text: "🚩 Red Flag", votes: [] },
      { id: "green", text: "🟢 Green Flag", votes: [] }
    ],
    spiceLevel: 2,
    drinkLevel: 1,
    votingComplete: false
  },
  {
    type: PromptType.RED_FLAG,
    title: "Red/Green Flag",
    prompt: "Is it a red flag if they've cheated in past relationships?",
    voteOptions: [
      { id: "red", text: "🚩 Red Flag", votes: [] },
      { id: "green", text: "🟢 Green Flag", votes: [] }
    ],
    spiceLevel: 2,
    drinkLevel: 1,
    votingComplete: false
  },
  {
    type: PromptType.RED_FLAG,
    title: "Red/Green Flag",
    prompt: "Is it a red flag if they're into roleplay?",
    voteOptions: [
      { id: "red", text: "🚩 Red Flag", votes: [] },
      { id: "green", text: "🟢 Green Flag", votes: [] }
    ],
    spiceLevel: 2,
    drinkLevel: 1,
    votingComplete: false
  },
  {
    type: PromptType.RED_FLAG,
    title: "Red/Green Flag",
    prompt: "Is it a red flag if they have a foot fetish?",
    voteOptions: [
      { id: "red", text: "🚩 Red Flag", votes: [] },
      { id: "green", text: "🟢 Green Flag", votes: [] }
    ],
    spiceLevel: 2,
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
    title: "Would You Rather",
    prompt: "Would you rather give up driving & riding in cars or only eat cole slaw?",
    voteOptions: [
      { id: "cars", text: "Give up cars", votes: [] },
      { id: "slaw", text: "Only eat cole slaw", votes: [] }
    ],
    spiceLevel: 0,
    drinkLevel: 1,
    votingComplete: false
  },
  {
    type: PromptType.TWO_OPTION_VOTE,
    title: "Would You Rather",
    prompt: "Would you rather get catfished or stood up on a date?",
    voteOptions: [
      { id: "catfish", text: "Get catfished", votes: [] },
      { id: "stood_up", text: "Get stood up", votes: [] }
    ],
    spiceLevel: 1,
    drinkLevel: 1,
    votingComplete: false
  },
  {
    type: PromptType.TWO_OPTION_VOTE,
    title: "Would You Rather",
    prompt: "Would you rather live in extreme heat or extreme cold?",
    voteOptions: [
      { id: "heat", text: "Extreme heat", votes: [] },
      { id: "cold", text: "Extreme cold", votes: [] }
    ],
    spiceLevel: 0,
    drinkLevel: 1,
    votingComplete: false
  },
  {
    type: PromptType.TWO_OPTION_VOTE,
    title: "Would You Rather",
    prompt: "Would you rather give up music or tasting food?",
    voteOptions: [
      { id: "music", text: "Give up music", votes: [] },
      { id: "taste", text: "Give up taste", votes: [] }
    ],
    spiceLevel: 0,
    drinkLevel: 1,
    votingComplete: false
  },
  {
    type: PromptType.TWO_OPTION_VOTE,
    title: "Would You Rather",
    prompt: "Would you rather fight prime Mike Tyson or 300 5yr olds?",
    voteOptions: [
      { id: "tyson", text: "Fight Tyson", votes: [] },
      { id: "kids", text: "Fight 300 kids", votes: [] }
    ],
    spiceLevel: 0,
    drinkLevel: 1,
    votingComplete: false
  },
  {
    type: PromptType.TWO_OPTION_VOTE,
    title: "Would You Rather",
    prompt: "Would you rather tell your past self one thing or ask your future self one question?",
    voteOptions: [
      { id: "past", text: "Tell past self", votes: [] },
      { id: "future", text: "Ask future self", votes: [] }
    ],
    spiceLevel: 0,
    drinkLevel: 1,
    votingComplete: false
  },
  {
    type: PromptType.TWO_OPTION_VOTE,
    title: "Would You Rather",
    prompt: "Would you rather get a free $10k or a 50/50 chance at $1 Million?",
    voteOptions: [
      { id: "sure", text: "Sure $10k", votes: [] },
      { id: "chance", text: "50/50 at $1M", votes: [] }
    ],
    spiceLevel: 0,
    drinkLevel: 1,
    votingComplete: false
  },
  {
    type: PromptType.TWO_OPTION_VOTE,
    title: "Would You Rather",
    prompt: "Would you rather be born 100yrs ago or 100yrs in the future?",
    voteOptions: [
      { id: "past", text: "100yrs ago", votes: [] },
      { id: "future", text: "100yrs ahead", votes: [] }
    ],
    spiceLevel: 0,
    drinkLevel: 1,
    votingComplete: false
  },
  {
    type: PromptType.TWO_OPTION_VOTE,
    title: "Would You Rather",
    prompt: "Would you rather go into a coma for 5 years or go $50k in debt right now?",
    voteOptions: [
      { id: "coma", text: "5yr coma", votes: [] },
      { id: "debt", text: "$50k debt", votes: [] }
    ],
    spiceLevel: 0,
    drinkLevel: 1,
    votingComplete: false
  },
  {
    type: PromptType.TWO_OPTION_VOTE,
    title: "Would You Rather",
    prompt: "Would you rather have a pool or a hot tub?",
    voteOptions: [
      { id: "pool", text: "Pool", votes: [] },
      { id: "hottub", text: "Hot tub", votes: [] }
    ],
    spiceLevel: 0,
    drinkLevel: 1,
    votingComplete: false
  },
  {
    type: PromptType.TWO_OPTION_VOTE,
    title: "Would You Rather",
    prompt: "Would you rather always be itchy or sticky?",
    voteOptions: [
      { id: "itchy", text: "Always itchy", votes: [] },
      { id: "sticky", text: "Always sticky", votes: [] }
    ],
    spiceLevel: 0,
    drinkLevel: 1,
    votingComplete: false
  },
  {
    type: PromptType.TWO_OPTION_VOTE,
    title: "Would You Rather",
    prompt: "Would you rather be in a long distance relationship or open relationship?",
    voteOptions: [
      { id: "distance", text: "Long distance", votes: [] },
      { id: "open", text: "Open relationship", votes: [] }
    ],
    spiceLevel: 2,
    drinkLevel: 1,
    votingComplete: false
  },
  {
    type: PromptType.TWO_OPTION_VOTE,
    title: "Would You Rather",
    prompt: "Would you rather always have morning breath or always have food in your teeth?",
    voteOptions: [
      { id: "breath", text: "Morning breath", votes: [] },
      { id: "teeth", text: "Food in teeth", votes: [] }
    ],
    spiceLevel: 0,
    drinkLevel: 1,
    votingComplete: false
  },
  {
    type: PromptType.TWO_OPTION_VOTE,
    title: "Would You Rather",
    prompt: "Would you rather order a margarita on the rocks or blended?",
    voteOptions: [
      { id: "rocks", text: "On the rocks", votes: [] },
      { id: "blended", text: "Blended", votes: [] }
    ],
    spiceLevel: 0,
    drinkLevel: 1,
    votingComplete: false
  },
  {
    type: PromptType.TWO_OPTION_VOTE,
    title: "Would You Rather",
    prompt: "Would you rather never gain weight or never age?",
    voteOptions: [
      { id: "weight", text: "Never gain weight", votes: [] },
      { id: "age", text: "Never age", votes: [] }
    ],
    spiceLevel: 0,
    drinkLevel: 1,
    votingComplete: false
  }
];

// Add new Keep Three prompts with exactly 8 options each
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
  },
  {
    type: PromptType.KEEP_THREE,
    title: "Keep 3",
    prompt: "Which 3 breakfast items would you keep if the rest disappeared?",
    keepThreeOptions: {
      category: "Breakfast Foods",
      items: [
        "Pancakes",
        "Waffles",
        "Eggs",
        "Hashbrowns",
        "Bagels",
        "Toast",
        "Bacon",
        "Cereal"
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
        "McDonalds",
        "Subway",
        "Dominos",
        "Hyderabad Biryani House",
        "Burger King",
        "Wendys",
        "KFC",
        "Pizza Hut"
      ]
    },
    spiceLevel: 0,
    drinkLevel: 1
  },
  {
    type: PromptType.KEEP_THREE,
    title: "Keep 3",
    prompt: "Which 3 alcoholic drinks would you keep if the rest disappeared?",
    keepThreeOptions: {
      category: "Alcoholic Drinks",
      items: [
        "Wine",
        "Beer",
        "Vodka",
        "Seltzers",
        "Tequila",
        "Rum",
        "Whiskey",
        "Cider"
      ]
    },
    spiceLevel: 0,
    drinkLevel: 2
  },
  {
    type: PromptType.KEEP_THREE,
    title: "Keep 3",
    prompt: "Which 3 streaming services would you keep if the rest disappeared?",
    keepThreeOptions: {
      category: "Streaming Services",
      items: [
        "Hulu",
        "Amazon Prime",
        "Netflix",
        "HBO Max",
        "Disney+",
        "YouTube",
        "Paramount+",
        "Apple TV+"
      ]
    },
    spiceLevel: 0,
    drinkLevel: 1
  },
  {
    type: PromptType.KEEP_THREE,
    title: "Keep 3",
    prompt: "Which 3 sex positions would you keep if the rest disappeared?",
    keepThreeOptions: {
      category: "Sex Positions",
      items: [
        "Missionary",
        "Doggy Style",
        "Cowgirl",
        "Reverse Cowgirl",
        "69",
        "Spooning",
        "Standing",
        "Chair"
      ]
    },
    spiceLevel: 2,
    drinkLevel: 1
  },
  {
    type: PromptType.KEEP_THREE,
    title: "Keep 3",
    prompt: "Which 3 places to have sex would you keep if the rest disappeared?",
    keepThreeOptions: {
      category: "Places for Sex",
      items: [
        "Bed",
        "Shower",
        "Car",
        "Beach",
        "Pool",
        "Hot Tub",
        "Kitchen Counter",
        "Couch"
      ]
    },
    spiceLevel: 2,
    drinkLevel: 1
  },
  {
    type: PromptType.KEEP_THREE,
    title: "Keep 3",
    prompt: "Which 3 types of foreplay would you keep if the rest disappeared?",
    keepThreeOptions: {
      category: "Foreplay",
      items: [
        "Making Out",
        "Oral",
        "Fingering",
        "Massage",
        "Nipple Play",
        "Dirty Talk",
        "Strip Tease",
        "Spanking"
      ]
    },
    spiceLevel: 2,
    drinkLevel: 1
  },
  {
    type: PromptType.KEEP_THREE,
    title: "Keep 3",
    prompt: "Which 3 types of toys would you keep if the rest disappeared?",
    keepThreeOptions: {
      category: "Adult Toys",
      items: [
        "Vibrator",
        "Dildo",
        "Handcuffs",
        "Blindfold",
        "Whip",
        "Paddle",
        "Nipple Clamps",
        "Cock Ring"
      ]
    },
    spiceLevel: 2,
    drinkLevel: 1
  }
];

// Add Fast Money prompts
const FAST_MONEY_PROMPTS: Partial<Prompt>[] = [
  {
    type: PromptType.FAST_MONEY,
    title: "Fast Money",
    prompt: "List as many items as you can",
    spiceLevel: 2,
    drinkLevel: 1,
    syncNeeded: true,
    groupResponse: true,
    FastMoneyOptions: {
      category: "Sex Positions",  // This should be used
      instructions: "List as many sex positions as you can. Give out that many sips, or drink if you can't name any!",
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
  },
  {
    type: PromptType.FAST_MONEY,
    title: "Fast Money",
    prompt: "List as many items as you can",
    spiceLevel: 2,
    drinkLevel: 1,
    syncNeeded: true,
    groupResponse: true,
    FastMoneyOptions: {
      category: "Sex Positions",
      instructions: "List as many sex positions as you can. Give out that many sips, or drink if you can't name any!",
      timeLimit: 15,
      showCategory: false
    }
  },
  {
    type: PromptType.FAST_MONEY,
    title: "Fast Money",
    prompt: "List as many items as you can",
    spiceLevel: 2,
    drinkLevel: 1,
    syncNeeded: true,
    groupResponse: true,
    FastMoneyOptions: {
      category: "Different Words for Penis",
      instructions: "List as many slang terms for penis as you can. Give out that many sips, or drink if you can't name any!",
      timeLimit: 15,
      showCategory: false
    }
  },
  {
    type: PromptType.FAST_MONEY,
    title: "Fast Money",
    prompt: "List as many items as you can",
    spiceLevel: 2,
    drinkLevel: 1,
    syncNeeded: true,
    groupResponse: true,
    FastMoneyOptions: {
      category: "Different Words for Breasts",
      instructions: "List as many slang terms for breasts as you can. Give out that many sips, or drink if you can't name any!",
      timeLimit: 15,
      showCategory: false
    }
  },
  {
    type: PromptType.FAST_MONEY,
    title: "Fast Money",
    prompt: "List as many items as you can",
    spiceLevel: 2,
    drinkLevel: 1,
    syncNeeded: true,
    groupResponse: true,
    FastMoneyOptions: {
      category: "Different Words for Sex",
      instructions: "List as many slang terms for sex as you can. Give out that many sips, or drink if you can't name any!",
      timeLimit: 15,
      showCategory: false
    }
  },
  {
    type: PromptType.FAST_MONEY,
    title: "Fast Money",
    prompt: "List as many items as you can",
    spiceLevel: 2,
    drinkLevel: 1,
    syncNeeded: true,
    groupResponse: true,
    FastMoneyOptions: {
      category: "Fetishes/Kinks",
      instructions: "List as many fetishes/kinks as you can. Give out that many sips, or drink if you can't name any!",
      timeLimit: 15,
      showCategory: false
    }
  },
  {
    type: PromptType.FAST_MONEY,
    title: "Fast Money",
    prompt: "List as many items as you can",
    spiceLevel: 2,
    drinkLevel: 1,
    syncNeeded: true,
    groupResponse: true,
    FastMoneyOptions: {
      category: "Different Words for Orgasm",
      instructions: "List as many slang terms for orgasm as you can. Give out that many sips, or drink if you can't name any!",
      timeLimit: 15,
      showCategory: false
    }
  },
  {
    type: PromptType.FAST_MONEY,
    title: "Fast Money",
    prompt: "List as many items as you can",
    spiceLevel: 2,
    drinkLevel: 1,
    syncNeeded: true,
    groupResponse: true,
    FastMoneyOptions: {
      category: "Things You Suck",
      instructions: "List as many things you can suck as you can. Give out that many sips, or drink if you can't name any!",
      timeLimit: 15,
      showCategory: false
    }
  },
  {
    type: PromptType.FAST_MONEY,
    title: "Fast Money",
    prompt: "List as many items as you can",
    spiceLevel: 2,
    drinkLevel: 1,
    syncNeeded: true,
    groupResponse: true,
    FastMoneyOptions: {
      category: "Hot Celebrities",
      instructions: "List as many hot celebrities as you can. Give out that many sips, or drink if you can't name any!",
      timeLimit: 15,
      showCategory: false
    }
  },
  {
    type: PromptType.FAST_MONEY,
    title: "Fast Money",
    prompt: "List as many items as you can",
    spiceLevel: 2,
    drinkLevel: 1,
    syncNeeded: true,
    groupResponse: true,
    FastMoneyOptions: {
      category: "Sex Toys",
      instructions: "List as many sex toys as you can. Give out that many sips, or drink if you can't name any!",
      timeLimit: 15,
      showCategory: false
    }
  },
  {
    type: PromptType.FAST_MONEY,
    title: "Fast Money",
    prompt: "List as many items as you can",
    spiceLevel: 2,
    drinkLevel: 1,
    syncNeeded: true,
    groupResponse: true,
    FastMoneyOptions: {
      category: "Different Words for Vagina",
      instructions: "List as many slang terms for vagina as you can. Give out that many sips, or drink if you can't name any!",
      timeLimit: 15,
      showCategory: false
    }
  },
  {
    type: PromptType.FAST_MONEY,
    title: "Fast Money",
    prompt: "List as many items as you can",
    spiceLevel: 2,
    drinkLevel: 1,
    syncNeeded: true,
    groupResponse: true,
    FastMoneyOptions: {
      category: "Different Words for Testicles",
      instructions: "List as many slang terms for testicles as you can. Give out that many sips, or drink if you can't name any!",
      timeLimit: 15,
      showCategory: false
    }
  },
  {
    type: PromptType.FAST_MONEY,
    title: "Fast Money",
    prompt: "List as many items as you can",
    spiceLevel: 2,
    drinkLevel: 1,
    syncNeeded: true,
    groupResponse: true,
    FastMoneyOptions: {
      category: "Different Words for Masturbating",
      instructions: "List as many slang terms for masturbating as you can. Give out that many sips, or drink if you can't name any!",
      timeLimit: 15,
      showCategory: false
    }
  },
  {
    type: PromptType.FAST_MONEY,
    title: "Fast Money",
    prompt: "List as many items as you can",
    spiceLevel: 2,
    drinkLevel: 1,
    syncNeeded: true,
    groupResponse: true,
    FastMoneyOptions: {
      category: "Condom Alternatives",
      instructions: "List as many condom alternatives as you can. Give out that many sips, or drink if you can't name any!",
      timeLimit: 15,
      showCategory: false
    }
  },
  {
    type: PromptType.FAST_MONEY,
    title: "Fast Money",
    prompt: "List as many items as you can",
    spiceLevel: 2,
    drinkLevel: 1,
    syncNeeded: true,
    groupResponse: true,
    FastMoneyOptions: {
      category: "Dildo Alternatives",
      instructions: "List as many dildo alternatives as you can. Give out that many sips, or drink if you can't name any!",
      timeLimit: 15,
      showCategory: false
    }
  },
  {
    type: PromptType.FAST_MONEY,
    title: "Fast Money",
    prompt: "List as many items as you can",
    spiceLevel: 2,
    drinkLevel: 1,
    syncNeeded: true,
    groupResponse: true,
    FastMoneyOptions: {
      category: "Porn Categories",
      instructions: "List as many porn categories as you can. Give out that many sips, or drink if you can't name any!",
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
      phrase: "Sixth sick sheik's sixth sheep's sick",
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
      phrase: "Wash an Irish wristwatch",
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
      phrase: "Red leather yellow leather",
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
      phrase: "Good blood bad blood",
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
      phrase: "How can a clam cram in a clean cream can",
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
      phrase: "New York I like unique New York",
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
      phrase: "Six sleek swans swam swiftly southwards",
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
      phrase: "Each Easter Eddie eats eighty Easter eggs",
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
      phrase: "Selfish shellfish",
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
      phrase: "Six Czech cricket critics",
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
      phrase: "A proper copper coffee pot",
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
      phrase: "Rubber baby buggy bumpers",
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
      phrase: "Double bubble gum bubbles double",
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
      phrase: "Pesky pixie pretty pesto",
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
      phrase: "The excess taxes Texas taxes vexes us",
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
      phrase: "Pad kid poured curd pulled cod",
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
      phrase: "Scissor sizzle thistles sizzle",
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
      phrase: "A loyal warrior will rarely worry",
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