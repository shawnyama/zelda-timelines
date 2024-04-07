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
  N3DS = 'Nintendo 3DS',
  CDi = 'Phillips CD-i'
}

export const gameBoxDimensions: any = {
  [Platforms.NES]: {
    width: 210,
    height: 300,
    depth: 40
  },
  [Platforms.SNES]: {
    width: 300,
    height: 207,
    depth: 50
  },
  [Platforms.N64]: {
    width: 300,
    height: 207,
    depth: 50
  },
  [Platforms.GameCube]: {
    width: 200,
    height: 300,
    depth: 20
  },
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
  [Platforms.Switch]: {
    width: 165,
    height: 300,
    depth: 20
  },
  [Platforms.GB]: {
    width: 165,
    height: 300,
    depth: 20
  },
  [Platforms.GBC]: {
    width: 165,
    height: 300,
    depth: 20
  },
  [Platforms.GBA]: {
    width: 165,
    height: 300,
    depth: 20
  },
  [Platforms.DS]: {
    width: 200,
    height: 200,
    depth: 20
  },
  [Platforms.N3DS]: {
    width: 200,
    height: 200,
    depth: 20
  },
  [Platforms.CDi]: {
    width: 200,
    height: 200,
    depth: 20
  }
}

export const gameBoxColors: any = {
  [Platforms.NES]: 'rgb(181, 151, 94)',
  [Platforms.SNES]: '#2C2C2C',
  [Platforms.N64]: 'grey',
  [Platforms.GameCube]: '#1d1d1d',
  [Platforms.Wii]: 'white',
  [Platforms.WiiU]: '#009ACD',
  [Platforms.Switch]: 'rgba(211, 211, 211, 0.5)',
  [Platforms.GB]: 'white',
  [Platforms.GBC]: 'white',
  [Platforms.GBA]: 'white',
  [Platforms.DS]: 'grey',
  [Platforms.N3DS]: 'white',
  [Platforms.CDi]: 'white'
}

export const spineOnBottom = [Platforms.N64, Platforms.SNES]
