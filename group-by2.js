const avengersTeam = [
    {
        name: 'Tony Stark',
        alias: 'Iron Man',
        powers: ['Inteligencia', 'Tecnología avanzada', 'Traje de combate'],
        planet: 'Tierra',
        specialty: 'Ingeniería y Tecnología',
        movies: ['Iron Man', 'The Avengers', 'Avengers: Endgame', 'etc.'],
        status: 'muerto',
        powerLevel: 80
    },
    {
        name: 'Steve Rogers',
        alias: 'Captain America',
        powers: ['Fuerza sobrehumana', 'Agilidad', 'Escudo indestructible'],
        planet: 'Tierra',
        specialty: 'Liderazgo y Estrategia',
        movies: ['Captain America: The First Avenger', 'The Avengers', 'Avengers: Endgame', 'etc.'],
        status: 'vivo',
        powerLevel: 80
    },
    {
        name: 'Thor Odinson',
        alias: 'Thor',
        powers: ['Dios del Trueno', 'Martillo Mjolnir', 'Control del clima'],
        planet: 'Asgard',
        specialty: 'Combate y Realeza',
        movies: ['Thor', 'The Avengers', 'Thor: Ragnarok', 'etc.'],
        status: 'vivo',
        powerLevel: 98
    },
    {
        name: 'Bruce Banner',
        alias: 'Hulk',
        powers: ['Fuerza extrema', 'Regeneración', 'Resistencia'],
        planet: 'Tierra',
        specialty: 'Física y Ciencia',
        movies: ['The Incredible Hulk', 'The Avengers', 'Avengers: Age of Ultron', 'etc.'],
        status: 'vivo',
        powerLevel: 88
    },
    {
        name: 'Natasha Romanoff',
        alias: 'Black Widow',
        powers: ['Espionaje', 'Combate cuerpo a cuerpo', 'Agilidad'],
        planet: 'Tierra',
        specialty: 'Espionaje y Lucha',
        movies: ['Iron Man 2', 'The Avengers', 'Avengers: Endgame', 'etc.'],
        status: 'muerto',
        powerLevel: 82
    },
    {
        name: 'Clint Barton',
        alias: 'Hawkeye',
        powers: ['Tiro con arco', 'Combate cuerpo a cuerpo', 'Precisión'],
        planet: 'Tierra',
        specialty: 'Arquería y Combate',
        movies: ['Thor', 'The Avengers', 'Avengers: Age of Ultron', 'etc.'],
        status: 'vivo',
        powerLevel: 85
    }
];

Object.groupBy(avengersTeam, hero => hero.name)
Object.groupBy(avengersTeam, hero => { 
    if (hero.planet === 'Tierra') return 'Humano' 
    return 'Alien'}) 
Object.groupBy(avengersTeam, hero => `status: ${hero.status}`)

// . Los símbolos en JavaScript son valores únicos e inmutables que se utilizan como claves de propiedades de objetos.
const Human_level_power = Symbol()
const Semi_level_power = Symbol()
const Good_level_power = Symbol()

Object.groupBy(avengersTeam, hero => { 
    if (hero.powerLevel > 90) return Good_level_power 
    if (hero.powerLevel > 80) return Semi_level_power 
    return Human_level_power })

