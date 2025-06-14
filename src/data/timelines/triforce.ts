import { GameIds, Events } from '../events'
import { EdgeStyle, EdgeDistance } from '../edge-decor'

export const triforce = [
  { source: Events.TheCreationOfTheLandAndSky, target: GameIds.SkywardSword },
  { source: GameIds.SkywardSword, target: Events.TheSacredRealmIsSealed },
  { source: Events.TheSacredRealmIsSealed, target: Events.TheEstablishmentOfHyruleKingdom },
  { source: Events.TheEstablishmentOfHyruleKingdom, target: Events.HyruleanCivilWar },
  { source: Events.HyruleanCivilWar, target: GameIds.OcarinaOfTime, style: EdgeStyle.Thick },
  { source: GameIds.OcarinaOfTime, target: Events.Divergence, style: EdgeStyle.Thick },
  { source: Events.Divergence, target: GameIds.MajorasMask, style: EdgeStyle.Thick },
  {
    source: GameIds.MajorasMask,
    target: Events.TheDemonThiefGanondorfIsExecuted,
    style: EdgeStyle.Thick
  },
  {
    source: Events.TheDemonThiefGanondorfIsExecuted,
    target: GameIds.HyruleWarriors,
    style: EdgeStyle.Thick
  },
  {
    source: GameIds.HyruleWarriors,
    target: GameIds.TwilightPrincess,
    distance: 1
  },
  {
    source: GameIds.TwilightPrincess,
    target: GameIds.LinksCrossbowTraining,
    style: EdgeStyle.Thick
  },
  {
    source: GameIds.LinksCrossbowTraining,
    target: Events.TheImprisoningWar,
    distance: 1
  },
  { source: Events.TheImprisoningWar, target: GameIds.ALinkToThePast },
  { source: GameIds.ALinkToThePast, target: Events.Convergence, style: EdgeStyle.Thick },
  { source: Events.Divergence, target: Events.HyruleIsSealedAndThenFlooded },
  { source: Events.HyruleIsSealedAndThenFlooded, target: GameIds.TheWindWaker },
  { source: GameIds.TheWindWaker, target: GameIds.NaviTrackers, style: EdgeStyle.Thick },
  { source: GameIds.NaviTrackers, target: GameIds.PhantomHourglass, style: EdgeStyle.Thick },
  // Skip the new continent discovered event so the graph appears more compact
  { source: GameIds.PhantomHourglass, target: Events.ANewHyruleKingdomIsFounded },
  { source: Events.ANewHyruleKingdomIsFounded, target: GameIds.SpiritTracks },
  { source: GameIds.SpiritTracks, target: GameIds.TheMinishCap },
  { source: GameIds.TheMinishCap, target: GameIds.FourSwords },
  { source: GameIds.FourSwords, target: GameIds.FourSwordsAdventures },
  { source: GameIds.FourSwordsAdventures, target: Events.Convergence },
  { source: Events.Convergence, target: GameIds.AncientStoneTablets },
  { source: GameIds.AncientStoneTablets, target: GameIds.ALinkBetweenWorlds },
  { source: GameIds.ALinkBetweenWorlds, target: GameIds.TriforceHeroes, style: EdgeStyle.Thick },
  { source: GameIds.TriforceHeroes, target: GameIds.CadenceOfHyrule },
  { source: GameIds.CadenceOfHyrule, target: GameIds.OracleOfSeasons },
  { source: GameIds.OracleOfSeasons, target: GameIds.OracleOfAges, style: EdgeStyle.Thick },
  { source: GameIds.OracleOfAges, target: GameIds.LinksAwakening, style: EdgeStyle.Thick },
  { source: GameIds.LinksAwakening, target: GameIds.TheLegendOfZelda, style: EdgeStyle.Thick },
  { source: GameIds.TheLegendOfZelda, target: GameIds.TheAdventureOfLink, style: EdgeStyle.Thick },
  {
    source: GameIds.TheAdventureOfLink,
    target: GameIds.CDiGamesAndCartoon,
    distance: EdgeDistance.SomeTimePasses
  },
  {
    source: GameIds.CDiGamesAndCartoon,
    target: Events.TheFirstGreatCalamity,
    style: EdgeStyle.Dotted,
    distance: EdgeDistance.ALongTimePasses
  },
  {
    source: Events.TheFirstGreatCalamity,
    target: Events.TheSecondGreatCalamity,
    style: EdgeStyle.Dotted,
    distance: EdgeDistance.ALongTimePasses
  },
  {
    source: Events.TheSecondGreatCalamity,
    target: Events.TerrakoGoesBackInTime,
    style: EdgeStyle.Thick
  },
  { source: Events.TerrakoGoesBackInTime, target: GameIds.BreathOfTheWild, style: EdgeStyle.Thick },
  { source: GameIds.BreathOfTheWild, target: GameIds.TearsOfTheKingdom, style: EdgeStyle.Thick },
  { source: GameIds.AgeOfCalamity, target: Events.TerrakoGoesBackInTime }
]
