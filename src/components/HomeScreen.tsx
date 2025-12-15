type HomeScreenProps = {
  impostorCount: number;
  setImpostorCount: (count: number) => void;
  onNext: () => void;
};

export function HomeScreen({ impostorCount, setImpostorCount, onNext }: HomeScreenProps) {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="text-center mb-12 animate-slide-down">
        <div className="inline-block mb-4">
          <div className="text-7xl mb-4 animate-wiggle">🎭</div>
        </div>
        <h1 className="text-6xl md:text-7xl font-black mb-4 gradient-text">
          EL IMPOSTOR
        </h1>
        <p className="text-xl text-purple-200 font-medium">
          ¿Descubrirás la palabra secreta o al impostor?
        </p>
      </div>

      {/* Main Config Card */}
      <div className="glass rounded-3xl p-8 mb-6 animate-scale-in hover:scale-[1.02] transition-transform duration-300">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <span className="text-3xl">⚙️</span>
          Configurar Partida
        </h2>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-purple-200 mb-2">
              🎭 Número de Impostores
            </label>
            <select
              value={impostorCount}
              onChange={(e) => setImpostorCount(parseInt(e.target.value) || 1)}
              className="w-full bg-white/10 border-2 border-pink-500/30 rounded-xl px-4 py-3 text-lg font-semibold focus:border-pink-500 focus:ring-4 focus:ring-pink-500/20 outline-none transition-all"
            >
              {Array.from({ length: 20 }, (_, i) => i + 1).map((count) => (
                <option className="text-black" key={count} value={count}>
                  {count}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button 
          onClick={onNext}
          className="w-full mt-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3 group"
        >
          <span>Añadir Jugadores</span>
          <span className="text-2xl group-hover:translate-x-2 transition-transform">👥</span>
        </button>
      </div>

      {/* How to Play */}
      <div className="glass rounded-3xl p-8 animate-fade-in border-2 border-purple-500/20">
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
          <span className="text-3xl">📖</span>
          Cómo Jugar
        </h3>
        <div className="space-y-3 text-purple-100">
          <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
            <span className="text-2xl">✨</span>
            <p><strong className="text-purple-300">Jugadores normales:</strong> Todos reciben la misma palabra secreta</p>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
            <span className="text-2xl">🎭</span>
            <p><strong className="text-pink-300">El Impostor:</strong> No conoce la palabra y debe adivinarla</p>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
            <span className="text-2xl">🎯</span>
            <p><strong className="text-blue-300">Objetivo:</strong> Los jugadores descubren al impostor, el impostor adivina la palabra</p>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
            <span className="text-2xl">💡</span>
            <p><strong className="text-green-300">Estrategia:</strong> Describe la palabra sin ser obvio, observa quién actúa sospechoso</p>
          </div>
        </div>
      </div>
    </div>
  );
}
