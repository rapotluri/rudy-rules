const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export const generateRoomCode = (): string => {
  let result = '';
  for (let i = 0; i < 4; i++) {
    result += CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS.length));
  }
  return result;
};

export const isValidRoomCode = (code: string): boolean => {
  return /^[A-Z]{4}$/.test(code);
}; 