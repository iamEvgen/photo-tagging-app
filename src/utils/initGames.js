const initGames = [
  { 
    gameId: 0,
    background: 'images/games/robot-city-game.jpeg',
    heroes: [
      {
        heroId: 0,
        name: 'Earthworm Jim',
        url: 'images/heroes/earthworm-jim.jpg',
        coords: [0, 0],
        found: false
      },
      {
        heroId: 1,
        name: 'Bender',
        url: 'images/heroes/bender.jpg',
        coords: [10, 10],
        found: false
      },
      {
        heroId: 2,
        name: 'Doctor Zoidberg',
        url: 'images/heroes/doctor-zoidberg.jpg',
        coords: [10, 10],
        found: false
      },
    ]
  },
  { 
    gameId: 1,
    background: 'images/underground-game.jpeg',
    heroes: [
      {
        heroId: 0,
        name: 'Arnold',
        url: 'images/heroes/arnold.jpg',
        coords: [0, 0],
        found: false
      },
      {
        heroId: 1,
        name: 'Johnny Bravo',
        url: 'images/heroes/johnny-bravo.jpg',
        coords: [10, 10],
        found: false
      },
      {
        heroId: 2,
        name: 'CatDog',
        url: 'images/heroes/catdog.jpg',
        coords: [10, 10],
        found: false
      },
    ]
  },
  { 
    gameId: 2,
    background: 'images/cyberpunk-game.jpeg',
    heroes: [
      {
        heroId: 0,
        name: 'Stewie',
        url: 'images/heroes/stewie.jpg',
        coords: [0, 0],
        found: false
      },
      {
        heroId: 1,
        name: 'Philip J. Fry',
        url: 'images/heroes/philip-j-fry.jpg',
        coords: [10, 10],
        found: false
      },
      {
        heroId: 2,
        name: 'Spider-Man',
        url: 'images/heroes/spider-man.jpg',
        coords: [10, 10],
        found: false
      },
    ]
  },
];

export default initGames;
