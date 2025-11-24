// ==================== GAME STATE ====================
const gameState = {
    players: [], // Array of {name: string, isImpostor: boolean}
    impostorCount: 1,
    category: 'general',
    currentPlayerIndex: 0,
    secretWord: '',
    scores: {
        jugadores: 0,
        impostores: 0
    }
};

// ==================== WORD CATEGORIES ====================
const wordCategories = {
    general: [
        'PIZZA', 'GUITARRA', 'PLAYA', 'MONTAÑA', 'CAFÉ', 'LIBRO', 'PELÍCULA',
        'TELÉFONO', 'COMPUTADORA', 'BICICLETA', 'AVIÓN', 'TREN', 'COCHE',
        'CASA', 'ESCUELA', 'HOSPITAL', 'RESTAURANTE', 'PARQUE', 'MUSEO',
        'RELOJ', 'ESPEJO', 'VENTANA', 'PUERTA', 'SILLA', 'MESA', 'CAMA',
        'TELEVISIÓN', 'RADIO', 'CÁMARA', 'PARAGUAS', 'GAFAS', 'ZAPATOS'
    ],
    animales: [
        'PERRO', 'GATO', 'LEÓN', 'TIGRE', 'ELEFANTE', 'JIRAFA', 'MONO',
        'DELFÍN', 'BALLENA', 'TIBURÓN', 'ÁGUILA', 'BÚHO', 'PINGÜINO',
        'CANGURO', 'OSO', 'LOBO', 'ZORRO', 'CONEJO', 'ARDILLA', 'CABALLO',
        'VACA', 'CERDO', 'OVEJA', 'GALLINA', 'PATO', 'PAVO', 'SERPIENTE',
        'COCODRILO', 'TORTUGA', 'RANA', 'MARIPOSA', 'ABEJA'
    ],
    comida: [
        'PIZZA', 'HAMBURGUESA', 'PASTA', 'SUSHI', 'TACOS', 'PAELLA',
        'ENSALADA', 'SOPA', 'PAN', 'QUESO', 'CHOCOLATE', 'HELADO',
        'PASTEL', 'GALLETAS', 'MANZANA', 'PLÁTANO', 'NARANJA', 'FRESA',
        'SANDÍA', 'UVA', 'PIÑA', 'MANGO', 'ARROZ', 'POLLO', 'PESCADO',
        'CARNE', 'HUEVO', 'LECHE', 'CAFÉ', 'TÉ', 'JUGO', 'AGUA'
    ],
    videojuegos: [
        'MINECRAFT', 'FORTNITE', 'ROBLOX', 'AMONG US', 'VALORANT', 'LEAGUE OF LEGENDS',
        'CALL OF DUTY', 'FIFA', 'POKEMON', 'MARIO', 'ZELDA', 'SONIC',
        'TETRIS', 'PAC-MAN', 'STREET FIGHTER', 'MORTAL KOMBAT', 'GTA',
        'OVERWATCH', 'APEX LEGENDS', 'ROCKET LEAGUE', 'FALL GUYS', 'CLASH ROYALE',
        'BRAWL STARS', 'CANDY CRUSH', 'SUBWAY SURFERS', 'TEMPLE RUN', 'ANGRY BIRDS'
    ],
    peliculas: [
        'TITANIC', 'AVATAR', 'STAR WARS', 'HARRY POTTER', 'AVENGERS', 'SPIDER-MAN',
        'BATMAN', 'SUPERMAN', 'IRON MAN', 'FROZEN', 'TOY STORY', 'SHREK',
        'FINDING NEMO', 'LION KING', 'ALADDIN', 'BEAUTY AND THE BEAST', 'MULAN',
        'JURASSIC PARK', 'MATRIX', 'TERMINATOR', 'BACK TO THE FUTURE', 'INCEPTION',
        'INTERSTELLAR', 'GLADIATOR', 'FORREST GUMP', 'PULP FICTION', 'GODFATHER'
    ],
    marcas: [
        'NIKE', 'ADIDAS', 'APPLE', 'SAMSUNG', 'COCA-COLA', 'PEPSI',
        'MCDONALD\'S', 'BURGER KING', 'STARBUCKS', 'AMAZON', 'GOOGLE', 'FACEBOOK',
        'INSTAGRAM', 'TWITTER', 'YOUTUBE', 'NETFLIX', 'SPOTIFY', 'DISNEY',
        'SONY', 'MICROSOFT', 'PLAYSTATION', 'XBOX', 'NINTENDO', 'LEGO',
        'FERRARI', 'LAMBORGHINI', 'PORSCHE', 'BMW', 'MERCEDES', 'TESLA'
    ],
    redes: [
        'FACEBOOK', 'INSTAGRAM', 'TWITTER', 'TIKTOK', 'YOUTUBE', 'WHATSAPP',
        'TELEGRAM', 'SNAPCHAT', 'LINKEDIN', 'PINTEREST', 'REDDIT', 'DISCORD',
        'TWITCH', 'SPOTIFY', 'NETFLIX', 'AMAZON', 'EBAY', 'PAYPAL',
        'UBER', 'AIRBNB', 'ZOOM', 'SKYPE', 'GMAIL', 'OUTLOOK',
        'DROPBOX', 'GOOGLE DRIVE', 'ONEDRIVE', 'SLACK', 'TEAMS', 'CLUBHOUSE'
    ],
    emociones: [
        'FELICIDAD', 'TRISTEZA', 'ENOJO', 'MIEDO', 'SORPRESA', 'DISGUSTO',
        'AMOR', 'ODIO', 'ALEGRÍA', 'MELANCOLÍA', 'NOSTALGIA', 'ANSIEDAD',
        'CALMA', 'ESTRÉS', 'ABURRIMIENTO', 'EMOCIÓN', 'VERGÜENZA', 'ORGULLO',
        'CULPA', 'CELOS', 'ENVIDIA', 'GRATITUD', 'ESPERANZA', 'DESESPERACIÓN',
        'CONFIANZA', 'DESCONFIANZA', 'CURIOSIDAD', 'CONFUSIÓN', 'FRUSTRACIÓN', 'SATISFACCIÓN'
    ],
    superpoderes: [
        'VOLAR', 'INVISIBILIDAD', 'SUPER FUERZA', 'TELEPATÍA', 'TELETRANSPORTE',
        'SUPER VELOCIDAD', 'REGENERACIÓN', 'CONTROL MENTAL', 'RAYOS LÁSER', 'CONGELAR',
        'FUEGO', 'ELECTRICIDAD', 'CONTROL DEL TIEMPO', 'CAMBIAR DE FORMA', 'DUPLICACIÓN',
        'ELASTICIDAD', 'VISIÓN DE RAYOS X', 'SUPER OÍDO', 'RESPIRAR BAJO EL AGUA', 'HABLAR CON ANIMALES',
        'CONTROL DEL CLIMA', 'MAGNETISMO', 'INTANGIBILIDAD', 'SUPER INTELIGENCIA', 'CURACIÓN'
    ],
    miedos: [
        'ARAÑAS', 'ALTURAS', 'OSCURIDAD', 'PAYASOS', 'SERPIENTES', 'ESPACIOS CERRADOS',
        'MULTITUDES', 'VOLAR', 'AGUA', 'SANGRE', 'AGUJAS', 'DENTISTA',
        'FANTASMAS', 'TRUENOS', 'SOLEDAD', 'HABLAR EN PÚBLICO', 'FRACASO', 'RECHAZO',
        'MUERTE', 'ENFERMEDAD', 'PERDER EL CONTROL', 'INSECTOS', 'RATAS', 'MURCIÉLAGOS',
        'TIBURONES', 'ZOMBIES', 'ALIENS', 'TERRORISMO', 'GUERRA', 'APOCALIPSIS'
    ],
    hobbies: [
        'LEER', 'ESCRIBIR', 'PINTAR', 'DIBUJAR', 'COCINAR', 'HORNEAR',
        'JARDINERÍA', 'FOTOGRAFÍA', 'VIDEOJUEGOS', 'DEPORTES', 'YOGA', 'MEDITACIÓN',
        'BAILAR', 'CANTAR', 'TOCAR MÚSICA', 'COLECCIONAR', 'VIAJAR', 'ACAMPAR',
        'PESCAR', 'CAZAR', 'SENDERISMO', 'CICLISMO', 'NATACIÓN', 'CORRER',
        'GIMNASIO', 'ARTES MARCIALES', 'AJEDREZ', 'PUZZLES', 'MANUALIDADES', 'COSTURA'
    ],
    lugares: [
        'PARÍS', 'LONDRES', 'NUEVA YORK', 'TOKIO', 'ROMA', 'BARCELONA',
        'DUBAI', 'SIDNEY', 'RÍO DE JANEIRO', 'CANCÚN', 'BALI', 'MALDIVAS',
        'HAWAII', 'VENECIA', 'ÁMSTERDAM', 'PRAGA', 'ESTAMBUL', 'BANGKOK',
        'MACHU PICCHU', 'GRAN MURALLA', 'TAJ MAHAL', 'COLISEO', 'TORRE EIFFEL', 'ESTATUA LIBERTAD',
        'PIRÁMIDES EGIPTO', 'STONEHENGE', 'PETRA', 'ANGKOR WAT', 'CHICHEN ITZA', 'CRISTO REDENTOR'
    ],
    instrumentos: [
        'GUITARRA', 'PIANO', 'BATERÍA', 'VIOLÍN', 'FLAUTA', 'TROMPETA',
        'SAXOFÓN', 'CLARINETE', 'OBOE', 'FAGOT', 'TUBA', 'TROMBÓN',
        'ARPA', 'VIOLONCHELO', 'CONTRABAJO', 'UKELELE', 'BANJO', 'MANDOLINA',
        'ACORDEÓN', 'ARMÓNICA', 'XILÓFONO', 'MARIMBA', 'TIMBAL', 'BONGOS',
        'CONGAS', 'PANDERETA', 'CASTAÑUELAS', 'TRIÁNGULO', 'CAMPANAS', 'GONG'
    ],
    colores: [
        'ROJO', 'AZUL', 'AMARILLO', 'VERDE', 'NARANJA', 'MORADO',
        'ROSA', 'NEGRO', 'BLANCO', 'GRIS', 'MARRÓN', 'BEIGE',
        'TURQUESA', 'CYAN', 'MAGENTA', 'DORADO', 'PLATEADO', 'BRONCE',
        'CORAL', 'LAVANDA', 'ÍNDIGO', 'VIOLETA', 'CARMESÍ', 'ESCARLATA',
        'VERDE LIMA', 'VERDE OLIVA', 'VERDE MENTA', 'AZUL MARINO', 'AZUL CIELO', 'FUCSIA'
    ]
};

// ==================== UTILITY FUNCTIONS ====================
function getRandomWord(category) {
    const words = wordCategories[category] || wordCategories.general;
    return words[Math.floor(Math.random() * words.length)];
}

function getRandomImpostorIndices(playerCount, impostorCount) {
    const indices = [];
    while (indices.length < impostorCount) {
        const randomIndex = Math.floor(Math.random() * playerCount);
        if (!indices.includes(randomIndex)) {
            indices.push(randomIndex);
        }
    }
    return indices;
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.add('hidden');
        screen.classList.remove('animate-fade-in');
    });
    const targetScreen = document.getElementById(screenId);
    targetScreen.classList.remove('hidden');
    targetScreen.classList.add('animate-fade-in');
}

function getCategoryName(category) {
    const names = {
        general: '🌍 General',
        animales: '🦁 Animales',
        comida: '🍕 Comida',
        videojuegos: '🎮 Videojuegos',
        peliculas: '🎬 Películas',
        marcas: '🏷️ Marcas',
        redes: '📱 Redes Sociales',
        emociones: '😊 Emociones',
        superpoderes: '⚡ Superpoderes',
        miedos: '👻 Miedos',
        hobbies: '🎨 Hobbies',
        lugares: '🏝️ Lugares',
        instrumentos: '🎸 Instrumentos',
        colores: '🌈 Colores'
    };
    return names[category] || '🌍 General';
}

function updateScoreboard() {
    const scoreboard = document.getElementById('scoreboard');
    scoreboard.innerHTML = `
        <div class="flex justify-between items-center p-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl border-2 border-blue-400/50">
            <div class="flex items-center gap-3">
                <span class="text-3xl">👥</span>
                <span class="text-xl font-bold">Jugadores</span>
            </div>
            <div class="text-4xl font-black text-blue-300">${gameState.scores.jugadores}</div>
        </div>
        <div class="flex justify-between items-center p-4 bg-gradient-to-r from-pink-600/20 to-red-600/20 rounded-xl border-2 border-pink-400/50">
            <div class="flex items-center gap-3">
                <span class="text-3xl">🎭</span>
                <span class="text-xl font-bold">Impostores</span>
            </div>
            <div class="text-4xl font-black text-pink-300">${gameState.scores.impostores}</div>
        </div>
    `;
}

function createVotingButtons() {
    const container = document.getElementById('voting-buttons');
    container.innerHTML = '';

    gameState.players.forEach((player, index) => {
        const button = document.createElement('button');
        button.className = 'bg-gradient-to-r from-red-600/20 to-orange-600/20 hover:from-red-600 hover:to-orange-600 border-2 border-red-500/50 hover:border-red-400 p-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-between group';
        button.innerHTML = `
            <div class="flex items-center gap-3">
                <span class="text-2xl">${player.isImpostor ? '🎭' : '👤'}</span>
                <span>${player.name}</span>
            </div>
            <span class="text-xl group-hover:scale-125 transition-transform">🗳️</span>
        `;
        button.addEventListener('click', () => votePlayer(index));
        container.appendChild(button);
    });
}
// ==================== PLAYER NAMES MANAGEMENT ====================
function showNamesScreen() {
    gameState.impostorCount = parseInt(document.getElementById('impostor-count').value);
    gameState.category = document.getElementById('category-select').value;

    const container = document.getElementById('player-names-container');
    container.innerHTML = '';

    // Load saved players from localStorage
    const savedPlayers = JSON.parse(localStorage.getItem('impostorSavedPlayers') || '[]');

    if (savedPlayers.length > 0) {
        savedPlayers.forEach((name, index) => {
            addPlayerNameInput(index + 1, name);
        });
    } else {
        // Initialize with 3 players by default if no saved data
        for (let i = 0; i < 3; i++) {
            addPlayerNameInput(i + 1);
        }

        showScreen('names-screen');
    }
}

function addPlayerNameInput(playerNumber, customName = null) {
    const container = document.getElementById('player-names-container');
    const playerCount = container.children.length + 1;
    const nameValue = customName || `Jugador ${playerCount}`;

    const div = document.createElement('div');
    div.className = 'flex items-center gap-3';
    div.innerHTML = `
        <span class="text-2xl font-bold text-purple-300 w-8">${playerCount}.</span>
        <input 
            type="text" 
            placeholder="Nombre del jugador ${playerCount}"
            class="flex-1 bg-white/10 border-2 border-purple-500/30 rounded-xl px-4 py-3 text-lg font-semibold focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 outline-none transition-all player-name-input"
            value="${nameValue}"
        >
        <button class="bg-red-600/20 hover:bg-red-600 border-2 border-red-500/50 hover:border-red-400 p-3 rounded-xl transition-all remove-player-btn">
            <span class="text-xl">🗑️</span>
        </button>
    `;

    const removeBtn = div.querySelector('.remove-player-btn');
    removeBtn.addEventListener('click', () => {
        if (container.children.length > 3) {
            div.remove();
            updatePlayerNumbers();
        } else {
            alert('⚠️ Necesitas al menos 3 jugadores');
        }
    });

    container.appendChild(div);
}

function updatePlayerNumbers() {
    const container = document.getElementById('player-names-container');
    Array.from(container.children).forEach((div, index) => {
        const numberSpan = div.querySelector('span');
        const input = div.querySelector('input');
        numberSpan.textContent = `${index + 1}.`;
        input.placeholder = `Nombre del jugador ${index + 1}`;
    });
}

// ==================== GAME LOGIC ====================
function startGame() {
    // Get player names
    const inputs = document.querySelectorAll('.player-name-input');
    const playerNames = Array.from(inputs).map(input => input.value.trim()).filter(name => name !== '');

    if (playerNames.length < 3) {
        alert('⚠️ Necesitas al menos 3 jugadores');
        return;
    }

    if (gameState.impostorCount >= playerNames.length) {
        alert('⚠️ El número de impostores debe ser menor que el de jugadores');
        return;
    }

    // Save players to localStorage
    localStorage.setItem('impostorSavedPlayers', JSON.stringify(playerNames));

    // Create players array
    gameState.players = playerNames.map(name => ({ name, isImpostor: false }));

    // Assign impostors
    const impostorIndices = getRandomImpostorIndices(gameState.players.length, gameState.impostorCount);
    impostorIndices.forEach(index => {
        gameState.players[index].isImpostor = true;
    });

    // Get secret word
    gameState.secretWord = getRandomWord(gameState.category);
    gameState.currentPlayerIndex = 0;

    console.log('🎮 Juego iniciado:', {
        jugadores: gameState.players,
        palabra: gameState.secretWord
    });

    // Update UI
    document.getElementById('total-players').textContent = gameState.players.length;

    // Show role screen
    showScreen('role-screen');
    showRoleForCurrentPlayer();
}

function showRoleForCurrentPlayer() {
    const player = gameState.players[gameState.currentPlayerIndex];
    const playerNum = gameState.currentPlayerIndex + 1;

    document.getElementById('current-player-num').textContent = playerNum;
    document.getElementById('current-player-name').textContent = player.name;

    // Reset cover
    const cover = document.getElementById('role-cover');
    const content = document.getElementById('role-content');
    cover.classList.remove('opacity-0', 'scale-0');
    content.classList.add('opacity-0');

    // Prepare content (hidden)
    const roleBadge = document.getElementById('role-badge');
    const roleIcon = document.getElementById('role-icon');
    const roleName = document.getElementById('role-name');
    const wordDisplay = document.getElementById('word-display');
    const impostorMessage = document.getElementById('impostor-message');
    const secretWord = document.getElementById('secret-word');

    if (player.isImpostor) {
        roleBadge.className = 'bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl p-6 mb-6 text-center glow-pink';
        roleIcon.textContent = '🎭';
        roleName.textContent = 'IMPOSTOR';
        wordDisplay.classList.add('hidden');
        impostorMessage.classList.remove('hidden');
    } else {
        roleBadge.className = 'bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-6 mb-6 text-center glow-green';
        roleIcon.textContent = '👤';
        roleName.textContent = 'JUGADOR';
        wordDisplay.classList.remove('hidden');
        impostorMessage.classList.add('hidden');
        secretWord.textContent = gameState.secretWord;
    }
}

function revealRole() {
    const cover = document.getElementById('role-cover');
    const content = document.getElementById('role-content');

    // Hide cover with animation
    cover.classList.add('opacity-0', 'scale-0');

    // Show content after delay
    setTimeout(() => {
        content.classList.remove('opacity-0');
    }, 300);
}

function nextPlayer() {
    gameState.currentPlayerIndex++;

    if (gameState.currentPlayerIndex >= gameState.players.length) {
        // All players have seen their roles, start game
        startGamePhase();
    } else {
        // Show next player's role
        showRoleForCurrentPlayer();
    }
}

function startGamePhase() {
    // Update game screen info
    document.getElementById('game-players').textContent = gameState.players.length;
    document.getElementById('game-impostors').textContent = gameState.impostorCount;
    document.getElementById('game-category').textContent = getCategoryName(gameState.category);

    // Update scoreboard
    updateScoreboard();

    // Create voting buttons
    createVotingButtons();

    // Show game screen
    showScreen('game-screen');
}

// ==================== GAME ACTIONS ====================
function votePlayer(playerIndex) {
    const player = gameState.players[playerIndex];

    if (confirm(`🗳️ ¿Estás seguro de que quieres votar a ${player.name}?`)) {
        if (player.isImpostor) {
            gameState.scores.jugadores++;
            updateScoreboard();
            showResult(
                '🎉',
                '¡Los Jugadores Ganaron!',
                `${player.name} era el impostor. ¡Bien hecho!`
            );
        } else {
            gameState.scores.impostores++;
            updateScoreboard();
            showResult(
                '😈',
                '¡El Impostor Ganó!',
                `${player.name} NO era el impostor. El impostor se salió con la suya.`
            );
        }
    }
}

function impostorGuess() {
    const guess = prompt('💭 Impostor: ¿Cuál crees que es la palabra secreta?');

    if (!guess) return;

    if (guess.toUpperCase().trim() === gameState.secretWord) {
        gameState.scores.impostores++;
        updateScoreboard();
        showResult(
            '🎭',
            '¡El Impostor Ganó!',
            `¡Correcto! El impostor adivinó la palabra.`
        );
    } else {
        gameState.scores.jugadores++;
        updateScoreboard();
        showResult(
            '🎉',
            '¡Los Jugadores Ganaron!',
            `¡Incorrecto! El impostor falló. La palabra era "${gameState.secretWord}".`
        );
    }
}

function revealWord() {
    if (confirm('🔍 ¿Estás seguro de que quieres revelar la palabra? Esto terminará el juego.')) {
        showResult(
            '📖',
            'Palabra Revelada',
            'La palabra secreta ha sido revelada.'
        );
    }
}

function showResult(icon, title, message) {
    document.getElementById('result-icon').textContent = icon;
    document.getElementById('result-title').textContent = title;
    document.getElementById('result-message').textContent = message;
    document.getElementById('final-word').textContent = gameState.secretWord;

    const modal = document.getElementById('result-modal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function closeModal() {
    const modal = document.getElementById('result-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');

    // Return to home
    showScreen('home-screen');
}

// ==================== EVENT LISTENERS ====================
document.addEventListener('DOMContentLoaded', () => {
    // Home Screen
    document.getElementById('add-players-btn').addEventListener('click', showNamesScreen);

    // Names Screen
    document.getElementById('add-another-player-btn').addEventListener('click', () => {
        addPlayerNameInput();
    });
    document.getElementById('start-game-btn').addEventListener('click', startGame);
    document.getElementById('back-to-home-btn').addEventListener('click', () => {
        showScreen('home-screen');
    });

    // Role Screen
    document.getElementById('reveal-btn').addEventListener('click', revealRole);
    document.getElementById('next-player-btn').addEventListener('click', nextPlayer);

    // Game Screen - Actions
    document.getElementById('guess-btn').addEventListener('click', impostorGuess);
    document.getElementById('reveal-word-btn').addEventListener('click', revealWord);
    document.getElementById('new-game-btn').addEventListener('click', () => {
        if (confirm('🔄 ¿Quieres iniciar una nueva partida?')) {
            showScreen('home-screen');
        }
    });

    // Modal
    document.getElementById('close-modal-btn').addEventListener('click', closeModal);

    // Input validation
    document.getElementById('impostor-count').addEventListener('change', (e) => {
        const value = parseInt(e.target.value);
        if (value < 1) e.target.value = 1;
        if (value > 5) e.target.value = 5;
    });

    console.log('🎮 El Impostor - Juego cargado correctamente');
});

// ==================== KEYBOARD SHORTCUTS ====================
document.addEventListener('keydown', (e) => {
    // Space to reveal role (when on role screen)
    if (e.code === 'Space' && !document.getElementById('role-screen').classList.contains('hidden')) {
        const cover = document.getElementById('role-cover');
        if (!cover.classList.contains('opacity-0')) {
            e.preventDefault();
            revealRole();
        }
    }

    // Enter to start game (when on names screen)
    if (e.code === 'Enter' && !document.getElementById('names-screen').classList.contains('hidden')) {
        e.preventDefault();
        startGame();
    }
});
