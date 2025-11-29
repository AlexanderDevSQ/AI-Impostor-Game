import { useState } from 'react';
import { Layout } from './components/Layout';
import { HomeScreen } from './components/HomeScreen';
import { PlayerNamesScreen } from './components/PlayerNamesScreen';
import { RoleAssignmentScreen } from './components/RoleAssignmentScreen';
import { GameScreen } from './components/GameScreen';
import { ResultModal } from './components/ResultModal';
import { useGameLogic } from './hooks/useGameLogic';

function App() {
  const {
    gameState,
    playerNames,
    setImpostorCount,
    addPlayer,
    removePlayer,
    updatePlayerName,
    startGame,
    nextPlayer,
    votePlayer,
    impostorGuess,
    resetGame,
    goToPhase
  } = useGameLogic();

  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    icon: string;
    title: string;
    message: string;
  }>({
    isOpen: false,
    icon: '',
    title: '',
    message: ''
  });

  const handleVote = (index: number) => {
    const result = votePlayer(index);
    if (result) {
      setModalState({
        isOpen: true,
        icon: result.winner === 'jugadores' ? '🎉' : '😈',
        title: result.winner === 'jugadores' ? '¡Los Jugadores Ganaron!' : '¡El Impostor Ganó!',
        message: result.message
      });
    }
  };

  const handleImpostorGuess = () => {
    const guess = prompt('💭 Impostor: ¿Cuál crees que es la palabra secreta?');
    if (!guess) return;

    const result = impostorGuess(guess);
    setModalState({
      isOpen: true,
      icon: result.winner === 'impostores' ? '🎭' : '🎉',
      title: result.winner === 'impostores' ? '¡El Impostor Ganó!' : '¡Los Jugadores Ganaron!',
      message: result.message
    });
  };

  const handleRevealWord = () => {
    if (confirm('🔍 ¿Estás seguro de que quieres revelar la palabra? Esto terminará el juego.')) {
      setModalState({
        isOpen: true,
        icon: '📖',
        title: 'Palabra Revelada',
        message: 'La palabra secreta ha sido revelada.'
      });
    }
  };

  const handleCloseModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
    resetGame();
  };

  return (
    <Layout>
      {gameState.currentPhase === 'HOME' && (
        <HomeScreen
          impostorCount={gameState.impostorCount}
          setImpostorCount={setImpostorCount}
          onNext={() => goToPhase('NAMES')}
        />
      )}

      {gameState.currentPhase === 'NAMES' && (
        <PlayerNamesScreen
          playerNames={playerNames}
          addPlayer={addPlayer}
          removePlayer={removePlayer}
          updatePlayerName={updatePlayerName}
          onStartGame={startGame}
          onBack={() => goToPhase('HOME')}
        />
      )}

      {gameState.currentPhase === 'ROLES' && (
        <RoleAssignmentScreen
          player={gameState.players[gameState.currentPlayerIndex]}
          playerIndex={gameState.currentPlayerIndex}
          totalPlayers={gameState.players.length}
          secretWord={gameState.secretWord}
          onNext={nextPlayer}
        />
      )}

      {gameState.currentPhase === 'GAME' && (
        <GameScreen
          players={gameState.players}
          impostorCount={gameState.impostorCount}
          scores={gameState.scores}
          onVote={handleVote}
          onImpostorGuess={handleImpostorGuess}
          onRevealWord={handleRevealWord}
          onNewGame={() => {
            if (confirm('🔄 ¿Quieres iniciar una nueva partida?')) {
              resetGame();
            }
          }}
        />
      )}

      <ResultModal
        isOpen={modalState.isOpen}
        icon={modalState.icon}
        title={modalState.title}
        message={modalState.message}
        secretWord={gameState.secretWord}
        onClose={handleCloseModal}
      />
    </Layout>
  );
}

export default App;
