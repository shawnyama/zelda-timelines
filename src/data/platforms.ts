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

// Box dimensions in millimiters
const NESBoxDimensions = {
  width: 128,
  height: 179,
  depth: 24
}

const SNESN64BoxDimensions = {
  width: 182,
  height: 133,
  depth: 25
}

const GameCubeBoxDimensions = {
  width: 107,
  height: 149,
  depth: 17
}

const WiiBoxDimensions = {
  width: 135,
  height: 190,
  depth: 15
}

const SwitchBoxDimensions = {
  width: 104,
  height: 169,
  depth: 10
}

const DSBoxDimensions = {
  width: 135,
  height: 122,
  depth: 15
}

const N3DSBoxDimensions = {
  width: 135,
  height: 122,
  depth: 12
}

export const gameBoxDimensions: any = {
  [Platforms.NES]: NESBoxDimensions,
  [Platforms.SNES]: SNESN64BoxDimensions,
  [Platforms.N64]: SNESN64BoxDimensions,
  [Platforms.GameCube]: GameCubeBoxDimensions,
  [Platforms.Wii]: WiiBoxDimensions,
  [Platforms.WiiU]: WiiBoxDimensions,
  [Platforms.Switch]: SwitchBoxDimensions,
  [Platforms.GB]: DSBoxDimensions,
  [Platforms.GBC]: DSBoxDimensions,
  [Platforms.GBA]: DSBoxDimensions,
  [Platforms.DS]: DSBoxDimensions,
  [Platforms.N3DS]: N3DSBoxDimensions,
  [Platforms.CDi]: DSBoxDimensions
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
  [Platforms.GBC]: '#1d1d1d',
  [Platforms.GBA]: '#1d1d1d',
  [Platforms.DS]: '#1d1d1d',
  [Platforms.N3DS]: 'white',
  [Platforms.CDi]: 'white'
}

export const spineOnBottom = [Platforms.N64, Platforms.SNES]
