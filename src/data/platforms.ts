export enum Platforms {
  NES = 'Nintendo Entertainment System (NES)',
  SNES = 'Super Nintendo (SNES)',
  N64 = 'Nintendo 64',
  GameCube = 'GameCube',
  Wii = 'Wii',
  WiiU = 'Wii U',
  Switch = 'Nintendo Switch',
  GB = 'Game Boy',
  GBC = 'Game Boy Color',
  GBA = 'Game Boy Advance',
  DS = 'Nintendo DS',
  Nintendo3DS = 'Nintendo 3DS',
  PhillipsCDi = 'Phillips CD-i'
}

export const gameBoxDimensions = {
  [Platforms.Wii]: {
    width: 420,
    height: 300,
    front: {
      width: 200,
      height: 100
    },
    spine: {
      width: 20,
      height: 100
    },
    back: {
      width: 200,
      height: 100
    }
  },
  [Platforms.N64]: {
    width: 300,
    height: 200,
    front: {
      width: 100,
      height: 100
    },
    spine: {
      width: 20,
      height: 20
    },
    back: {
      width: 100,
      height: 100
    }
  }
}
