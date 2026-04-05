import { GameIds, Events, Eras } from '../events'
import { EdgeStyle, EdgeDistance } from '../edge-decor'
import type { Edge, Metadata } from '../timelines'

// This is a comment, these are like notes used to help human readers understand certain lines of code.

const metadata: Metadata = {
  timelineTitle: 'Imprisoning Split',
  timelineCreator: 'Tabun', // If there are mutliple creators, separate names with commas. Put null if unknown.
  submittedBy: 'Masa', // Put null if you want to be anonymous
  submittedOn: '2026-04-05',
  lastUpdatedOn: '2026-04-05',
  // If there are no sources, put an empty array []
  // You can add another source by adding another object with label and url to the array
  sources: [
    {
      label: 'Original article',
      url: 'https://note.com/ohyoso_tabun/n/n9c210ebca848' // Put null if there is no URL
    },
    {
      label: 'AI Translated Google Doc',
      url: 'https://docs.google.com/document/d/1GNVlLvR2Tam1eRYkyw_ZX3kjbwyqQT_TX3_bK4BYoBw/edit?tab=t.0' // Put null if there is no URL
    }
  ],
  notes:
    "This timeline resolves the multiple inconsistencies that prevent the Breath of the Wild saga from working within the framework of the original Hyrule Historia timeline. It instead suggests that the arrival of Zelda in the past creates an alternate series of events which prevents Ganondorf from destroying Rauru's Hyrule. This theory presumes Age of Calamity's Ganondorf to be an earlier version of Skyward Sword's Bringer of Demise." // Put any additional notes here, or null if there are none
}

const flowchart: Edge[] = [
  {
    source: Events.TheCreationOfTheLandAndSky,
    target: Events.GodlyEra,
    style: EdgeStyle.Dotted,
    extraDistance: 2
  },
  {
    source: Events.GodlyEra,
    target: Events.ZonaiCrisis,
    style: EdgeStyle.Dotted,
    extraDistance: 1
  },
  {
    source: Events.ZonaiCrisis,
    target: Events.HyruleFounding,
    style: EdgeStyle.Dotted,
    extraDistance: 1
  },
  {
    source: Events.HyruleFounding,
    target: Events.AncientArrival,
    style: EdgeStyle.Thick
  },
  {
    source: Events.HyruleFounding,
    target: Events.FallOfHyrule,
    style: EdgeStyle.Thick
  },
  {
    source: Events.FallOfHyrule,
    target: Events.TheAncientBattleAndTheReincanationOfTheGodessHylia,
    style: EdgeStyle.Thick
  },
  {
    source: Events.AncientArrival,
    target: GameIds.AgeofImprisonment,
    style: EdgeStyle.Thick
  },
  {
    source: Events.TheAncientBattleAndTheReincanationOfTheGodessHylia,
    target: GameIds.SkywardSword,
    style: EdgeStyle.Dotted,
    extraDistance: 2
  },
  {
    source: GameIds.SkywardSword,
    target: GameIds.TheMinishCap,
    style: EdgeStyle.Dotted,
    extraDistance: 2
  },
  {
    source: GameIds.TheMinishCap,
    target: Events.HyruleanCivilWar,
    style: EdgeStyle.Dotted,
    extraDistance: 2
  },
  {
    source: Events.HyruleanCivilWar,
    target: Events.TheImprisoningWar,
    style: EdgeStyle.Dotted,
    extraDistance: 2
  },
  {
    source: Events.HyruleanCivilWar,
    target: GameIds.OcarinaOfTime,
    style: EdgeStyle.Dotted,
    extraDistance: 2
  },
  {
    source: Events.TheImprisoningWar,
    target: GameIds.ALinkToThePast,
    style: EdgeStyle.Dotted,
    extraDistance: 2
  },
  {
    source: GameIds.ALinkToThePast,
    target: GameIds.OracleOfAges,
    style: EdgeStyle.Thick
  },
  {
    source: GameIds.ALinkToThePast,
    target: GameIds.OracleOfSeasons,
    style: EdgeStyle.Thick
  },
  {
    source: GameIds.OracleOfSeasons,
    target: GameIds.LinksAwakening,
    style: EdgeStyle.Thick
  },
  {
    source: GameIds.OracleOfAges,
    target: GameIds.LinksAwakening,
    style: EdgeStyle.Thick
  },
  {
    source: GameIds.LinksAwakening,
    target: GameIds.ALinkBetweenWorlds,
    style: EdgeStyle.Dotted,
    extraDistance: 1
  },
  {
    source: GameIds.ALinkBetweenWorlds,
    target: GameIds.TriforceHeroes,
    style: EdgeStyle.Thick
  },
  {
    source: GameIds.TriforceHeroes,
    target: GameIds.EchoesOfWisdom,
    style: EdgeStyle.Dotted,
    extraDistance: 1
  },
  {
    source: GameIds.EchoesOfWisdom,
    target: Events.TheTragedyOfPrincessZeldaI,
    style: EdgeStyle.Thick
  },
  {
    source: Events.TheTragedyOfPrincessZeldaI,
    target: GameIds.TheLegendOfZelda,
    style: EdgeStyle.Dotted,
    extraDistance: 1
  },
  {
    source: GameIds.TheLegendOfZelda,
    target: GameIds.TheAdventureOfLink,
    style: EdgeStyle.Thick
  },
  {
    source: GameIds.OcarinaOfTime,
    target: GameIds.MajorasMask,
    style: EdgeStyle.Thick
  },
  {
    source: GameIds.MajorasMask,
    target: GameIds.TwilightPrincess,
    style: EdgeStyle.Dotted,
    extraDistance: 1
  },
  {
    source: GameIds.TwilightPrincess,
    target: GameIds.FourSwords,
    style: EdgeStyle.Dotted,
    extraDistance: 2
  },
  {
    source: GameIds.FourSwords,
    target: GameIds.FourSwordsAdventures,
    style: EdgeStyle.Thick
  },
  {
    source: GameIds.OcarinaOfTime,
    target: GameIds.TheWindWaker,
    style: EdgeStyle.Dotted,
    extraDistance: 2
  },
  {
    source: GameIds.TheWindWaker,
    target: GameIds.PhantomHourglass,
    style: EdgeStyle.Thick
  },
  {
    source: GameIds.PhantomHourglass,
    target: GameIds.SpiritTracks,
    style: EdgeStyle.Dotted,
    extraDistance: 2
  },
  {
    source: GameIds.AgeofImprisonment,
    target: Events.TheAncientCalamity,
    style: EdgeStyle.Dotted,
    extraDistance: 2
  },
  {
    source: Events.TheAncientCalamity,
    target: Events.EraOfPeace,
    style: EdgeStyle.Dotted,
    extraDistance: 40
  },
  {
    source: Events.EraOfPeace,
    target: Events.TheGreatCalamity,
    style: EdgeStyle.Dotted,
    extraDistance: 39
  },
  {
    source: Events.TheGreatCalamity,
    target: GameIds.BreathOfTheWild,
    style: EdgeStyle.Thick,
    extraDistance: 1
  },
  {
    source: Events.TheGreatCalamity,
    target: GameIds.AgeOfCalamity,
    style: EdgeStyle.Thick
  },
  {
    source: GameIds.BreathOfTheWild,
    target: GameIds.TearsOfTheKingdom,
    style: EdgeStyle.Thick
  }
]

export default { flowchart, metadata }
