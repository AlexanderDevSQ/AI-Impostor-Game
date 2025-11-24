import { useEffect, useRef } from 'react';

type PlayerNamesScreenProps = {
    playerNames: string[];
    addPlayer: () => void;
    removePlayer: (index: number) => void;
    updatePlayerName: (index: number, name: string) => void;
    onStartGame: () => void;
    onBack: () => void;
};

export function PlayerNamesScreen({
    playerNames,
    addPlayer,
    removePlayer,
    updatePlayerName,
    onStartGame,
    onBack
}: PlayerNamesScreenProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    // Scroll to bottom when adding player
    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [playerNames.length]);

    return (
        <div className="animate-fade-in ">
            <div className="glass rounded-3xl p-8 mb-6">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <span className="text-4xl">👥</span>
                    Nombres de Jugadores
                </h2>
                <p className="text-purple-200 mb-6">Introduce el nombre de cada jugador:</p>

                <div
                    ref={containerRef}
                    className="space-y-4 mb-6 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar"
                >
                    {playerNames.map((name, index) => (
                        <div key={index} className="md:flex block items-center gap-3 animate-slide-up">
                            <span className="text-2xl font-bold text-purple-300 w-8">{index + 1}.</span>
                            <input
                                type="text"
                                placeholder={`Nombre del jugador ${index + 1}`}
                                value={name}
                                onChange={(e) => updatePlayerName(index, e.target.value)}
                                className="flex-1 bg-white/10 border-2 border-purple-500/30 rounded-xl px-4 py-3 text-lg font-semibold focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 outline-none transition-all"
                            />
                            <button
                                onClick={() => removePlayer(index)}
                                className="bg-red-600/20 hover:bg-red-600 border-2 border-red-500/50 hover:border-red-400 p-3 rounded-xl transition-all group"
                                title="Eliminar jugador"
                            >
                                <span className="text-xl group-hover:scale-110 block">🗑️</span>
                            </button>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                    <button
                        onClick={addPlayer}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold py-3 px-6 rounded-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                        <span>➕</span>
                        <span>Añadir Jugador</span>
                    </button>
                    <button
                        onClick={onStartGame}
                        className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-3 px-6 rounded-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                        <span>Iniciar Juego</span>
                        <span>🚀</span>
                    </button>
                </div>
            </div>

            <button
                onClick={onBack}
                className="w-full glass hover:bg-white/10 text-white font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-3 border-2 border-white/20"
            >
                <span>←</span>
                <span>Volver</span>
            </button>
        </div>
    );
}
