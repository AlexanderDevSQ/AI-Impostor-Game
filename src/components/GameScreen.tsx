import type { Player, Category } from '../types';
import { categoryNames } from '../utils/words';

type GameScreenProps = {
    players: Player[];
    impostorCount: number;
    category: Category;
    scores: { jugadores: number; impostores: number };
    onVote: (index: number) => void;
    onImpostorGuess: () => void;
    onRevealWord: () => void;
    onNewGame: () => void;
};

export function GameScreen({
    players,
    impostorCount,
    category,
    scores,
    onVote,
    onImpostorGuess,
    onRevealWord,
    onNewGame
}: GameScreenProps) {
    return (
        <div className="animate-fade-in">

            {/* Game Header */}
            <div className="text-center mb-8 animate-slide-down">
                <h2 className="text-4xl font-black mb-4 flex items-center justify-center gap-3">
                    <span className="text-5xl">🏆</span>
                    Scoreboard
                </h2>
                <div className="flex justify-center gap-4 flex-wrap mb-6">
                    <div className="glass rounded-xl px-6 py-3">
                        <span className="text-purple-300">👥 Jugadores:</span>
                        <span className="font-bold text-2xl ml-2">{players.length}</span>
                    </div>
                    <div className="glass rounded-xl px-6 py-3">
                        <span className="text-pink-300">🎭 Impostores:</span>
                        <span className="font-bold text-2xl ml-2">{impostorCount}</span>
                    </div>
                    <div className="glass rounded-xl px-6 py-3">
                        <span className="text-blue-300">📚 Categoría:</span>
                        <span className="font-bold text-lg ml-2">{categoryNames[category]}</span>
                    </div>
                </div>
            </div>

            {/* Scoreboard */}
            <div className="glass rounded-3xl p-8 mb-6">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <span className="text-3xl">📊</span>
                    Puntuaciones
                </h3>
                <div className="space-y-3">
                    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl border-2 border-blue-400/50">
                        <div className="flex items-center gap-3">
                            <span className="text-3xl">👥</span>
                            <span className="text-xl font-bold">Jugadores</span>
                        </div>
                        <div className="text-4xl font-black text-blue-300">{scores.jugadores}</div>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-pink-600/20 to-red-600/20 rounded-xl border-2 border-pink-400/50">
                        <div className="flex items-center gap-3">
                            <span className="text-3xl">🎭</span>
                            <span className="text-xl font-bold">Impostores</span>
                        </div>
                        <div className="text-4xl font-black text-pink-300">{scores.impostores}</div>
                    </div>
                </div>
            </div>

            {/* Voting Section */}
            <div className="glass rounded-3xl p-8 mb-6">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <span className="text-3xl">🗳️</span>
                    Votación
                </h3>
                <p className="text-purple-200 mb-6">¿Quién crees que es el impostor?</p>
                <div className="grid gap-3">
                    {players.map((player, index) => (
                        <button
                            key={index}
                            onClick={() => onVote(index)}
                            className="bg-gradient-to-r from-red-600/20 to-orange-600/20 hover:from-red-600 hover:to-orange-600 border-2 border-red-500/50 hover:border-red-400 p-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-between group"
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">👤</span>
                                <span>{player.name}</span>
                            </div>
                            <span className="text-xl group-hover:scale-125 transition-transform">🗳️</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Other Actions */}
            <div className="glass rounded-3xl p-8 mb-6">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <span className="text-3xl">🎯</span>
                    Otras Acciones
                </h3>
                <div className="grid gap-4">
                    <button
                        onClick={onImpostorGuess}
                        className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-500 hover:to-orange-500 p-6 rounded-xl font-bold text-xl transition-all transform hover:scale-105 flex items-center justify-between group"
                    >
                        <div className="flex items-center gap-3">
                            <span className="text-3xl">💭</span>
                            <span>Impostor Adivina la Palabra</span>
                        </div>
                        <span className="text-2xl group-hover:scale-125 transition-transform">→</span>
                    </button>

                    <button
                        onClick={onRevealWord}
                        className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 p-6 rounded-xl font-bold text-xl transition-all transform hover:scale-105 flex items-center justify-between group"
                    >
                        <div className="flex items-center gap-3">
                            <span className="text-3xl">🔍</span>
                            <span>Revelar Palabra Secreta</span>
                        </div>
                        <span className="text-2xl group-hover:scale-125 transition-transform">→</span>
                    </button>
                </div>
            </div>

            {/* New Game */}
            <button
                onClick={onNewGame}
                className="w-full glass hover:bg-white/10 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all flex items-center justify-center gap-3 group border-2 border-white/20"
            >
                <span>🔄</span>
                <span>Nueva Partida</span>
            </button>
        </div>
    );
}
