export enum Platforms {
  NES = 'Nintendo Entertainment System (NES)',
  SNES = 'Super Nintendo (SNES)',
  Satellaview = 'Satellaview',
  N64 = 'Nintendo 64',
  GameCube = 'GameCube',
  Wii = 'Wii',
  WiiU = 'Wii U',
  Switch = 'Nintendo Switch',
  Switch2 = 'Nintendo Switch 2',
  GB = 'Game Boy',
  GBC = 'Game Boy Color',
  GBA = 'Game Boy Advance',
  DS = 'Nintendo DS',
  N3DS = 'Nintendo 3DS',
  CDi = 'Phillips CD-i',
  GameAndWatch = 'Game & Watch',
  NelsonicGameWatch = 'Nelsonic Game Watch',
  TVSeries = 'TV Series',
  Movie = 'Movie'
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

const DiscBoxDimensions = {
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

const gameAndWatchDimensions = {
  width: 113,
  height: 65,
  depth: 16
}

const CDiBoxDimensions = {
  width: 135,
  height: 135,
  depth: 7
}

const noDimensions = {
  width: 0,
  height: 0,
  depth: 0
}

export const gameBoxDimensions: Record<
  Platforms,
  { width: number; height: number; depth: number }
> = {
  [Platforms.NES]: NESBoxDimensions,
  [Platforms.SNES]: SNESN64BoxDimensions,
  [Platforms.N64]: SNESN64BoxDimensions,
  [Platforms.GameCube]: DiscBoxDimensions,
  [Platforms.Wii]: DiscBoxDimensions,
  [Platforms.WiiU]: DiscBoxDimensions,
  [Platforms.Switch]: SwitchBoxDimensions,
  [Platforms.Switch2]: SwitchBoxDimensions,
  [Platforms.GB]: DSBoxDimensions,
  [Platforms.GBC]: DSBoxDimensions,
  [Platforms.GBA]: DSBoxDimensions,
  [Platforms.DS]: DSBoxDimensions,
  [Platforms.N3DS]: N3DSBoxDimensions,
  [Platforms.Satellaview]: noDimensions,
  [Platforms.CDi]: CDiBoxDimensions,
  [Platforms.GameAndWatch]: gameAndWatchDimensions,
  [Platforms.NelsonicGameWatch]: noDimensions,
  [Platforms.TVSeries]: noDimensions,
  [Platforms.Movie]: noDimensions
}

export const gameBoxColors: Record<Platforms, string> = {
  [Platforms.NES]: 'rgb(181, 151, 94)',
  [Platforms.SNES]: '#2C2C2C',
  [Platforms.N64]: 'rgb(149, 126, 73)',
  [Platforms.GameCube]: '#1d1d1d',
  [Platforms.Wii]: 'white',
  [Platforms.WiiU]: '#009ACD',
  [Platforms.Switch]: 'rgba(211, 211, 211, 0.5)',
  [Platforms.Switch2]: '#E70009',
  [Platforms.GB]: '#1d1d1d',
  [Platforms.GBC]: '#1d1d1d',
  [Platforms.GBA]: '#1d1d1d',
  [Platforms.DS]: '#1d1d1d',
  [Platforms.N3DS]: 'white',
  [Platforms.CDi]: 'rgba(211, 211, 211, 0.5)',
  [Platforms.Satellaview]: 'black',
  [Platforms.GameAndWatch]: 'rgb(175, 121, 60)',
  [Platforms.NelsonicGameWatch]: 'black',
  [Platforms.TVSeries]: 'black',
  [Platforms.Movie]: 'black'
}

export const spineOnBottom = new Set([Platforms.N64, Platforms.SNES])
