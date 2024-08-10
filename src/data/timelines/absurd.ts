import { GameIds, Events } from '../events'
import { EdgeStyle } from '../edge-decor'

export const absurd = [
  { source: Events.TheCreationOfTheLandAndSky, target: GameIds.SkywardSword },
  { source: GameIds.SkywardSword, target: Events.TheSacredRealmIsSealed },
  { source: Events.TheSacredRealmIsSealed, target: Events.TheEstablishmentOfHyruleKingdom },
  { source: Events.TheEstablishmentOfHyruleKingdom, target: Events.HyruleanCivilWar },
  { source: Events.HyruleanCivilWar, target: GameIds.OcarinaOfTime },
  { source: GameIds.OcarinaOfTime, target: GameIds.MajorasMask, edgeStyle: EdgeStyle.Thick },
  { source: GameIds.MajorasMask, target: Events.TheImprisoningWar },
  { source: Events.TheImprisoningWar, target: GameIds.ALinkToThePast },
  {
    source: GameIds.ALinkToThePast,
    target: GameIds.OracleOfSeasons,
    edgeStyle: EdgeStyle.Thick
  },
  { source: GameIds.OracleOfSeasons, target: GameIds.OracleOfAges, edgeStyle: EdgeStyle.Thick },
  { source: GameIds.OracleOfAges, target: GameIds.LinksAwakening, edgeStyle: EdgeStyle.Thick },
  { source: GameIds.LinksAwakening, target: Events.TheDemonThiefGanondorfIsExecuted },
  { source: Events.TheDemonThiefGanondorfIsExecuted, target: GameIds.TwilightPrincess },
  { source: GameIds.TwilightPrincess, target: GameIds.ALinkBetweenWorlds, distance: 3 },
  {
    source: GameIds.ALinkBetweenWorlds,
    target: GameIds.TriforceHeroes,
    edgeStyle: EdgeStyle.Thick
  },
  { source: GameIds.TriforceHeroes, target: Events.HyruleIsSealedAndThenFlooded },
  { source: Events.HyruleIsSealedAndThenFlooded, target: GameIds.TheWindWaker },
  { source: GameIds.TheWindWaker, target: GameIds.PhantomHourglass, edgeStyle: EdgeStyle.Thick },
  { source: GameIds.PhantomHourglass, target: Events.NewContinentDiscovered },
  { source: Events.NewContinentDiscovered, target: Events.ANewHyruleKingdomIsFounded },
  { source: Events.ANewHyruleKingdomIsFounded, target: GameIds.SpiritTracks },
  {
    source: GameIds.SpiritTracks,
    target: Events.TheFirstGreatCalamity,
    edgeStyle: EdgeStyle.Dotted,
    distance: 3
  },
  {
    source: Events.TheFirstGreatCalamity,
    target: Events.TheSecondGreatCalamity,
    edgeStyle: EdgeStyle.Dotted,
    distance: 6
  },
  {
    source: Events.TheSecondGreatCalamity,
    target: GameIds.BreathOfTheWild,
    edgeStyle: EdgeStyle.Thick
  },
  {
    source: GameIds.BreathOfTheWild,
    target: GameIds.TearsOfTheKingdom,
    edgeStyle: EdgeStyle.Thick
  },
  { source: GameIds.TearsOfTheKingdom, target: GameIds.TheMinishCap, distance: 3 },
  { source: GameIds.TheMinishCap, target: GameIds.FourSwords },
  { source: GameIds.FourSwords, target: GameIds.FourSwordsAdventures },
  {
    source: GameIds.FourSwordsAdventures,
    target: GameIds.TheLegendOfZelda,
    distance: 3
  },
  {
    source: GameIds.TheLegendOfZelda,
    target: GameIds.TheAdventureOfLink,
    edgeStyle: EdgeStyle.Thick
  }
]
