import { GameIds, Events, Eras } from '../events'
import { EdgeStyle, EdgeDistance } from '../edge-decor'
import type { Edge, Metadata } from '../timelines'

const metadata: Metadata = {
  timelineTitle: 'Sabrblade',
  timelineCreator: 'Sabrblade a.k.a. Miles Tinker',
  submittedBy: 'Miles Tinker',
  submittedOn: '2025-12-18',
  lastUpdatedOn: '2025-12-18',
  sources: []
}

const flowchart: Edge[] = [
  {
    source: Events.TheCreationOfTheLandAndSky,
    target: Events.TheAncientBattleAndTheReincanationOfTheGodessHylia,
    extraDistance: 3
  },
  {
    source: Events.TheAncientBattleAndTheReincanationOfTheGodessHylia,
    target: GameIds.SkywardSword,
    extraDistance: 3
  },
  { source: GameIds.SkywardSword, target: Events.AReturnToTheSurface, style: EdgeStyle.Thick },
  {
    source: Events.AReturnToTheSurface,
    target: Events.TheEstablishmentOfHyruleKingdom,
    extraDistance: 6
  },
  { source: Events.TheEstablishmentOfHyruleKingdom, target: GameIds.AgeofImprisonment },
  { source: GameIds.AgeofImprisonment, target: Events.WarOfTheBoundChest, extraDistance: 6 },
  { source: Events.WarOfTheBoundChest, target: GameIds.TheMinishCap, extraDistance: 6 },
  { source: GameIds.TheMinishCap, target: Events.TheSacredRealmIsSealed, extraDistance: 3 },
  {
    source: Events.TheSacredRealmIsSealed,
    target: Events.TheResurrectionOfVaati,
    extraDistance: 3
  },
  { source: Events.TheResurrectionOfVaati, target: GameIds.FourSwords, extraDistance: 6 },
  { source: GameIds.FourSwords, target: GameIds.FourSwordsAdventures, style: EdgeStyle.Thick },
  { source: GameIds.FourSwordsAdventures, target: Events.HyruleanCivilWar, extraDistance: 6 },
  { source: Events.HyruleanCivilWar, target: GameIds.OcarinaOfTime, style: EdgeStyle.Thick },
  //Adult (Splinter) timeline
  {
    source: GameIds.OcarinaOfTime,
    target: Events.AdultTimeline,
    style: EdgeStyle.Thick,
    extraDistance: 2
  },
  { source: Events.AdultTimeline, target: Events.HyruleIsSealedAndThenFlooded, extraDistance: 2 },
  {
    source: Events.HyruleIsSealedAndThenFlooded,
    target: GameIds.TheWindWaker,
    style: EdgeStyle.Dotted,
    extraDistance: 9
  },
  { source: GameIds.TheWindWaker, target: GameIds.NaviTrackers, style: EdgeStyle.Thick },
  { source: GameIds.NaviTrackers, target: GameIds.PhantomHourglass, style: EdgeStyle.Thick },
  {
    source: GameIds.PhantomHourglass,
    target: Events.NewContinentDiscovered,
    style: EdgeStyle.Thick
  },
  {
    source: Events.NewContinentDiscovered,
    target: Events.ANewHyruleKingdomIsFounded,
    style: EdgeStyle.Thick,
    extraDistance: 1
  },
  { source: Events.ANewHyruleKingdomIsFounded, target: GameIds.SpiritTracks, extraDistance: 3 },
  { source: GameIds.SpiritTracks, target: GameIds.TriforceHeroes },
  //Child (Main) timeline
  { source: GameIds.OcarinaOfTime, target: Events.ChildTimeline, style: EdgeStyle.Thick },
  { source: Events.ChildTimeline, target: GameIds.MajorasMask, style: EdgeStyle.Thick },
  {
    source: GameIds.MajorasMask,
    target: Events.TheDemonThiefGanondorfIsExecuted,
    style: EdgeStyle.Thick
  },
  {
    source: Events.TheDemonThiefGanondorfIsExecuted,
    target: GameIds.TwilightPrincess,
    extraDistance: 6
  },
  {
    source: GameIds.TwilightPrincess,
    target: Events.GanondorfIsResurrected,
    style: EdgeStyle.Dotted,
    extraDistance: 2
  },
  { source: Events.GanondorfIsResurrected, target: Events.TheImprisoningWar },
  { source: Events.TheImprisoningWar, target: GameIds.ALinkToThePast, extraDistance: 1 },
  { source: GameIds.ALinkToThePast, target: GameIds.OracleOfAges, style: EdgeStyle.Thick },
  { source: GameIds.OracleOfAges, target: GameIds.OracleOfSeasons, style: EdgeStyle.Thick },
  {
    source: GameIds.OracleOfSeasons,
    target: GameIds.AncientStoneTablets,
    style: EdgeStyle.Thick,
    extraDistance: 2
  },
  { source: GameIds.AncientStoneTablets, target: GameIds.LinksAwakening, style: EdgeStyle.Thick },
  { source: GameIds.LinksAwakening, target: GameIds.ALinkBetweenWorlds, extraDistance: 3 },
  {
    source: GameIds.ALinkBetweenWorlds,
    target: Events.TheResurrectionOfGanon,
    style: EdgeStyle.Dotted,
    extraDistance: 9
  },
  { source: Events.TheResurrectionOfGanon, target: GameIds.EchoesOfWisdom },
  {
    source: GameIds.EchoesOfWisdom,
    target: Events.TheMonarchsOfHyruleUseTheTriforce,
    style: EdgeStyle.Dotted,
    extraDistance: 6
  },
  { source: Events.TheMonarchsOfHyruleUseTheTriforce, target: Events.TheTragedyOfPrincessZeldaI },
  { source: Events.TheTragedyOfPrincessZeldaI, target: GameIds.TheLegendOfZelda, extraDistance: 6 },
  { source: GameIds.TheLegendOfZelda, target: GameIds.TheAdventureOfLink, style: EdgeStyle.Thick },
  {
    source: GameIds.TheAdventureOfLink,
    target: GameIds.HyruleWarriors,
    style: EdgeStyle.Dotted,
    extraDistance: 6
  },
  {
    source: GameIds.HyruleWarriors,
    target: Events.TheAncientCalamity,
    style: EdgeStyle.Dotted,
    extraDistance: 9
  },
  {
    source: Events.TheAncientCalamity,
    target: Events.TheGreatCalamity,
    style: EdgeStyle.Dotted,
    extraDistance: 9
  },
  { source: Events.TheGreatCalamity, target: Events.TerrakoGoesBackInTime, style: EdgeStyle.Thick },
  {
    source: Events.TerrakoGoesBackInTime,
    target: GameIds.BreathOfTheWild,
    style: EdgeStyle.Thick,
    extraDistance: 6
  },
  { source: GameIds.BreathOfTheWild, target: GameIds.TearsOfTheKingdom, style: EdgeStyle.Thick },
  //Age of Calamity
  { source: GameIds.AgeOfCalamity, target: Events.TerrakoGoesBackInTime, style: EdgeStyle.Thick }
]

export default { flowchart, metadata }
