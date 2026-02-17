import { GameIds, Events, Eras } from '../events'
import { EdgeStyle, EdgeDistance } from '../edge-decor'
import type { Edge, Metadata } from '../timelines'

const metadata: Metadata = {
  timelineTitle: 'founding split',
  timelineCreator: 'Mana',
  submittedBy: 'Mana',
  submittedOn: '2026-02-14',
  lastUpdatedOn: '2026-02-14',
  sources: [],
  notes: null
}

const flowchart: Edge[] = [
  // Regular Timeline
  { source: Events.TheCreationOfTheLandAndSky, target: GameIds.SkywardSword },
  { source: GameIds.SkywardSword, target: Events.BattleForSacredRealm },
  { source: Events.BattleForSacredRealm, target: Events.BanishmentOfTheTwili },
  { source: Events.BanishmentOfTheTwili, target: Events.TheSacredRealmIsSealed },

  // Oocca Kingdom
  { source: Events.TheSacredRealmIsSealed, target: Events.OoccaEstablishHyrule },
  { source: Events.OoccaEstablishHyrule, target: Events.WarOfTheBoundChest },

  // Bound Chest War Lost
  { source: Events.WarOfTheBoundChest, target: Events.HeroOfMenDefeated },
  { source: Events.HeroOfMenDefeated, target: Events.TheMonarchsOfHyruleUseTheTriforce },
  { source: Events.TheMonarchsOfHyruleUseTheTriforce, target: GameIds.CadenceOfHyrule },
  { source: GameIds.CadenceOfHyrule, target: Events.TheTragedyOfPrincessZeldaI },
  { source: Events.TheTragedyOfPrincessZeldaI, target: GameIds.TheLegendOfZelda },
  { source: GameIds.TheLegendOfZelda, target: GameIds.ZeldaGameAndWatch, style: EdgeStyle.Thick },
  {
    source: GameIds.ZeldaGameAndWatch,
    target: GameIds.TheLegendOfZeldaGameWatch,
    style: EdgeStyle.Thick
  },
  {
    source: GameIds.TheLegendOfZeldaGameWatch,
    target: GameIds.TheAdventureOfLink,
    style: EdgeStyle.Thick
  },
  { source: GameIds.TheAdventureOfLink, target: GameIds.LinkTheFacesOfEvil },
  {
    source: GameIds.LinkTheFacesOfEvil,
    target: GameIds.ZeldaTheWandOfGamelon,
    style: EdgeStyle.Thick
  },

  // Bound Chest War Won
  { source: Events.WarOfTheBoundChest, target: Events.HeroOfMenTriumphant },
  { source: Events.HeroOfMenTriumphant, target: GameIds.TheMinishCap },

  // Vaati Destroyed
  { source: GameIds.TheMinishCap, target: Events.FSVaatiIsDestroyed },
  { source: Events.FSVaatiIsDestroyed, target: Events.HyruleanCivilWar },

  // Hylian Defeat
  { source: Events.HyruleanCivilWar, target: Events.HylianDefeat },
  { source: Events.HylianDefeat, target: Events.TheImprisoningWar },
  { source: Events.TheImprisoningWar, target: GameIds.ALinkToThePast },
  { source: GameIds.ALinkToThePast, target: GameIds.LinksAwakening, style: EdgeStyle.Thick },
  { source: GameIds.ALinkToThePast, target: GameIds.AncientStoneTablets },
  { source: GameIds.LinksAwakening, target: GameIds.OracleOfAges },
  { source: GameIds.OracleOfAges, target: GameIds.OracleOfSeasons, style: EdgeStyle.Thick },
  { source: GameIds.OracleOfSeasons, target: Events.TheTriforceSplits, style: EdgeStyle.Thick },
  { source: Events.TheTriforceSplits, target: GameIds.ALinkBetweenWorlds },
  { source: GameIds.ALinkBetweenWorlds, target: GameIds.TriforceHeroes, style: EdgeStyle.Thick },

  // Hylian Victory
  { source: Events.HyruleanCivilWar, target: Events.HylianVictory, style: EdgeStyle.Thick },
  { source: Events.HylianVictory, target: GameIds.OcarinaOfTime, style: EdgeStyle.Thick },

  // Adult timeline
  { source: GameIds.OcarinaOfTime, target: Events.AdultTimeline },
  { source: Events.AdultTimeline, target: Events.HyruleIsSealedAndThenFlooded },
  { source: Events.HyruleIsSealedAndThenFlooded, target: GameIds.TheWindWaker },
  { source: Events.HyruleIsSealedAndThenFlooded, target: GameIds.TinglesBalloonFightDS },
  { source: GameIds.TheWindWaker, target: GameIds.PhantomHourglass, style: EdgeStyle.Thick },
  { source: GameIds.PhantomHourglass, target: Events.NewContinentDiscovered },
  { source: Events.NewContinentDiscovered, target: Events.ANewHyruleKingdomIsFounded },
  { source: Events.ANewHyruleKingdomIsFounded, target: GameIds.SpiritTracks },
  { source: GameIds.SpiritTracks, target: GameIds.FreshlyPickedTinglesRosyRupeeland },
  {
    source: GameIds.FreshlyPickedTinglesRosyRupeeland,
    target: GameIds.RipenedTinglesBalloonTripofLove
  },
  { source: GameIds.RipenedTinglesBalloonTripofLove, target: GameIds.TooMuchTinglePack },

  // Child timeline
  { source: GameIds.OcarinaOfTime, target: Events.ChildTimeline, style: EdgeStyle.Thick },
  { source: Events.ChildTimeline, target: GameIds.MajorasMask, style: EdgeStyle.Thick },
  { source: GameIds.MajorasMask, target: Events.TheDemonThiefGanondorfIsExecuted },
  {
    source: Events.TheDemonThiefGanondorfIsExecuted,
    target: GameIds.MyNintendoPicrossTheLegendOfZeldaTwilightPrincess
  },
  {
    source: GameIds.MyNintendoPicrossTheLegendOfZeldaTwilightPrincess,
    target: GameIds.TwilightPrincess,
    style: EdgeStyle.Thick
  },
  {
    source: GameIds.TwilightPrincess,
    target: GameIds.LinksCrossbowTraining,
    style: EdgeStyle.Thick
  },
  {
    source: GameIds.LinksCrossbowTraining,
    target: GameIds.HyruleWarriors,
    extraDistance: EdgeDistance.SomeTimePasses
  },

  // Vaati Sealed
  { source: GameIds.TheMinishCap, target: Events.FSVaatiIsSealed },
  { source: Events.FSVaatiIsSealed, target: GameIds.FourSwords },
  { source: GameIds.FourSwords, target: GameIds.FourSwordsAdventures, style: EdgeStyle.Thick },
  { source: GameIds.FourSwordsAdventures, target: GameIds.EchoesOfWisdom },
  { source: GameIds.EchoesOfWisdom, target: GameIds.ZeldasAdventure },

  // Rauru Kingdom
  { source: Events.TheSacredRealmIsSealed, target: Events.ZonaiEstablishHyrule },
  { source: Events.ZonaiEstablishHyrule, target: GameIds.AgeofImprisonment },
  {
    source: GameIds.AgeofImprisonment,
    target: Events.TheAncientCalamity,
    style: EdgeStyle.Dotted,
    extraDistance: EdgeDistance.SomeTimePasses
  },
  {
    source: Events.TheAncientCalamity,
    target: Events.TheGreatCalamity,
    style: EdgeStyle.Dotted,
    extraDistance: EdgeDistance.ALongTimePasses
  },
  { source: Events.TheGreatCalamity, target: GameIds.BreathOfTheWild, style: EdgeStyle.Thick },
  { source: GameIds.BreathOfTheWild, target: GameIds.TearsOfTheKingdom, style: EdgeStyle.Thick },

  // Terrako Time Travel
  { source: Events.TheGreatCalamity, target: Events.TerrakoTimeSplinter },
  { source: Events.TerrakoTimeSplinter, target: GameIds.AgeOfCalamity }
]

export default { flowchart, metadata }
