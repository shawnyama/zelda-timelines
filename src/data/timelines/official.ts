import { GameIds, Events, Eras } from '../events'
import { LinkDesigns } from '../link-designs'

export const official = [
  {
    source: Events.TheCreationOfTheLandAndSky,
    target: GameIds.SkywardSword,
    subgraphStart: Eras.EraOfMyth
  },
  { source: GameIds.SkywardSword, target: Events.TheSacredRealmIsSealed },
  { source: Events.TheSacredRealmIsSealed, target: Events.TheEstablishmentOfHyruleKingdom },
  { source: Events.TheEstablishmentOfHyruleKingdom, target: GameIds.TheMinishCap },
  { source: GameIds.TheMinishCap, target: GameIds.FourSwords },
  { source: GameIds.FourSwords, target: Events.HyruleanCivilWar },
  { source: Events.HyruleanCivilWar, target: GameIds.OcarinaOfTime },
  {
    source: GameIds.OcarinaOfTime,
    target: Events.TheHeroIsTriumphant
  },
  {
    source: Events.TheHeroIsTriumphant,
    target: Events.ChildTimeline,
    subgraphStart: Events.TheHeroIsTriumphant
  },
  { source: Events.TheHeroIsTriumphant, target: Events.AdultTimeline },
  { source: Events.AdultTimeline, target: GameIds.TheWindWaker },
  { source: GameIds.TheWindWaker, target: GameIds.PhantomHourglass },
  { source: GameIds.PhantomHourglass, target: Events.NewContinentDiscovered },
  { source: Events.NewContinentDiscovered, target: Events.ANewHyruleKingdomIsFounded },
  { source: Events.ANewHyruleKingdomIsFounded, target: GameIds.SpiritTracks },
  { source: Events.ChildTimeline, target: GameIds.MajorasMask },
  { source: GameIds.MajorasMask, target: Events.TheDemonThiefGanondorfIsExecuted },
  { source: Events.TheDemonThiefGanondorfIsExecuted, target: GameIds.TwilightPrincess },
  { source: GameIds.TwilightPrincess, target: GameIds.FourSwordsAdventures, subgraphEnd: 1 },
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
  { source: GameIds.LinksAwakening, target: GameIds.OracleOfAges },
  { source: GameIds.OracleOfAges, target: GameIds.OracleOfSeasons },
  { source: GameIds.OracleOfSeasons, target: Events.TheTriforceSplits },
  { source: Events.TheTriforceSplits, target: GameIds.ALinkBetweenWorlds },
  { source: GameIds.ALinkBetweenWorlds, target: GameIds.TriforceHeroes },
  { source: GameIds.TriforceHeroes, target: Events.TheMonarchsOfHyruleUseTheTriforce },
  { source: Events.TheMonarchsOfHyruleUseTheTriforce, target: Events.TheTragedyOfPrincessZeldaI },
  {
    source: Events.TheTragedyOfPrincessZeldaI,
    target: GameIds.TheLegendOfZelda
  },
  { source: GameIds.TheLegendOfZelda, target: GameIds.TheAdventureOfLink, subgraphEnd: 2 },
  {
    source: Events.TheFirstGreatCalamity,
    target: Events.TheSecondGreatCalamity,
    linkDesign: LinkDesigns.Dotted,
    distance: 10,
    subgraphStart: Eras.EraOfTheWilds
  },
  { source: Events.TheSecondGreatCalamity, target: GameIds.BreathOfTheWild },
  {
    source: GameIds.BreathOfTheWild,
    target: GameIds.TearsOfTheKingdom,
    subgraphEnd: 1
  },
  {
    source: Eras.EraOfMyth,
    target: Eras.EraOfTheWilds,
    linkDesign: LinkDesigns.Dotted,
    distance: 5
  }
]
