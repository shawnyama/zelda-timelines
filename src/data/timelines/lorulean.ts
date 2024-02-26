import { GameIds } from '../events'

export const lorulean = [
  { source: GameIds.SkywardSword, target: GameIds.TheMinishCap },
  { source: GameIds.TheMinishCap, target: GameIds.FourSwords },
  { source: GameIds.FourSwords, target: GameIds.FourSwordsAdventures },
  { source: GameIds.FourSwordsAdventures, target: GameIds.ALinkToThePast },
  { source: GameIds.TheMinishCap, target: GameIds.OcarinaOfTime },
  { source: GameIds.OcarinaOfTime, target: GameIds.MajorasMask },
  { source: GameIds.MajorasMask, target: GameIds.TwilightPrincess },
  { source: GameIds.BreathOfTheWild, target: GameIds.AgeOfCalamity },
  { source: GameIds.BreathOfTheWild, target: GameIds.TearsOfTheKingdom },
  { source: GameIds.OcarinaOfTime, target: GameIds.TheWindWaker },
  { source: GameIds.TwilightPrincess, target: GameIds.BreathOfTheWild },
  { source: GameIds.ALinkToThePast, target: GameIds.OracleOfAges },
  { source: GameIds.OracleOfAges, target: GameIds.OracleOfSeasons },
  { source: GameIds.OracleOfSeasons, target: GameIds.LinksAwakening },
  { source: GameIds.LinksAwakening, target: GameIds.ALinkBetweenWorlds },
  { source: GameIds.ALinkBetweenWorlds, target: GameIds.TriforceHeroes },
  { source: GameIds.TriforceHeroes, target: GameIds.TheLegendOfZelda },
  { source: GameIds.TheLegendOfZelda, target: GameIds.TheAdventureOfLink },
  { source: GameIds.TheWindWaker, target: GameIds.PhantomHourglass },
  { source: GameIds.PhantomHourglass, target: GameIds.SpiritTracks }
]
