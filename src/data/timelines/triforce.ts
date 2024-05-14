import { GameIds, Events, Eras } from '../events'
import { LinkDesigns } from '../link-designs'

export const triforce = [
  { source: Events.TheCreationOfTheLandAndSky, target: GameIds.SkywardSword },
  { source: GameIds.SkywardSword, target: Events.TheSacredRealmIsSealed },
  { source: Events.TheSacredRealmIsSealed, target: Events.HyruleanCivilWar },
  { source: Events.HyruleanCivilWar, target: GameIds.OcarinaOfTime },
  { source: GameIds.OcarinaOfTime, target: GameIds.MajorasMask },
  { source: GameIds.MajorasMask, target: GameIds.HyruleWarriors },
  { source: GameIds.HyruleWarriors, target: GameIds.TwilightPrincess },
  { source: GameIds.TwilightPrincess, target: GameIds.LinksCrossbowTraining },
  { source: GameIds.LinksCrossbowTraining, target: GameIds.ALinkToThePast },
  { source: GameIds.ALinkToThePast, target: Events.Convergence },
  { source: GameIds.OcarinaOfTime, target: Events.Divergence },
  { source: Events.Divergence, target: GameIds.TheWindWaker },
  { source: GameIds.TheWindWaker, target: GameIds.NaviTrackers },
  { source: GameIds.NaviTrackers, target: GameIds.PhantomHourglass },
  { source: GameIds.PhantomHourglass, target: GameIds.SpiritTracks },
  { source: GameIds.SpiritTracks, target: GameIds.TheMinishCap },
  { source: GameIds.TheMinishCap, target: GameIds.FourSwords },
  { source: GameIds.FourSwords, target: GameIds.FourSwordsAdventures },
  { source: GameIds.FourSwordsAdventures, target: Events.Convergence },
  { source: Events.Convergence, target: GameIds.AncientStoneTablets },
  { source: GameIds.AncientStoneTablets, target: GameIds.ALinkBetweenWorlds },
  { source: GameIds.ALinkBetweenWorlds, target: GameIds.TriforceHeroes },
  { source: GameIds.TriforceHeroes, target: GameIds.OracleOfAges },
  { source: GameIds.OracleOfAges, target: GameIds.OracleOfSeasons },
  { source: GameIds.OracleOfSeasons, target: GameIds.LinksAwakening },
  { source: GameIds.LinksAwakening, target: GameIds.TheLegendOfZelda },
  { source: GameIds.TheLegendOfZelda, target: GameIds.TheAdventureOfLink },
  { source: GameIds.TheAdventureOfLink, target: GameIds.CDiGamesAndCartoon },
  { source: GameIds.CDiGamesAndCartoon, target: GameIds.BreathOfTheWild },
  { source: GameIds.BreathOfTheWild, target: GameIds.AgeOfCalamity },
  { source: GameIds.BreathOfTheWild, target: GameIds.TearsOfTheKingdom }
]
