import { GameIds } from '../events'

export const geekery = [
  { source: GameIds.SkywardSword, target: GameIds.TheMinishCap },
  { source: GameIds.TheMinishCap, target: GameIds.FourSwords },
  { source: GameIds.FourSwords, target: GameIds.OcarinaOfTime },
  { source: GameIds.OcarinaOfTime, target: GameIds.MajorasMask },
  { source: GameIds.MajorasMask, target: GameIds.TwilightPrincess },
  { source: GameIds.OcarinaOfTime, target: GameIds.TheWindWaker },
  { source: GameIds.OcarinaOfTime, target: GameIds.ALinkToThePast },
  { source: GameIds.TwilightPrincess, target: GameIds.FourSwordsAdventures },
  { source: GameIds.TheLegendOfZelda, target: GameIds.TheAdventureOfLink },
  { source: GameIds.ALinkToThePast, target: GameIds.LinksAwakening },
  { source: GameIds.LinksAwakening, target: GameIds.OracleOfAges },
  { source: GameIds.OracleOfSeasons, target: GameIds.OracleOfAges },
  { source: GameIds.OracleOfAges, target: GameIds.ALinkBetweenWorlds },
  { source: GameIds.ALinkBetweenWorlds, target: GameIds.TriforceHeroes },
  { source: GameIds.SpiritTracks, target: GameIds.TheLegendOfZelda },
  { source: GameIds.TheWindWaker, target: GameIds.PhantomHourglass },
  { source: GameIds.PhantomHourglass, target: GameIds.SpiritTracks }
]
