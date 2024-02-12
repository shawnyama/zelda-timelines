import type { Events, TimeSplitEvents, Eras } from './events'
import { Platforms } from './platforms'

export enum Games {
  SkywardSword = 'skyward-sword',
  OcarinaOfTime = 'ocarina-of-time',
  MajorasMask = 'majoras-mask',
  HyruleWarriors = 'hyrule-warriors',
  TwilightPrincess = 'twilight-princess',
  LinksCrossbowTraining = 'links-crossbow-training',
  ALinkToThePast = 'a-link-to-the-past',
  AncientStoneTablets = 'ancient-stone-tablets',
  TheWindWaker = 'the-wind-waker',
  NaviTrackers = 'navi-trackers',
  PhantomHourglass = 'phantom-hourglass',
  SpiritTracks = 'spirit-tracks',
  TheMinishCap = 'the-minish-cap',
  FourSwords = 'four-swords',
  FourSwordsAdventures = 'four-swords-adventures',
  ALinkBetweenWorlds = 'a-link-between-worlds',
  CadenceOfHyrule = 'cadence-of-hyrule',
  TriforceHeroes = 'triforce-heroes',
  OracleOfSeasons = 'oracle-of-seasons',
  OracleOfAges = 'oracle-of-ages',
  LinksAwakening = 'links-awakening',
  TheLegendOfZelda = 'the-legend-of-zelda',
  TheAdventureOfLink = 'the-adventure-of-link',
  CDiGamesAndCartoon = 'cdi-games-and-cartoon',
  AgeOfCalamity = 'age-of-calamity',
  BreathOfTheWild = 'breath-of-the-wild',
  TearsOfTheKingdom = 'tears-of-the-kingdom'
}

export type Node = {
  id: Games | Events | TimeSplitEvents | Eras
  title: string
  Platforms: string[]
  releaseYear: number
  isSpinOff: boolean
}

export const nodes: Node[] = [
  {
    title: 'Skyward Sword',
    id: Games.SkywardSword,
    Platforms: [Platforms.Wii],
    releaseYear: 2011,
    isSpinOff: false
  },
  {
    title: 'Ocarina of Time',
    id: Games.OcarinaOfTime,
    Platforms: [Platforms.N64],
    releaseYear: 1998,
    isSpinOff: false
  },
  {
    title: "Majora's Mask",
    id: Games.MajorasMask,
    Platforms: [Platforms.N64],
    releaseYear: 2000,
    isSpinOff: false
  },
  {
    title: 'Hyrule Warriors',
    id: Games.HyruleWarriors,
    Platforms: [Platforms.WiiU, Platforms.Nintendo3DS, Platforms.Switch],
    releaseYear: 2014,
    isSpinOff: true
  },
  {
    title: 'Twilight Princess',
    id: Games.TwilightPrincess,
    Platforms: [Platforms.GameCube, Platforms.Wii],
    releaseYear: 2006,
    isSpinOff: false
  },
  {
    title: "Link's Crossbow Training",
    id: Games.LinksCrossbowTraining,
    Platforms: [Platforms.Wii],
    releaseYear: 2007,
    isSpinOff: true
  },
  {
    title: 'A Link to the Past',
    id: Games.ALinkToThePast,
    Platforms: [Platforms.SNES],
    releaseYear: 1997,
    isSpinOff: false
  },
  {
    title: 'Ancient Stone Tablets',
    id: Games.AncientStoneTablets,
    Platforms: [Platforms.SNES],
    releaseYear: 2007,
    isSpinOff: true
  },
  {
    title: 'The Wind Waker',
    id: Games.TheWindWaker,
    Platforms: [Platforms.GameCube],
    releaseYear: 2002,
    isSpinOff: false
  },
  {
    title: 'Navi Trackers',
    id: Games.NaviTrackers,
    Platforms: [Platforms.DS, Platforms.GameCube],
    releaseYear: 2004,
    isSpinOff: true
  },
  {
    title: 'Phantom Hourglass',
    id: Games.PhantomHourglass,
    Platforms: [Platforms.DS],
    releaseYear: 2007,
    isSpinOff: false
  },
  {
    title: 'Spirit Tracks',
    id: Games.SpiritTracks,
    Platforms: [Platforms.DS],
    releaseYear: 2009,
    isSpinOff: false
  },
  {
    title: 'The Minish Cap',
    id: Games.TheMinishCap,
    Platforms: [Platforms.GBA],
    releaseYear: 2004,
    isSpinOff: false
  },
  {
    title: 'Four Swords',
    id: Games.FourSwords,
    Platforms: [Platforms.GBA],
    releaseYear: 2002,
    isSpinOff: true
  },
  {
    title: 'Four Swords Adventures',
    id: Games.FourSwordsAdventures,
    Platforms: [Platforms.GameCube],
    releaseYear: 2004,
    isSpinOff: true
  },
  {
    title: 'A Link Between Worlds',
    id: Games.ALinkBetweenWorlds,
    Platforms: [Platforms.Nintendo3DS],
    releaseYear: 2013,
    isSpinOff: true
  },
  {
    title: 'Cadence of Hyrule',
    id: Games.CadenceOfHyrule,
    Platforms: [Platforms.Switch],
    releaseYear: 2019,
    isSpinOff: true
  },
  {
    title: 'Triforce Heroes',
    id: Games.TriforceHeroes,
    Platforms: [Platforms.Nintendo3DS],
    releaseYear: 2015,
    isSpinOff: true
  },
  {
    title: 'Oracle of Seasons',
    id: Games.OracleOfSeasons,
    Platforms: [Platforms.GBC],
    releaseYear: 2001,
    isSpinOff: true
  },
  {
    title: 'Oracle of Ages',
    id: Games.OracleOfAges,
    Platforms: [Platforms.GBC],
    releaseYear: 2001,
    isSpinOff: true
  },
  {
    title: "Link's Awakening",
    id: Games.LinksAwakening,
    Platforms: [Platforms.GB, Platforms.Switch],
    releaseYear: 1993,
    isSpinOff: false
  },
  {
    title: 'Zelda I',
    id: Games.TheLegendOfZelda,
    Platforms: [Platforms.NES],
    releaseYear: 1986,
    isSpinOff: false
  },
  {
    title: 'Zelda II: The Adventure of Link',
    id: Games.TheAdventureOfLink,
    Platforms: [Platforms.NES],
    releaseYear: 1987,
    isSpinOff: false
  },
  {
    title: 'CDi Games and Cartoon',
    id: Games.CDiGamesAndCartoon,
    Platforms: [Platforms.PhillipsCDi],
    releaseYear: 1989,
    isSpinOff: true
  },
  {
    title: 'Hyrule Warriors: Age of Calamity',
    id: Games.AgeOfCalamity,
    Platforms: [Platforms.Switch],
    releaseYear: 2020,
    isSpinOff: true
  },
  {
    title: 'Breath of the Wild',
    id: Games.BreathOfTheWild,
    Platforms: [Platforms.Switch],
    releaseYear: 2017,
    isSpinOff: false
  },
  {
    title: 'Tears of the Kingdom',
    id: Games.TearsOfTheKingdom,
    Platforms: [Platforms.Switch],
    releaseYear: 2023,
    isSpinOff: false
  }
]
