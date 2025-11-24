type ResultModalProps = {
    isOpen: boolean;
    icon: string;
    title: string;
    message: string;
    secretWord: string;
    onClose: () => void;
};

export function ResultModal({ isOpen, icon, title, message, secretWord, onClose }: ResultModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
            <div className="glass rounded-3xl p-8 max-w-md w-full animate-scale-in border-2 border-white/20">
                <div className="text-center mb-6">
                    <div className="text-8xl mb-4 animate-bounce">{icon}</div>
                    <h2 className="text-4xl font-black mb-3">{title}</h2>
                    <p className="text-xl text-purple-200">{message}</p>
                </div>

                <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-2xl p-6 mb-6 border-2 border-purple-400/50">
                    <p className="text-purple-200 mb-2">La palabra secreta era:</p>
                    <h3 className="text-5xl font-black text-purple-300">{secretWord}</h3>
                </div>

                <button
                    onClick={onClose}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl text-xl transition-all transform hover:scale-105"
                >
                    Nueva Partida 🎮
                </button>
            </div>
        </div>
    );
}
