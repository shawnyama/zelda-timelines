import { GameIds, Events } from '../events'
import { EdgeStyle, EdgeDistance } from '../edge-decor'

export const geekery = [
  { source: Events.TheCreationOfTheLandAndSky, target: GameIds.SkywardSword },
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
  {
    source: GameIds.OcarinaOfTime,
    target: Events.AdultTimeline
  },
  { source: Events.AdultTimeline, target: Events.HyruleIsSealedAndThenFlooded },
  { source: Events.HyruleIsSealedAndThenFlooded, target: GameIds.TheWindWaker },
  {
    source: GameIds.TheWindWaker,
    target: GameIds.PhantomHourglass,
    style: EdgeStyle.Thick
  },
  { source: GameIds.PhantomHourglass, target: Events.NewContinentDiscovered },
  { source: Events.NewContinentDiscovered, target: Events.ANewHyruleKingdomIsFounded },
  { source: Events.ANewHyruleKingdomIsFounded, target: Events.TheMonarchsOfHyruleUseTheTriforce },
  { source: Events.TheMonarchsOfHyruleUseTheTriforce, target: Events.TheTragedyOfPrincessZeldaI },
  { source: Events.TheTragedyOfPrincessZeldaI, target: GameIds.SpiritTracks },
  { source: GameIds.SpiritTracks, target: Events.OldHyruleIsDiscovered },
  { source: Events.OldHyruleIsDiscovered, target: GameIds.TheLegendOfZelda },
  { source: GameIds.TheLegendOfZelda, target: GameIds.TheAdventureOfLink, style: EdgeStyle.Thick },
  {
    source: GameIds.OcarinaOfTime,
    target: Events.ChildTimeline,
    style: EdgeStyle.Thick
  },
  { source: Events.ChildTimeline, target: GameIds.MajorasMask, style: EdgeStyle.Thick },
  { source: GameIds.MajorasMask, target: Events.TheDemonThiefGanondorfIsExecuted },
  { source: Events.TheDemonThiefGanondorfIsExecuted, target: GameIds.TwilightPrincess },
  {
    source: GameIds.TwilightPrincess,
    target: GameIds.FourSwordsAdventures,
    extraDistance: 1
  },
  {
    source: GameIds.OcarinaOfTime,
    target: Events.TheHeroIsAbsent
  },
  {
    source: Events.TheHeroIsAbsent,
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
  }
]
