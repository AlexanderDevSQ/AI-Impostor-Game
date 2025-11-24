export type Player = {
    name: string;
    isImpostor: boolean;
};

export type GamePhase = 'HOME' | 'NAMES' | 'ROLES' | 'GAME';

export type Category =
    | 'general'
    | 'animales'
    | 'comida'
    | 'videojuegos'
    | 'peliculas'
    | 'marcas'
    | 'redes'
    | 'emociones'
    | 'superpoderes'
    | 'miedos'
    | 'hobbies'
    | 'lugares'
    | 'instrumentos'
    | 'colores';

export type GameState = {
    players: Player[];
    impostorCount: number;
    category: Category;
    currentPhase: GamePhase;
    currentPlayerIndex: number;
    secretWord: string;
    scores: {
        jugadores: number;
        impostores: number;
    };
};
