import { GameIds, Events, Eras } from '../events'
import { EdgeStyle, EdgeDistance } from '../edge-decor'

export const official = [
  {
    source: Events.TheCreationOfTheLandAndSky,
    target: GameIds.SkywardSword,
    subgraphStart: Eras.EraOfMyth
  },
  { source: GameIds.SkywardSword, target: Events.TheSacredRealmIsSealed },
  { source: Events.TheSacredRealmIsSealed, target: Events.TheEstablishmentOfHyruleKingdom },
  { source: Events.TheEstablishmentOfHyruleKingdom, target: GameIds.TheMinishCap },
  {
    source: GameIds.TheMinishCap,
    target: GameIds.FourSwords,
    distance: EdgeDistance.SomeTimePasses
  },
  { source: GameIds.FourSwords, target: Events.HyruleanCivilWar },
  {
    source: Events.HyruleanCivilWar,
    target: GameIds.OcarinaOfTime,
    style: EdgeStyle.Thick
  },
  {
    source: GameIds.OcarinaOfTime,
    target: Events.TheHeroIsTriumphant,
    style: EdgeStyle.Thick
  },
  {
    source: Events.TheHeroIsTriumphant,
    target: Events.ChildTimeline,
    style: EdgeStyle.Thick,
    subgraphStart: Events.TheHeroIsTriumphant
  },
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
  { source: Events.ChildTimeline, target: GameIds.MajorasMask, style: EdgeStyle.Thick },
  { source: GameIds.MajorasMask, target: Events.TheDemonThiefGanondorfIsExecuted },
  { source: Events.TheDemonThiefGanondorfIsExecuted, target: GameIds.TwilightPrincess },
  {
    source: GameIds.TwilightPrincess,
    target: GameIds.FourSwordsAdventures,
    distance: 1, // For some reason applying SomeTimePasses here creates a very large gap
    subgraphEnd: 1
  },
  {
    source: GameIds.OcarinaOfTime,
    target: Events.TheHeroIsDefeated
  },
  {
    source: Events.TheHeroIsDefeated,
    target: Events.TheImprisoningWar,
    subgraphStart: Events.Downfall
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
  { source: GameIds.TriforceHeroes, target: Events.TheMonarchsOfHyruleUseTheTriforce },
  { source: Events.TheMonarchsOfHyruleUseTheTriforce, target: Events.TheTragedyOfPrincessZeldaI },
  {
    source: Events.TheTragedyOfPrincessZeldaI,
    target: GameIds.TheLegendOfZelda
  },
  {
    source: GameIds.TheLegendOfZelda,
    target: GameIds.TheAdventureOfLink,
    subgraphEnd: 2,
    style: EdgeStyle.Thick
  },
  {
    source: Events.TheFirstGreatCalamity,
    target: Events.TheSecondGreatCalamity,
    style: EdgeStyle.Dotted,
    distance: EdgeDistance.ALongTimePasses,
    subgraphStart: Eras.EraOfTheWilds
  },
  {
    source: Events.TheSecondGreatCalamity,
    target: GameIds.BreathOfTheWild,
    style: EdgeStyle.Thick
  },
  {
    source: GameIds.BreathOfTheWild,
    target: GameIds.TearsOfTheKingdom,
    subgraphEnd: 1,
    style: EdgeStyle.Thick
  },
  {
    source: Eras.EraOfMyth,
    target: Eras.EraOfTheWilds,
    style: EdgeStyle.Dotted,
    distance: EdgeDistance.ALongTimePasses
  }
]
