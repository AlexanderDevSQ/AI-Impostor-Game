export type Player = {
  name: string;
  isImpostor: boolean;
};

export type GamePhase = 'HOME' | 'NAMES' | 'ROLES' | 'GAME';

export type GameState = {
  players: Player[];
  impostorCount: number;
  selectedCategories: string[];
  currentPhase: GamePhase;
  currentPlayerIndex: number;
  secretWord: string;
  scores: {
    jugadores: number;
    impostores: number;
  };
};
