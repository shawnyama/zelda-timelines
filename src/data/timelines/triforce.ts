import { GameIds } from '../events'

export const triforce = [
  { source: GameIds.SkywardSword, target: GameIds.OcarinaOfTime, distance: 8 },
  { source: GameIds.OcarinaOfTime, target: GameIds.MajorasMask },
  { source: GameIds.MajorasMask, target: GameIds.HyruleWarriors },
  { source: GameIds.HyruleWarriors, target: GameIds.TwilightPrincess },
  { source: GameIds.TwilightPrincess, target: GameIds.LinksCrossbowTraining },
  { source: GameIds.LinksCrossbowTraining, target: GameIds.ALinkToThePast, distance: 5 },
  { source: GameIds.OcarinaOfTime, target: GameIds.TheWindWaker },
  { source: GameIds.TheWindWaker, target: GameIds.NaviTrackers },
  { source: GameIds.NaviTrackers, target: GameIds.PhantomHourglass },
  { source: GameIds.PhantomHourglass, target: GameIds.SpiritTracks },
  { source: GameIds.SpiritTracks, target: GameIds.TheMinishCap },
  { source: GameIds.TheMinishCap, target: GameIds.FourSwords },
  { source: GameIds.FourSwords, target: GameIds.FourSwordsAdventures },
  { source: GameIds.FourSwordsAdventures, target: GameIds.ALinkToThePast },
  { source: GameIds.ALinkToThePast, target: GameIds.AncientStoneTablets },
  { source: GameIds.AncientStoneTablets, target: GameIds.ALinkBetweenWorlds },
  { source: GameIds.ALinkBetweenWorlds, target: GameIds.TriforceHeroes },
  { source: GameIds.TriforceHeroes, target: GameIds.OracleOfAges },
  { source: GameIds.OracleOfAges, target: GameIds.OracleOfSeasons },
  { source: GameIds.OracleOfSeasons, target: GameIds.LinksAwakening },
  { source: GameIds.LinksAwakening, target: GameIds.TheLegendOfZelda },
  { source: GameIds.TheLegendOfZelda, target: GameIds.TheAdventureOfLink },
  { source: GameIds.TheAdventureOfLink, target: GameIds.CDiGameIdsAndCartoon },
  { source: GameIds.CDiGameIdsAndCartoon, target: GameIds.BreathOfTheWild, distance: 30 },
  { source: GameIds.BreathOfTheWild, target: GameIds.AgeOfCalamity },
  { source: GameIds.BreathOfTheWild, target: GameIds.TearsOfTheKingdom }
]