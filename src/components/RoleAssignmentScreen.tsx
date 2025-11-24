import { useState } from 'react';
import type { Player } from '../types';

type RoleAssignmentScreenProps = {
    player: Player;
    playerIndex: number;
    totalPlayers: number;
    secretWord: string;
    onNext: () => void;
};

export function RoleAssignmentScreen({
    player,
    playerIndex,
    totalPlayers,
    secretWord,
    onNext
}: RoleAssignmentScreenProps) {
    const [isRevealed, setIsRevealed] = useState(false);

    const handleReveal = () => {
        setIsRevealed(true);
    };

    const handleNext = () => {
        setIsRevealed(false); // Reset for next player (though component might remount)
        onNext();
    };

    return (
        <div className="animate-fade-in">
            <div className="glass rounded-3xl p-8 min-h-[600px] relative overflow-hidden">

                {/* Player Counter */}
                <div className="flex justify-between items-center mb-8 bg-purple-600/30 rounded-xl p-4">
                    <div className="text-2xl font-bold">
                        <span className="text-purple-300">{player.name}</span>
                    </div>
                    <div className="text-lg text-purple-200">
                        <span>{playerIndex + 1}</span> de <span className="font-bold">{totalPlayers}</span>
                    </div>
                </div>

                {/* Role Cover (Click to Reveal) */}
                <div
                    className={`absolute inset-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center z-20 transition-all duration-500 ${isRevealed ? 'opacity-0 scale-0 pointer-events-none' : 'opacity-100 scale-100'}`}
                >
                    <div className="text-center p-8">
                        <div className="text-8xl mb-6 animate-pulse-slow">👁️</div>
                        <h2 className="text-4xl font-black mb-4">¡No mires todavía!</h2>
                        <p className="text-xl mb-8 text-purple-100">Asegúrate de que nadie más vea tu pantalla</p>
                        <button
                            onClick={handleReveal}
                            className="bg-white text-purple-600 font-bold py-4 px-12 rounded-xl text-xl hover:bg-purple-100 transition-all transform hover:scale-110 hover:shadow-2xl"
                        >
                            👆 Toca para Revelar
                        </button>
                    </div>
                </div>

                {/* Role Content (Hidden Initially) */}
                <div className={`transition-opacity duration-500 ${isRevealed ? 'opacity-100' : 'opacity-0'}`}>

                    {/* Role Badge */}
                    <div className={`rounded-2xl p-6 mb-6 text-center ${player.isImpostor ? 'bg-gradient-to-r from-pink-500 to-red-500 glow-pink' : 'bg-gradient-to-r from-green-500 to-emerald-500 glow-green'}`}>
                        <div className="flex items-center justify-center gap-4">
                            <span className="text-5xl">{player.isImpostor ? '🎭' : '👤'}</span>
                            <span className="text-3xl font-black">{player.isImpostor ? 'IMPOSTOR' : 'JUGADOR'}</span>
                        </div>
                    </div>

                    {/* Word Display (For Normal Players) */}
                    {!player.isImpostor && (
                        <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-4 border-dashed border-blue-400 rounded-2xl p-8 mb-6 text-center">
                            <p className="text-lg text-blue-200 mb-3">Tu palabra secreta es:</p>
                            <h1 className="text-3xl font-black text-blue-300 tracking-wider animate-pulse-slow">{secretWord}</h1>
                            <p className="text-sm text-blue-300 mt-4">💡 Descríbela sin ser muy obvio</p>
                        </div>
                    )}

                    {/* Impostor Message */}
                    {player.isImpostor && (
                        <div className="bg-gradient-to-br from-pink-600/20 to-red-600/20 border-4 border-pink-500 rounded-2xl p-8 mb-6">
                            <div className="text-center mb-6">
                                <div className="text-7xl mb-4 animate-wiggle">🎭</div>
                                <h2 className="text-4xl font-black text-pink-300 mb-2">¡ERES EL IMPOSTOR!</h2>
                                <p className="text-xl text-pink-200">Debes adivinar la palabra sin que te descubran</p>
                            </div>

                            <div className="bg-black/30 rounded-xl p-6">
                                <h4 className="text-xl font-bold text-yellow-300 mb-3 flex items-center gap-2">
                                    <span>💡</span> Consejos para sobrevivir:
                                </h4>
                                <ul className="space-y-2 text-pink-100 text-left">
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-400">✓</span>
                                        <span>Escucha atentamente las descripciones</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-400">✓</span>
                                        <span>Haz preguntas generales y vagas</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-400">✓</span>
                                        <span>No seas el primero ni el último en hablar</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}

                    <button
                        onClick={handleNext}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl text-xl transition-all transform hover:scale-105 flex items-center justify-center gap-3 group"
                    >
                        <span>Siguiente Jugador</span>
                        <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
