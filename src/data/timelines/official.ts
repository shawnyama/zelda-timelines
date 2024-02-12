import { Games } from '../games'
// import { Events } from '../events'
import { LinkDesigns } from '../link-designs'

export const official = [
  //   { source: Events.TheCreationOfTheLandAndSky, target: Games.SkywardSword }, // Need to make compatible Node
  { source: Games.SkywardSword, target: Games.TheMinishCap },
  { source: Games.TheMinishCap, target: Games.FourSwords },
  { source: Games.FourSwords, target: Games.OcarinaOfTime },
  { source: Games.OcarinaOfTime, target: Games.MajorasMask },
  { source: Games.MajorasMask, target: Games.TwilightPrincess },
  { source: Games.OcarinaOfTime, target: Games.TheWindWaker },
  { source: Games.OcarinaOfTime, target: Games.ALinkToThePast },
  { source: Games.TwilightPrincess, target: Games.FourSwordsAdventures },
  {
    source: Games.FourSwordsAdventures,
    target: Games.BreathOfTheWild,
    linkDesign: LinkDesigns.Dotted
  },
  { source: Games.TheLegendOfZelda, target: Games.TheAdventureOfLink },
  { source: Games.ALinkToThePast, target: Games.LinksAwakening },
  { source: Games.LinksAwakening, target: Games.OracleOfAges },
  { source: Games.OracleOfAges, target: Games.OracleOfSeasons },
  { source: Games.OracleOfSeasons, target: Games.ALinkBetweenWorlds },
  { source: Games.ALinkBetweenWorlds, target: Games.TriforceHeroes },
  { source: Games.TriforceHeroes, target: Games.TheLegendOfZelda },
  { source: Games.TheWindWaker, target: Games.PhantomHourglass },
  { source: Games.PhantomHourglass, target: Games.SpiritTracks },
  { source: Games.BreathOfTheWild, target: Games.AgeOfCalamity },
  { source: Games.BreathOfTheWild, target: Games.TearsOfTheKingdom }
]
