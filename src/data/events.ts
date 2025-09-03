export enum GameIds {
  SkywardSword = 'skyward-sword',
  OcarinaOfTime = 'ocarina-of-time',
  MajorasMask = 'majoras-mask',
  TwilightPrincess = 'twilight-princess',
  ALinkToThePast = 'a-link-to-the-past',
  TheWindWaker = 'the-wind-waker',
  PhantomHourglass = 'phantom-hourglass',
  SpiritTracks = 'spirit-tracks',
  TheMinishCap = 'the-minish-cap',
  FourSwords = 'four-swords',
  FourSwordsAdventures = 'four-swords-adventures',
  ALinkBetweenWorlds = 'a-link-between-worlds',
  TriforceHeroes = 'triforce-heroes',
  OracleOfSeasons = 'oracle-of-seasons',
  OracleOfAges = 'oracle-of-ages',
  LinksAwakening = 'links-awakening',
  TheLegendOfZelda = 'the-legend-of-zelda',
  TheAdventureOfLink = 'the-adventure-of-link',
  BreathOfTheWild = 'breath-of-the-wild',
  TearsOfTheKingdom = 'tears-of-the-kingdom',
  EchoesOfWisdom = 'echoes-of-wisdom',
  // Side games
  CDiGamesAndCartoon = 'cdi-games-and-cartoon',
  AncientStoneTablets = 'ancient-stone-tablets',
  NaviTrackers = 'navi-trackers',
  LinksCrossbowTraining = 'links-crossbow-training',
  HyruleWarriors = 'hyrule-warriors',
  CadenceOfHyrule = 'cadence-of-hyrule',
  AgeOfCalamity = 'age-of-calamity',
  AgeofImprisonment = 'age-of-imprisonment'
}

export enum Events {
  TheCreationOfTheLandAndSky = 'The Creation of the Land and Sky',
  TheAncientBattleAndTheReincanationOfTheGodessHylia = 'The Ancient Battle and the Reincanation of the Godess Hylia',
  AReturnToTheSurface = 'A Return to the Surface',
  TheSacredRealmIsSealed = 'The Sacred Realm is Sealed',
  TheEstablishmentOfHyruleKingdom = 'The Establishment of Hyrule Kingdom',
  TheRiseOfTheEvilVatti = 'The Rise of the Evil Vatti',
  TheResurrectionOfVaati = 'The Resurrection of Vaati',
  HyruleanCivilWar = 'Hyrulean Civil War',
  TheSacredRealmBecomesTheDarkWorld = 'The Sacred Realm becomes the Dark World',
  GanondorfBecomesTheDemonKingGanon = 'Ganondorf becomes the Demon King Ganon',
  WarOfTheBoundChest = 'War of the Bound Chest',
  // Downfall
  TheImprisoningWar = 'The Imprisoning War',
  TheResurrectionOfGanon = 'The Resurrection of Ganon',
  TheTriforceSplits = 'The Triforce Splits',
  TheMonarchsOfHyruleUseTheTriforce = 'The Monarchs of Hyrule use the Triforce',
  TheTragedyOfPrincessZeldaI = 'The Tragedy of Princess Zelda I',
  TheResurrectionOfGanonIsPrevented = 'The Resurrection of Ganon is Prevented',
  // Child
  ChildTimeline = 'Child Timeline: The Sacred Realm Remains Protected',
  TheDemonThiefGanondorfIsExecuted = 'The Demon Thief, Ganondorf, is Executed',
  TheShadowInvasion = 'The Shadow Invasion',
  // Adult
  AdultTimeline = 'Adult Timeline: Ganon is Sealed Away',
  TheReincarantionOfGanondorf = 'The Reincarantion of Ganondorf',
  GanondorfIsResurrected = 'Ganondorf is Resurrected',
  HyruleIsSealedAndThenFlooded = 'Hyrule is Sealed and then Flooded',
  NewContinentDiscovered = 'New Continent Discovered',
  ANewHyruleKingdomIsFounded = 'A New Hyrule Kingdom is Founded',
  DemonKingMalladusIsRessurected = 'Demon King Malladus is Ressurected',
  // Other
  TheFirstGreatCalamity = 'The Ancient Calamity',
  TheSecondGreatCalamity = 'The Great Calamity',
  TerrakoGoesBackInTime = 'Terrako Goes Back in Time',
  // Timesplit events
  TheHeroIsTriumphant = 'The Hero is Triumphant',
  TheHeroIsDefeated = 'The Hero is Defeated',
  Downfall = 'Downfall',
  // Triforce events
  Divergence = 'Divergence: Zelda sends Link back to his childhood',
  Convergence = 'Convergence: In A Link to the Past, Link wishes on the Triforce for everything to return to normal',
  // Lorulean events
  VattiIsSealed = 'Bad Ending: Vatti is Sealed',
  VattiIsDestroyed = 'Good Ending: Vatti is Destroyed',
  // Geekery events
  TheHeroIsAbsent = 'The Hero is Absent',
  OldHyruleIsDiscovered = 'Old Hyrule is Discovered'
}

// Create subgraphs
export enum Eras {
  EraOfMyth = 'Era of Myth',
  EraOfTheWilds = 'Era of the Wilds'
}

export const timeSplitEvents: string[] = [
  Events.AdultTimeline,
  Events.ChildTimeline,
  Events.Divergence,
  Events.Convergence,
  Events.Downfall,
  Events.TheHeroIsAbsent
]

export const whatIfEvents: string[] = [
  Events.TheHeroIsTriumphant,
  Events.TheHeroIsDefeated,
  Events.VattiIsSealed,
  Events.VattiIsDestroyed
]

export const majorEvents: string[] = [...timeSplitEvents, ...whatIfEvents]
