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

export enum Platform {
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

export enum Timelines {
  Official = 'official',
  Triforce = 'triforce',
  Lorulean = 'lorulean'
}

export type Link = {
  source: Games
  target: Games
  label?: string
}

export type Node = {
  id: Games
  title: string
  platform: string[]
  releaseYear: number
  isSpinOff: boolean
}

export const links: {
  [Timelines.Official]: Link[]
  [Timelines.Triforce]: Link[]
  [Timelines.Lorulean]: Link[]
} = {
  [Timelines.Official]: [
    { source: Games.SkywardSword, target: Games.TheMinishCap },
    { source: Games.TheMinishCap, target: Games.FourSwords },
    { source: Games.FourSwords, target: Games.OcarinaOfTime },
    { source: Games.OcarinaOfTime, target: Games.MajorasMask },
    { source: Games.MajorasMask, target: Games.TwilightPrincess },
    { source: Games.OcarinaOfTime, target: Games.TheWindWaker },
    { source: Games.OcarinaOfTime, target: Games.ALinkToThePast },
    { source: Games.TwilightPrincess, target: Games.FourSwordsAdventures },
    { source: Games.TheLegendOfZelda, target: Games.TheAdventureOfLink },
    { source: Games.ALinkToThePast, target: Games.LinksAwakening },
    { source: Games.LinksAwakening, target: Games.OracleOfAges },
    { source: Games.OracleOfAges, target: Games.OracleOfSeasons },
    { source: Games.OracleOfSeasons, target: Games.ALinkBetweenWorlds },
    { source: Games.ALinkBetweenWorlds, target: Games.TriforceHeroes },
    { source: Games.TriforceHeroes, target: Games.TheLegendOfZelda },
    { source: Games.TheWindWaker, target: Games.PhantomHourglass },
    { source: Games.PhantomHourglass, target: Games.SpiritTracks },
    { source: Games.BreathOfTheWild, target: Games.AgeOfCalamity },
    { source: Games.BreathOfTheWild, target: Games.TearsOfTheKingdom }
  ],
  [Timelines.Triforce]: [
    { source: Games.SkywardSword, target: Games.OcarinaOfTime },
    { source: Games.OcarinaOfTime, target: Games.MajorasMask },
    { source: Games.MajorasMask, target: Games.HyruleWarriors },
    { source: Games.HyruleWarriors, target: Games.TwilightPrincess },
    { source: Games.TwilightPrincess, target: Games.LinksCrossbowTraining },
    { source: Games.LinksCrossbowTraining, target: Games.ALinkToThePast },
    { source: Games.OcarinaOfTime, target: Games.TheWindWaker },
    { source: Games.TheWindWaker, target: Games.NaviTrackers },
    { source: Games.NaviTrackers, target: Games.PhantomHourglass },
    { source: Games.PhantomHourglass, target: Games.SpiritTracks },
    { source: Games.SpiritTracks, target: Games.TheMinishCap },
    { source: Games.TheMinishCap, target: Games.FourSwords },
    { source: Games.FourSwords, target: Games.FourSwordsAdventures },
    { source: Games.FourSwordsAdventures, target: Games.ALinkToThePast },
    { source: Games.ALinkToThePast, target: Games.AncientStoneTablets },
    { source: Games.AncientStoneTablets, target: Games.ALinkBetweenWorlds },
    { source: Games.ALinkBetweenWorlds, target: Games.TriforceHeroes },
    { source: Games.TriforceHeroes, target: Games.OracleOfAges },
    { source: Games.OracleOfAges, target: Games.OracleOfSeasons },
    { source: Games.OracleOfSeasons, target: Games.LinksAwakening },
    { source: Games.LinksAwakening, target: Games.TheLegendOfZelda },
    { source: Games.TheLegendOfZelda, target: Games.TheAdventureOfLink },
    { source: Games.TheAdventureOfLink, target: Games.CDiGamesAndCartoon },
    { source: Games.CDiGamesAndCartoon, target: Games.BreathOfTheWild },
    { source: Games.BreathOfTheWild, target: Games.AgeOfCalamity },
    { source: Games.BreathOfTheWild, target: Games.TearsOfTheKingdom }
  ],
  [Timelines.Lorulean]: [
    { source: Games.SkywardSword, target: Games.TheMinishCap },
    { source: Games.TheMinishCap, target: Games.FourSwords },
    { source: Games.FourSwords, target: Games.FourSwordsAdventures },
    { source: Games.FourSwordsAdventures, target: Games.ALinkToThePast },
    { source: Games.TheMinishCap, target: Games.OcarinaOfTime },
    { source: Games.OcarinaOfTime, target: Games.MajorasMask },
    { source: Games.MajorasMask, target: Games.TwilightPrincess },
    { source: Games.BreathOfTheWild, target: Games.AgeOfCalamity },
    { source: Games.BreathOfTheWild, target: Games.TearsOfTheKingdom },
    { source: Games.OcarinaOfTime, target: Games.TheWindWaker },
    { source: Games.TwilightPrincess, target: Games.BreathOfTheWild },
    { source: Games.ALinkToThePast, target: Games.OracleOfAges },
    { source: Games.OracleOfAges, target: Games.OracleOfSeasons },
    { source: Games.OracleOfSeasons, target: Games.LinksAwakening },
    { source: Games.LinksAwakening, target: Games.ALinkBetweenWorlds },
    { source: Games.ALinkBetweenWorlds, target: Games.TriforceHeroes },
    { source: Games.TriforceHeroes, target: Games.TheLegendOfZelda },
    { source: Games.TheLegendOfZelda, target: Games.TheAdventureOfLink },
    { source: Games.TheWindWaker, target: Games.PhantomHourglass },
    { source: Games.PhantomHourglass, target: Games.SpiritTracks }
  ]
}

export const nodes: Node[] = [
  {
    title: 'Skyward Sword',
    id: Games.SkywardSword,
    platform: [Platform.Wii],
    releaseYear: 2011,
    isSpinOff: false
  },
  {
    title: 'Ocarina of Time',
    id: Games.OcarinaOfTime,
    platform: [Platform.N64],
    releaseYear: 1998,
    isSpinOff: false
  },
  {
    title: "Majora's Mask",
    id: Games.MajorasMask,
    platform: [Platform.N64],
    releaseYear: 2000,
    isSpinOff: false
  },
  {
    title: 'Hyrule Warriors',
    id: Games.HyruleWarriors,
    platform: [Platform.WiiU, Platform.Nintendo3DS, Platform.Switch],
    releaseYear: 2014,
    isSpinOff: true
  },
  {
    title: 'Twilight Princess',
    id: Games.TwilightPrincess,
    platform: [Platform.GameCube, Platform.Wii],
    releaseYear: 2006,
    isSpinOff: false
  },
  {
    title: "Link's Crossbow Training",
    id: Games.LinksCrossbowTraining,
    platform: [Platform.Wii],
    releaseYear: 2007,
    isSpinOff: true
  },
  {
    title: 'A Link to the Past',
    id: Games.ALinkToThePast,
    platform: [Platform.SNES],
    releaseYear: 1997,
    isSpinOff: false
  },
  {
    title: 'Ancient Stone Tablets',
    id: Games.AncientStoneTablets,
    platform: [Platform.SNES],
    releaseYear: 2007,
    isSpinOff: true
  },
  {
    title: 'The Wind Waker',
    id: Games.TheWindWaker,
    platform: [Platform.GameCube],
    releaseYear: 2002,
    isSpinOff: false
  },
  {
    title: 'Navi Trackers',
    id: Games.NaviTrackers,
    platform: [Platform.DS, Platform.GameCube],
    releaseYear: 2004,
    isSpinOff: true
  },
  {
    title: 'Phantom Hourglass',
    id: Games.PhantomHourglass,
    platform: [Platform.DS],
    releaseYear: 2007,
    isSpinOff: false
  },
  {
    title: 'Spirit Tracks',
    id: Games.SpiritTracks,
    platform: [Platform.DS],
    releaseYear: 2009,
    isSpinOff: false
  },
  {
    title: 'The Minish Cap',
    id: Games.TheMinishCap,
    platform: [Platform.GBA],
    releaseYear: 2004,
    isSpinOff: false
  },
  {
    title: 'Four Swords',
    id: Games.FourSwords,
    platform: [Platform.GBA],
    releaseYear: 2002,
    isSpinOff: true
  },
  {
    title: 'Four Swords Adventures',
    id: Games.FourSwordsAdventures,
    platform: [Platform.GameCube],
    releaseYear: 2004,
    isSpinOff: true
  },
  {
    title: 'A Link Between Worlds',
    id: Games.ALinkBetweenWorlds,
    platform: [Platform.Nintendo3DS],
    releaseYear: 2013,
    isSpinOff: true
  },
  {
    title: 'Cadence of Hyrule',
    id: Games.CadenceOfHyrule,
    platform: [Platform.Switch],
    releaseYear: 2019,
    isSpinOff: true
  },
  {
    title: 'Triforce Heroes',
    id: Games.TriforceHeroes,
    platform: [Platform.Nintendo3DS],
    releaseYear: 2015,
    isSpinOff: true
  },
  {
    title: 'Oracle of Seasons',
    id: Games.OracleOfSeasons,
    platform: [Platform.GBC],
    releaseYear: 2001,
    isSpinOff: true
  },
  {
    title: 'Oracle of Ages',
    id: Games.OracleOfAges,
    platform: [Platform.GBC],
    releaseYear: 2001,
    isSpinOff: true
  },
  {
    title: "Link's Awakening",
    id: Games.LinksAwakening,
    platform: [Platform.GB, Platform.Switch],
    releaseYear: 1993,
    isSpinOff: false
  },
  {
    title: 'Zelda I',
    id: Games.TheLegendOfZelda,
    platform: [Platform.NES],
    releaseYear: 1986,
    isSpinOff: false
  },
  {
    title: 'Zelda II: The Adventure of Link',
    id: Games.TheAdventureOfLink,
    platform: [Platform.NES],
    releaseYear: 1987,
    isSpinOff: false
  },
  {
    title: 'CDi Games and Cartoon',
    id: Games.CDiGamesAndCartoon,
    platform: [Platform.PhillipsCDi],
    releaseYear: 1989,
    isSpinOff: true
  },
  {
    title: 'Hyrule Warriors: Age of Calamity',
    id: Games.AgeOfCalamity,
    platform: [Platform.Switch],
    releaseYear: 2020,
    isSpinOff: true
  },
  {
    title: 'Breath of the Wild',
    id: Games.BreathOfTheWild,
    platform: [Platform.Switch],
    releaseYear: 2017,
    isSpinOff: false
  },
  {
    title: 'Tears of the Kingdom',
    id: Games.TearsOfTheKingdom,
    platform: [Platform.Switch],
    releaseYear: 2023,
    isSpinOff: false
  }
]
