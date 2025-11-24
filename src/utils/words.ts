import type { Category } from '../types';

export const wordCategories: Record<Category, string[]> = {
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

export const categoryNames: Record<Category, string> = {
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

export function getRandomWord(category: Category): string {
    const words = wordCategories[category] || wordCategories.general;
    return words[Math.floor(Math.random() * words.length)];
}

export function getRandomImpostorIndices(playerCount: number, impostorCount: number): number[] {
    const indices: number[] = [];
    while (indices.length < impostorCount) {
        const randomIndex = Math.floor(Math.random() * playerCount);
        if (!indices.includes(randomIndex)) {
            indices.push(randomIndex);
        }
    }
    return indices;
}
