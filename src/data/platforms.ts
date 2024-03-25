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

// interface BoxDimensions {
//   width: number
//   height: number
//   depth: number
// }

// type GameBoxDimesions = { [platforms in Platforms]: BoxDimensions }

export const gameBoxDimensions: any = {
  [Platforms.Wii]: {
    width: 200,
    height: 300,
    depth: 20
  },
  [Platforms.WiiU]: {
    width: 200,
    height: 300,
    depth: 20
  },
  [Platforms.Nintendo3DS]: {
    width: 200,
    height: 200,
    depth: 20
  },
  [Platforms.N64]: {
    width: 300,
    height: 200,
    depth: 80
  },
  [Platforms.SNES]: {
    width: 300,
    height: 200,
    depth: 80
  },
  [Platforms.NES]: {
    width: 200,
    height: 300,
    depth: 20
  }
}

export const gameBoxColors: any = {
  [Platforms.Wii]: 'white',
  [Platforms.WiiU]: 'blue',
  [Platforms.N64]: 'yellow',
  [Platforms.SNES]: 'black',
  [Platforms.NES]: 'beige',
  [Platforms.Nintendo3DS]: 'white'
}
