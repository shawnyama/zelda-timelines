import { GameIds } from '../events'
import type { Edge, Metadata } from '../timelines'

// This is not an actual timeline these are the games ordered by release date
// This is just for testing purposes so I can view every single game easily

const metadata: Metadata = {
  timelineTitle: 'Debug',
  timelineCreator: 'Debug Timeline',
  submittedBy: 'System',
  submittedOn: '2025-12-14',
  lastUpdatedOn: '2025-12-14',
  sources: [],
  notes: null
}

const flowchart: Edge[] = [
  { source: GameIds.TheLegendOfZelda, target: GameIds.TheAdventureOfLink },
  { source: GameIds.TheAdventureOfLink, target: GameIds.TheLegendOfZeldaCartoon },
  { source: GameIds.TheLegendOfZeldaCartoon, target: GameIds.ZeldaGameAndWatch },
  { source: GameIds.ZeldaGameAndWatch, target: GameIds.TheLegendOfZeldaGameWatch },
  { source: GameIds.TheLegendOfZeldaGameWatch, target: GameIds.ALinkToThePast },
  { source: GameIds.ALinkToThePast, target: GameIds.LinksAwakening },
  { source: GameIds.LinksAwakening, target: GameIds.LinkTheFacesOfEvil },
  { source: GameIds.LinkTheFacesOfEvil, target: GameIds.ZeldaTheWandOfGamelon },
  { source: GameIds.ZeldaTheWandOfGamelon, target: GameIds.ZeldasAdventure },
  //   { source: GameIds.ZeldasAdventure, target: GameIds.AncientStoneTablets },
  { source: GameIds.AncientStoneTablets, target: GameIds.OcarinaOfTime },
  { source: GameIds.OcarinaOfTime, target: GameIds.MajorasMask },
  { source: GameIds.MajorasMask, target: GameIds.OracleOfSeasons },
  { source: GameIds.OracleOfSeasons, target: GameIds.OracleOfAges },
  { source: GameIds.OracleOfAges, target: GameIds.FourSwords },
  { source: GameIds.FourSwords, target: GameIds.TheWindWaker },
  { source: GameIds.TheWindWaker, target: GameIds.FourSwordsAdventures },
  { source: GameIds.FourSwordsAdventures, target: GameIds.TheMinishCap },
  { source: GameIds.TheMinishCap, target: GameIds.NaviTrackers },
  //   { source: GameIds.NaviTrackers, target: GameIds.TwilightPrincess },
  { source: GameIds.TwilightPrincess, target: GameIds.FreshlyPickedTinglesRosyRupeeland },
  { source: GameIds.FreshlyPickedTinglesRosyRupeeland, target: GameIds.PhantomHourglass },
  { source: GameIds.PhantomHourglass, target: GameIds.LinksCrossbowTraining },
  { source: GameIds.LinksCrossbowTraining, target: GameIds.TinglesBalloonFightDS },
  { source: GameIds.TinglesBalloonFightDS, target: GameIds.SpiritTracks },
  { source: GameIds.SpiritTracks, target: GameIds.RipenedTinglesBalloonTripofLove },
  { source: GameIds.RipenedTinglesBalloonTripofLove, target: GameIds.TooMuchTinglePack },
  { source: GameIds.TooMuchTinglePack, target: GameIds.SkywardSword },
  { source: GameIds.SkywardSword, target: GameIds.HyruleWarriors },
  //   { source: GameIds.HyruleWarriors, target: GameIds.TriforceHeroes },
  {
    source: GameIds.TriforceHeroes,
    target: GameIds.MyNintendoPicrossTheLegendOfZeldaTwilightPrincess
  },
  {
    source: GameIds.MyNintendoPicrossTheLegendOfZeldaTwilightPrincess,
    target: GameIds.BreathOfTheWild
  },
  { source: GameIds.BreathOfTheWild, target: GameIds.CadenceOfHyrule },
  { source: GameIds.CadenceOfHyrule, target: GameIds.AgeOfCalamity },
  { source: GameIds.AgeOfCalamity, target: GameIds.TearsOfTheKingdom },
  { source: GameIds.TearsOfTheKingdom, target: GameIds.EchoesOfWisdom },
  { source: GameIds.EchoesOfWisdom, target: GameIds.AgeofImprisonment }
]

export default { flowchart, metadata }
