import { GameIds, Events } from '../events'
import { EdgeStyle, EdgeDistance } from '../edge-decor'

export const lorulean = [
  { source: Events.TheCreationOfTheLandAndSky, target: GameIds.SkywardSword },
  { source: GameIds.SkywardSword, target: Events.TheSacredRealmIsSealed },
  { source: Events.TheSacredRealmIsSealed, target: Events.TheEstablishmentOfHyruleKingdom },
  { source: Events.TheEstablishmentOfHyruleKingdom, target: Events.WarOfTheBoundChest },
  { source: Events.WarOfTheBoundChest, target: GameIds.TheMinishCap },
  { source: GameIds.TheMinishCap, target: Events.VattiIsSealed },
  { source: Events.VattiIsSealed, target: GameIds.FourSwords },
  { source: GameIds.TheMinishCap, target: Events.VattiIsDestroyed },
  { source: Events.VattiIsDestroyed, target: Events.HyruleanCivilWar },
  { source: Events.HyruleanCivilWar, target: GameIds.OcarinaOfTime, style: EdgeStyle.Thick },
  { source: GameIds.FourSwords, target: GameIds.FourSwordsAdventures },
  { source: GameIds.FourSwordsAdventures, target: Events.TheImprisoningWar },
  { source: Events.TheImprisoningWar, target: GameIds.ALinkToThePast },
  { source: GameIds.OcarinaOfTime, target: Events.ChildTimeline, style: EdgeStyle.Thick },
  { source: Events.ChildTimeline, target: GameIds.MajorasMask, style: EdgeStyle.Thick },
  { source: GameIds.MajorasMask, target: Events.TheDemonThiefGanondorfIsExecuted },
  { source: Events.TheDemonThiefGanondorfIsExecuted, target: GameIds.TwilightPrincess },
  {
    source: GameIds.TwilightPrincess,
    target: Events.TheFirstGreatCalamity,
    distance: 3,
    style: EdgeStyle.Dotted
  },
  {
    source: Events.TheFirstGreatCalamity,
    target: Events.TheSecondGreatCalamity,
    style: EdgeStyle.Dotted,
    distance: 3
  },
  {
    source: Events.TheSecondGreatCalamity,
    target: GameIds.BreathOfTheWild,
    style: EdgeStyle.Thick
  },
  {
    source: GameIds.BreathOfTheWild,
    target: GameIds.TearsOfTheKingdom,
    style: EdgeStyle.Thick
  },
  { source: GameIds.ALinkToThePast, target: GameIds.OracleOfAges, style: EdgeStyle.Thick },
  { source: GameIds.OracleOfAges, target: GameIds.OracleOfSeasons, style: EdgeStyle.Thick },
  { source: GameIds.OracleOfSeasons, target: GameIds.LinksAwakening, style: EdgeStyle.Thick },
  { source: GameIds.LinksAwakening, target: GameIds.ALinkBetweenWorlds, distance: 1 },
  { source: GameIds.ALinkBetweenWorlds, target: GameIds.TriforceHeroes, style: EdgeStyle.Thick },
  { source: GameIds.TriforceHeroes, target: Events.TheTragedyOfPrincessZeldaI },
  { source: Events.TheTragedyOfPrincessZeldaI, target: GameIds.TheLegendOfZelda },
  { source: GameIds.TheLegendOfZelda, target: GameIds.TheAdventureOfLink, style: EdgeStyle.Thick },
  { source: GameIds.OcarinaOfTime, target: Events.AdultTimeline },
  { source: Events.AdultTimeline, target: Events.HyruleIsSealedAndThenFlooded },
  { source: Events.HyruleIsSealedAndThenFlooded, target: GameIds.TheWindWaker },

  { source: GameIds.TheWindWaker, target: GameIds.PhantomHourglass, style: EdgeStyle.Thick },
  { source: GameIds.PhantomHourglass, target: Events.NewContinentDiscovered },
  { source: Events.NewContinentDiscovered, target: Events.ANewHyruleKingdomIsFounded },
  { source: Events.ANewHyruleKingdomIsFounded, target: GameIds.SpiritTracks }
]
