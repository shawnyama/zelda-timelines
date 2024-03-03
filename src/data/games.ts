import type { Events, TimeSplitEvents, Eras } from './events'
import { GameIds } from './events'
import { Platforms } from './platforms'

export interface Node {
  id: string
  title: string
}

export interface GameNode extends Node {
  platforms: string[]
  releaseYear: number
  isSpinOff: boolean
}

export const gameNodes: GameNode[] = [
  {
    title: 'Skyward Sword',
    id: GameIds.SkywardSword,
    platforms: [Platforms.Wii],
    releaseYear: 2011,
    isSpinOff: false
  },
  {
    title: 'Ocarina of Time',
    id: GameIds.OcarinaOfTime,
    platforms: [Platforms.N64],
    releaseYear: 1998,
    isSpinOff: false
  },
  {
    title: "Majora's Mask",
    id: GameIds.MajorasMask,
    platforms: [Platforms.N64],
    releaseYear: 2000,
    isSpinOff: false
  },
  {
    title: 'Hyrule Warriors',
    id: GameIds.HyruleWarriors,
    platforms: [Platforms.WiiU, Platforms.Nintendo3DS, Platforms.Switch],
    releaseYear: 2014,
    isSpinOff: true
  },
  {
    title: 'Twilight Princess',
    id: GameIds.TwilightPrincess,
    platforms: [Platforms.GameCube, Platforms.Wii, Platforms.WiiU],
    releaseYear: 2006,
    isSpinOff: false
  },
  {
    title: "Link's Crossbow Training",
    id: GameIds.LinksCrossbowTraining,
    platforms: [Platforms.Wii],
    releaseYear: 2007,
    isSpinOff: true
  },
  {
    title: 'A Link to the Past',
    id: GameIds.ALinkToThePast,
    platforms: [Platforms.SNES, Platforms.GBA],
    releaseYear: 1997,
    isSpinOff: false
  },
  {
    title: 'Ancient Stone Tablets',
    id: GameIds.AncientStoneTablets,
    platforms: [Platforms.SNES],
    releaseYear: 2007,
    isSpinOff: true
  },
  {
    title: 'The Wind Waker',
    id: GameIds.TheWindWaker,
    platforms: [Platforms.GameCube, Platforms.WiiU],
    releaseYear: 2002,
    isSpinOff: false
  },
  {
    title: 'Navi Trackers',
    id: GameIds.NaviTrackers,
    platforms: [Platforms.DS, Platforms.GameCube],
    releaseYear: 2004,
    isSpinOff: true
  },
  {
    title: 'Phantom Hourglass',
    id: GameIds.PhantomHourglass,
    platforms: [Platforms.DS],
    releaseYear: 2007,
    isSpinOff: false
  },
  {
    title: 'Spirit Tracks',
    id: GameIds.SpiritTracks,
    platforms: [Platforms.DS],
    releaseYear: 2009,
    isSpinOff: false
  },
  {
    title: 'The Minish Cap',
    id: GameIds.TheMinishCap,
    platforms: [Platforms.GBA],
    releaseYear: 2004,
    isSpinOff: false
  },
  {
    title: 'Four Swords',
    id: GameIds.FourSwords,
    platforms: [Platforms.GBA],
    releaseYear: 2002,
    isSpinOff: true
  },
  {
    title: 'Four Swords Adventures',
    id: GameIds.FourSwordsAdventures,
    platforms: [Platforms.GameCube],
    releaseYear: 2004,
    isSpinOff: true
  },
  {
    title: 'A Link Between Worlds',
    id: GameIds.ALinkBetweenWorlds,
    platforms: [Platforms.Nintendo3DS],
    releaseYear: 2013,
    isSpinOff: true
  },
  {
    title: 'Cadence of Hyrule',
    id: GameIds.CadenceOfHyrule,
    platforms: [Platforms.Switch],
    releaseYear: 2019,
    isSpinOff: true
  },
  {
    title: 'Triforce Heroes',
    id: GameIds.TriforceHeroes,
    platforms: [Platforms.Nintendo3DS],
    releaseYear: 2015,
    isSpinOff: true
  },
  {
    title: 'Oracle of Seasons',
    id: GameIds.OracleOfSeasons,
    platforms: [Platforms.GBC],
    releaseYear: 2001,
    isSpinOff: true
  },
  {
    title: 'Oracle of Ages',
    id: GameIds.OracleOfAges,
    platforms: [Platforms.GBC],
    releaseYear: 2001,
    isSpinOff: true
  },
  {
    title: "Link's Awakening",
    id: GameIds.LinksAwakening,
    platforms: [Platforms.GB, Platforms.Switch],
    releaseYear: 1993,
    isSpinOff: false
  },
  {
    title: 'Zelda I',
    id: GameIds.TheLegendOfZelda,
    platforms: [Platforms.NES],
    releaseYear: 1986,
    isSpinOff: false
  },
  {
    title: 'Zelda II: The Adventure of Link',
    id: GameIds.TheAdventureOfLink,
    platforms: [Platforms.NES],
    releaseYear: 1987,
    isSpinOff: false
  },
  {
    title: 'CDi Games and Cartoon',
    id: GameIds.CDiGameIdsAndCartoon,
    platforms: [Platforms.PhillipsCDi],
    releaseYear: 1989,
    isSpinOff: true
  },
  {
    title: 'Hyrule Warriors: Age of Calamity',
    id: GameIds.AgeOfCalamity,
    platforms: [Platforms.Switch],
    releaseYear: 2020,
    isSpinOff: true
  },
  {
    title: 'Breath of the Wild',
    id: GameIds.BreathOfTheWild,
    platforms: [Platforms.WiiU, Platforms.Switch],
    releaseYear: 2017,
    isSpinOff: false
  },
  {
    title: 'Tears of the Kingdom',
    id: GameIds.TearsOfTheKingdom,
    platforms: [Platforms.Switch],
    releaseYear: 2023,
    isSpinOff: false
  }
]
