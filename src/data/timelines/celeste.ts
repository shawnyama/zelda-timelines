import { GameIds, Events, Eras } from '../events'
import { EdgeStyle, EdgeDistance } from '../edge-decor'
import type { Edge, Metadata } from '../timelines'

const metadata: Metadata = {
  timelineTitle: 'Celeste',
  timelineCreator: 'Celeste',
  submittedBy: 'Celeste',
  submittedOn: '2025-12-18',
  lastUpdatedOn: '2025-12-18',
  sources: [],
  notes: null
}

const flowchart: Edge[] = [
  {
    source: Events.TheCreationOfTheLandAndSky,
    target: Events.DemiseHasBeenSlayedInThePastByLinkWithTheMS,
    subgraphToStart: Eras.EraOfMyth
  },
  {
    source: Events.DemiseHasBeenSlayedInThePastByLinkWithTheMS,
    target: GameIds.TheMinishCap
  },
  {
    source: GameIds.TheMinishCap,
    target: GameIds.FourSwords
  },
  {
    source: GameIds.FourSwords,
    target: GameIds.FourSwordsAdventures
  },
  {
    source: GameIds.FourSwordsAdventures,
    target: Events.VaatiIsDestroyedAndGanonIsSealed,
    extraDistance: 2
  },
  {
    source: Events.VaatiIsDestroyedAndGanonIsSealed,
    target: Events.TheImprisoningWar,
    extraDistance: 2
  },
  {
    source: Events.TheImprisoningWar,
    target: GameIds.ALinkToThePast,
    extraDistance: 2
  },
  {
    source: GameIds.ALinkToThePast,
    target: GameIds.OracleOfSeasons,
    style: EdgeStyle.Thick
  },
  {
    source: GameIds.OracleOfSeasons,
    target: GameIds.OracleOfAges,
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
    extraDistance: 1
  },
  {
    source: GameIds.ALinkToThePast,
    target: Events.MeanwhileOnTheHyruleContinent,
    style: EdgeStyle.Dotted
  },
  {
    source: Events.MeanwhileOnTheHyruleContinent,
    target: GameIds.AncientStoneTablets,
    style: EdgeStyle.Dotted
  },
  {
    source: GameIds.AncientStoneTablets,
    target: GameIds.LinksAwakening,
    style: EdgeStyle.Dotted
  },
  {
    source: GameIds.ALinkBetweenWorlds,
    target: GameIds.TriforceHeroes,
    style: EdgeStyle.Thick
  },
  {
    source: GameIds.TriforceHeroes,
    target: GameIds.EchoesOfWisdom,
    extraDistance: EdgeDistance.SomeTimePasses
  },
  {
    source: GameIds.EchoesOfWisdom,
    target: Events.TheTragedyOfPrincessZeldaI,
    extraDistance: EdgeDistance.SomeTimePasses
  },
  {
    source: Events.TheTragedyOfPrincessZeldaI,
    target: GameIds.TheLegendOfZelda
  },
  {
    source: GameIds.TheLegendOfZelda,
    target: GameIds.TheAdventureOfLink,
    style: EdgeStyle.Thick
  },
  {
    source: Events.TheCreationOfTheLandAndSky,
    target: GameIds.SkywardSword
  },
  {
    source: GameIds.SkywardSword,
    target: Events.DemiseHasBeenErasedInThePresentByAWishToTheTriforce
  },
  {
    source: Events.DemiseHasBeenErasedInThePresentByAWishToTheTriforce,
    target: Events.HyruleanCivilWar,
    extraDistance: 4
  },
  {
    source: Events.HyruleanCivilWar,
    target: GameIds.OcarinaOfTime
  },
  {
    source: GameIds.OcarinaOfTime,
    target: Events.TheHeroComesBackFromTheFutureAndReportsGanondorf,
    style: EdgeStyle.Thick
  },
  {
    source: Events.TheHeroComesBackFromTheFutureAndReportsGanondorf,
    target: GameIds.MajorasMask,
    style: EdgeStyle.Thick
  },
  {
    source: GameIds.MajorasMask,
    target: Events.TheDemonThiefGanondorfIsExecuted
  },
  {
    source: Events.TheDemonThiefGanondorfIsExecuted,
    target: GameIds.TwilightPrincess,
    extraDistance: 1
  },
  {
    source: GameIds.OcarinaOfTime,
    target: Events.TheHeroGoesBackToHisChildhoodAndLeavesTheKingdomWithoutProtection
  },
  {
    source: Events.TheHeroGoesBackToHisChildhoodAndLeavesTheKingdomWithoutProtection,
    target: Events.HyruleIsSealedAndThenFlooded
  },
  {
    source: Events.HyruleIsSealedAndThenFlooded,
    target: GameIds.TheWindWaker,
    extraDistance: 2
  },
  {
    source: GameIds.TheWindWaker,
    target: GameIds.PhantomHourglass,
    style: EdgeStyle.Thick
  },
  {
    source: GameIds.PhantomHourglass,
    target: Events.NewContinentDiscovered
  },
  {
    source: Events.NewContinentDiscovered,
    target: Events.ANewHyruleKingdomIsFounded
  },
  {
    source: Events.ANewHyruleKingdomIsFounded,
    target: GameIds.SpiritTracks,
    subgraphsToEnd: [Eras.EraOfMyth]
  },
  {
    source: Events.AnotherNewHyruleKindgomIsFounded,
    target: GameIds.AgeofImprisonment,
    subgraphToStart: Eras.EraOfTheWilds
  },
  {
    source: GameIds.AgeofImprisonment,
    target: Events.TheAncientCalamity,
    style: EdgeStyle.Dotted,
    extraDistance: EdgeDistance.ALongTimePasses
  },
  {
    source: Events.TheAncientCalamity,
    target: Events.TerrakoGoesBackInTime,
    style: EdgeStyle.Dotted,
    extraDistance: EdgeDistance.ALongTimePasses
  },
  {
    source: Events.TerrakoGoesBackInTime,
    target: GameIds.AgeOfCalamity
  },
  {
    source: Events.TheAncientCalamity,
    target: Events.TheGreatCalamity,
    style: EdgeStyle.Dotted,
    extraDistance: EdgeDistance.ALongTimePasses
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
