import { useState, useEffect } from 'react';
import type { GameState, Player, GamePhase } from '../types';
import { getRandomWord, getRandomImpostorIndices, getAllCategories } from '../utils/words';

const INITIAL_STATE: GameState = {
  players: [],
  impostorCount: 1,
  selectedCategories: getAllCategories(),
  currentPhase: 'HOME',
  currentPlayerIndex: 0,
  secretWord: '',
  scores: {
    jugadores: 0,
    impostores: 0,
  },
};

export function useGameLogic() {
  const [gameState, setGameState] = useState<GameState>(INITIAL_STATE);
  const [playerNames, setPlayerNames] = useState<string[]>([]);

  // Load saved players on mount
  useEffect(() => {
    const saved = localStorage.getItem('impostorSavedPlayers');
    if (saved) {
      setPlayerNames(JSON.parse(saved));
    } else {
      setPlayerNames(['Jugador 1', 'Jugador 2', 'Jugador 3']);
    }
  }, []);

  const setImpostorCount = (count: number) => {
    setGameState(prev => ({ ...prev, impostorCount: Math.max(1, Math.min(20, count)) }));
  };

  const setSelectedCategories = (categories: string[]) => {
    setGameState(prev => ({ ...prev, selectedCategories: categories }));
  };

  const addPlayer = () => {
    setPlayerNames(prev => [...prev, `Jugador ${prev.length + 1}`]);
  };

  const removePlayer = (index: number) => {
    if (playerNames.length > 3) {
      setPlayerNames(prev => prev.filter((_, i) => i !== index));
    }
  };

  const updatePlayerName = (index: number, name: string) => {
    setPlayerNames(prev => {
      const newNames = [...prev];
      newNames[index] = name;
      return newNames;
    });
  };

  const startGame = () => {
    if (gameState.impostorCount >= playerNames.length) {
      alert('⚠️ El número de impostores debe ser menor que el de jugadores');
      return;
    }

    // Save names
    localStorage.setItem('impostorSavedPlayers', JSON.stringify(playerNames));

    // Assign roles
    const newPlayers: Player[] = playerNames.map(name => ({ name, isImpostor: false }));
    const impostorIndices = getRandomImpostorIndices(newPlayers.length, gameState.impostorCount);
    impostorIndices.forEach(idx => {
      newPlayers[idx].isImpostor = true;
    });

    const secretWord = getRandomWord(gameState.selectedCategories);

    setGameState(prev => ({
      ...prev,
      players: newPlayers,
      secretWord,
      currentPlayerIndex: 0,
      currentPhase: 'ROLES',
    }));
  };

  const nextPlayer = () => {
    setGameState(prev => {
      const nextIndex = prev.currentPlayerIndex + 1;
      if (nextIndex >= prev.players.length) {
        return { ...prev, currentPhase: 'GAME' };
      }
      return { ...prev, currentPlayerIndex: nextIndex };
    });
  };

  const votePlayer = (playerIndex: number) => {
    const player = gameState.players[playerIndex];
    if (window.confirm(`🗳️ ¿Estás seguro de que quieres votar a ${player.name}?`)) {
      if (player.isImpostor) {
        updateScore('jugadores');
        return { winner: 'jugadores', message: `${player.name} era el impostor. ¡Bien hecho!` };
      } else {
        updateScore('impostores');
        return { winner: 'impostores', message: `${player.name} NO era el impostor. El impostor se salió con la suya.` };
      }
    }
    return null;
  };

  const impostorGuess = (guess: string) => {
    if (guess.toUpperCase().trim() === gameState.secretWord) {
      updateScore('impostores');
      return { winner: 'impostores', message: `¡Correcto! El impostor adivinó la palabra.` };
    } else {
      updateScore('jugadores');
      return { winner: 'jugadores', message: `¡Incorrecto! El impostor falló. La palabra era "${gameState.secretWord}".` };
    }
  };

  const updateScore = (winner: 'jugadores' | 'impostores') => {
    setGameState(prev => ({
      ...prev,
      scores: {
        ...prev.scores,
        [winner]: prev.scores[winner] + 1,
      },
    }));
  };

  const resetGame = (fullReset = false) => {
    if (fullReset) {
      setGameState(prev => ({ ...INITIAL_STATE, scores: prev.scores }));
    } else {
      setGameState(prev => ({ ...prev, currentPhase: 'HOME' }));
    }
  };

  const goToPhase = (phase: GamePhase) => {
    setGameState(prev => ({ ...prev, currentPhase: phase }));
  };

  return {
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
    goToPhase,
    setSelectedCategories
  };
}
