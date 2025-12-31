import { GameIds, Events, Eras } from '../events'
import { EdgeStyle, EdgeDistance } from '../edge-decor'
import type { Edge, Metadata } from '../timelines'

const metadata: Metadata = {
  timelineTitle: 'Official',
  timelineCreator: 'Nintendo',
  submittedBy: 'Shawn Yama',
  submittedOn: '2024-02-11',
  lastUpdatedOn: '2025-05-19',
  sources: [
    {
      label: 'NA site',
      url: 'https://www.zelda.com/about/'
    },
    {
      label: 'JP site',
      url: 'https://www.nintendo.com/jp/character/zelda/history/index.html'
    }
  ],
  notes: null
}

const flowchart: Edge[] = [
  {
    source: Events.TheCreationOfTheLandAndSky,
    target: GameIds.SkywardSword,
    subgraphToStart: Eras.EraOfMyth
  },
  { source: GameIds.SkywardSword, target: Events.TheSacredRealmIsSealed },
  { source: Events.TheSacredRealmIsSealed, target: Events.TheEstablishmentOfHyruleKingdom },
  { source: Events.TheEstablishmentOfHyruleKingdom, target: GameIds.TheMinishCap },
  {
    source: GameIds.TheMinishCap,
    target: GameIds.FourSwords,
    extraDistance: EdgeDistance.SomeTimePasses
  },
  { source: GameIds.FourSwords, target: Events.HyruleanCivilWar },
  {
    source: Events.HyruleanCivilWar,
    target: GameIds.OcarinaOfTime,
    style: EdgeStyle.Thick
  },
  // The Hero is Triumphant
  {
    source: GameIds.OcarinaOfTime,
    target: Events.TheHeroIsTriumphant,
    style: EdgeStyle.Thick
  },
  {
    source: Events.TheHeroIsTriumphant,
    target: Events.ChildTimeline,
    style: EdgeStyle.Thick
  },
  // Adult timeline
  { source: Events.TheHeroIsTriumphant, target: Events.AdultTimeline },
  { source: Events.AdultTimeline, target: Events.HyruleIsSealedAndThenFlooded },
  { source: Events.HyruleIsSealedAndThenFlooded, target: GameIds.TheWindWaker },
  {
    source: GameIds.TheWindWaker,
    target: GameIds.PhantomHourglass,
    style: EdgeStyle.Thick
  },
  { source: GameIds.PhantomHourglass, target: Events.NewContinentDiscovered },
  { source: Events.NewContinentDiscovered, target: Events.ANewHyruleKingdomIsFounded },
  { source: Events.ANewHyruleKingdomIsFounded, target: GameIds.SpiritTracks },
  // Child timeline
  { source: Events.ChildTimeline, target: GameIds.MajorasMask, style: EdgeStyle.Thick },
  { source: GameIds.MajorasMask, target: Events.TheDemonThiefGanondorfIsExecuted },
  { source: Events.TheDemonThiefGanondorfIsExecuted, target: GameIds.TwilightPrincess },
  {
    source: GameIds.TwilightPrincess,
    target: GameIds.FourSwordsAdventures,
    extraDistance: 1 // For some reason applying SomeTimePasses here creates a very large gap
  },
  // The Hero is Defeated
  {
    source: GameIds.OcarinaOfTime,
    target: Events.TheHeroIsDefeated
  },
  {
    source: Events.TheHeroIsDefeated,
    target: Events.TheImprisoningWar
  },
  { source: Events.TheImprisoningWar, target: GameIds.ALinkToThePast },
  { source: GameIds.ALinkToThePast, target: GameIds.LinksAwakening },
  { source: GameIds.LinksAwakening, target: GameIds.OracleOfSeasons },
  {
    source: GameIds.OracleOfSeasons,
    target: GameIds.OracleOfAges,
    style: EdgeStyle.Thick
  },
  { source: GameIds.OracleOfAges, target: Events.TheTriforceSplits },
  { source: Events.TheTriforceSplits, target: GameIds.ALinkBetweenWorlds },
  {
    source: GameIds.ALinkBetweenWorlds,
    target: GameIds.TriforceHeroes,
    style: EdgeStyle.Thick
  },
  { source: GameIds.TriforceHeroes, target: GameIds.EchoesOfWisdom },
  { source: GameIds.EchoesOfWisdom, target: Events.TheMonarchsOfHyruleUseTheTriforce },
  { source: Events.TheMonarchsOfHyruleUseTheTriforce, target: Events.TheTragedyOfPrincessZeldaI },
  {
    source: Events.TheTragedyOfPrincessZeldaI,
    target: GameIds.TheLegendOfZelda
  },
  {
    source: GameIds.TheLegendOfZelda,
    target: GameIds.TheAdventureOfLink,
    subgraphsToEnd: [Eras.EraOfMyth],
    style: EdgeStyle.Thick
  },
  {
    source: Events.TheAncientCalamity,
    target: Events.TheGreatCalamity,
    style: EdgeStyle.Dotted,
    extraDistance: EdgeDistance.ALongTimePasses,
    subgraphToStart: Eras.EraOfTheWilds
  },
  {
    source: Events.TheGreatCalamity,
    target: GameIds.BreathOfTheWild,
    style: EdgeStyle.Thick
  },
  {
    source: GameIds.BreathOfTheWild,
    target: GameIds.TearsOfTheKingdom,
    subgraphsToEnd: [Eras.EraOfTheWilds],
    style: EdgeStyle.Thick
  },
  // Subgraph edge
  {
    source: Eras.EraOfMyth,
    target: Eras.EraOfTheWilds,
    style: EdgeStyle.Dotted,
    extraDistance: EdgeDistance.ALongTimePasses
  }
]

export default { flowchart, metadata }
