import type { Events, TimeSplitEvents, Eras } from './events'
import { GameIds } from './events'
import { Platforms } from './platforms'

export interface Node {
  id: string
  title: string
}

export interface GameNode extends Node {
  releases: { platform: Platforms; year: number }[]
  isSpinOff?: boolean
}

export const gameNodes: GameNode[] = [
  {
    title: 'Skyward Sword',
    id: GameIds.SkywardSword,
    releases: [
      { platform: Platforms.Wii, year: 2011 },
      { platform: Platforms.Switch, year: 2021 }
    ]
  },
  {
    title: 'Ocarina of Time',
    id: GameIds.OcarinaOfTime,
    releases: [
      { platform: Platforms.N64, year: 1998 },
      { platform: Platforms.N3DS, year: 2011 }
    ]
  },
  {
    title: "Majora's Mask",
    id: GameIds.MajorasMask,
    releases: [
      { platform: Platforms.N64, year: 2000 },
      { platform: Platforms.N3DS, year: 2015 }
    ]
  },
  {
    title: 'Hyrule Warriors',
    id: GameIds.HyruleWarriors,
    releases: [
      { platform: Platforms.WiiU, year: 2014 },
      { platform: Platforms.N3DS, year: 2016 },
      { platform: Platforms.Switch, year: 2018 }
    ],
    isSpinOff: true
  },
  {
    title: 'Twilight Princess',
    id: GameIds.TwilightPrincess,
    releases: [
      { platform: Platforms.GameCube, year: 2006 },
      { platform: Platforms.Wii, year: 2006 },
      { platform: Platforms.WiiU, year: 2016 }
    ]
  },
  {
    title: "Link's Crossbow Training",
    id: GameIds.LinksCrossbowTraining,
    releases: [{ platform: Platforms.Wii, year: 2007 }],
    isSpinOff: true
  },
  {
    title: 'A Link to the Past',
    id: GameIds.ALinkToThePast,
    releases: [
      { platform: Platforms.SNES, year: 1991 },
      { platform: Platforms.GBA, year: 2002 }
    ]
  },
  {
    title: 'Ancient Stone Tablets',
    id: GameIds.AncientStoneTablets,
    releases: [{ platform: Platforms.SNES, year: 1997 }],
    isSpinOff: true
  },
  {
    title: 'The Wind Waker',
    id: GameIds.TheWindWaker,
    releases: [
      { platform: Platforms.GameCube, year: 2002 },
      { platform: Platforms.WiiU, year: 2013 }
    ]
  },
  {
    title: 'Navi Trackers',
    id: GameIds.NaviTrackers,
    releases: [
      { platform: Platforms.GameCube, year: 2003 },
      { platform: Platforms.WiiU, year: 2013 }
    ],
    isSpinOff: true
  },
  {
    title: 'Phantom Hourglass',
    id: GameIds.PhantomHourglass,
    releases: [{ platform: Platforms.DS, year: 2007 }]
  },
  {
    title: 'Spirit Tracks',
    id: GameIds.SpiritTracks,
    releases: [{ platform: Platforms.DS, year: 2009 }]
  },
  {
    title: 'The Minish Cap',
    id: GameIds.TheMinishCap,
    releases: [{ platform: Platforms.GBA, year: 2004 }]
  },
  {
    title: 'Four Swords',
    id: GameIds.FourSwords,
    releases: [
      { platform: Platforms.GBA, year: 2002 },
      { platform: Platforms.DS, year: 2011 }
    ]
  },
  {
    title: 'Four Swords Adventures',
    id: GameIds.FourSwordsAdventures,
    releases: [{ platform: Platforms.GameCube, year: 2004 }]
  },
  {
    title: 'A Link Between Worlds',
    id: GameIds.ALinkBetweenWorlds,
    releases: [{ platform: Platforms.N3DS, year: 2013 }]
  },
  {
    title: 'Cadence of Hyrule',
    id: GameIds.CadenceOfHyrule,
    releases: [{ platform: Platforms.Switch, year: 2019 }],
    isSpinOff: true
  },
  {
    title: 'Triforce Heroes',
    id: GameIds.TriforceHeroes,
    releases: [{ platform: Platforms.N3DS, year: 2015 }]
  },
  {
    title: 'Oracle of Seasons',
    id: GameIds.OracleOfSeasons,
    releases: [{ platform: Platforms.GBC, year: 2001 }]
  },
  {
    title: 'Oracle of Ages',
    id: GameIds.OracleOfAges,
    releases: [{ platform: Platforms.GBC, year: 2001 }]
  },
  {
    title: "Link's Awakening",
    id: GameIds.LinksAwakening,
    releases: [
      { platform: Platforms.GB, year: 1993 },
      { platform: Platforms.GBC, year: 1998 },
      { platform: Platforms.Switch, year: 2019 }
    ]
  },
  {
    title: 'The Legend of Zelda',
    id: GameIds.TheLegendOfZelda,
    releases: [
      { platform: Platforms.NES, year: 1986 },
      { platform: Platforms.GBA, year: 2004 }
    ]
  },
  {
    title: 'Zelda II: The Adventure of Link',
    id: GameIds.TheAdventureOfLink,
    releases: [
      { platform: Platforms.NES, year: 1987 },
      { platform: Platforms.GBA, year: 2004 }
    ]
  },
  {
    title: 'CDi Games and Cartoon',
    id: GameIds.CDiGamesAndCartoon,
    releases: [{ platform: Platforms.CDi, year: 1989 }],
    isSpinOff: true
  },
  {
    title: 'Hyrule Warriors: Age of Calamity',
    id: GameIds.AgeOfCalamity,
    releases: [{ platform: Platforms.Switch, year: 2020 }],
    isSpinOff: true
  },
  {
    title: 'Breath of the Wild',
    id: GameIds.BreathOfTheWild,
    releases: [
      { platform: Platforms.WiiU, year: 2017 },
      { platform: Platforms.Switch, year: 2017 }
    ]
  },
  {
    title: 'Tears of the Kingdom',
    id: GameIds.TearsOfTheKingdom,
    releases: [{ platform: Platforms.Switch, year: 2023 }]
  }
]
