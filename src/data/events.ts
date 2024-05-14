export enum GameIds {
  SkywardSword = 'skyward-sword',
  OcarinaOfTime = 'ocarina-of-time',
  MajorasMask = 'majoras-mask',
  HyruleWarriors = 'hyrule-warriors',
  TwilightPrincess = 'twilight-princess',
  LinksCrossbowTraining = 'links-crossbow-training',
  ALinkToThePast = 'a-link-to-the-past',
  AncientStoneTablets = 'ancient-stone-tablets',
  TheWindWaker = 'the-wind-waker',
  NaviTrackers = 'navi-trackers',
  PhantomHourglass = 'phantom-hourglass',
  SpiritTracks = 'spirit-tracks',
  TheMinishCap = 'the-minish-cap',
  FourSwords = 'four-swords',
  FourSwordsAdventures = 'four-swords-adventures',
  ALinkBetweenWorlds = 'a-link-between-worlds',
  CadenceOfHyrule = 'cadence-of-hyrule',
  TriforceHeroes = 'triforce-heroes',
  OracleOfSeasons = 'oracle-of-seasons',
  OracleOfAges = 'oracle-of-ages',
  LinksAwakening = 'links-awakening',
  TheLegendOfZelda = 'the-legend-of-zelda',
  TheAdventureOfLink = 'the-adventure-of-link',
  CDiGamesAndCartoon = 'cdi-games-and-cartoon',
  AgeOfCalamity = 'age-of-calamity',
  BreathOfTheWild = 'breath-of-the-wild',
  TearsOfTheKingdom = 'tears-of-the-kingdom'
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
  // Downfall
  TheImprisoningWar = 'The Imprisoning War',
  TheResurrectionOfGanon = 'The Resurrection of Ganon',
  TheTriforceSplits = 'The Triforce Splits',
  TheMonarchsOfHyruleUseTheTriforce = 'The Monarchs of Hyrule use the Triforce',
  TheTragedyOfPrincessZeldaI = 'The Tragedy of Princess Zelda I',
  TheResurrectionOfGanonIsPrevented = 'The Resurrection of Ganon is Prevented',
  // Child
  TheSacredRealmRemainsProtected = 'The Sacred Realm Remains Protected',
  TheDemonThiefGanondorfIsExecuted = 'The Demon Thief, Ganondorf, is Executed',
  TheShadowInvasion = 'The Shadow Invasion',
  // Adult
  TheReincarantionOfGanondorf = 'The Reincarantion of Ganondorf',
  GanondorfIsSealed = 'Ganondorf is Sealed',
  GanondorfIsResurrected = 'Ganondorf is Resurrected',
  HyruleIsSealedAndThenFlooded = 'Hyrule is Sealed and then Flooded',
  NewContinentDiscovered = 'New Continent Discovered',
  ANewHyruleKingdomIsFounded = 'A New Hyrule Kingdom is Founded',
  DemonKingMalladusIsRessurected = 'Demon King Malladus is Ressurected',
  // Other
  TheFirstGreatCalamity = 'The First Great Calamity',
  TheSecondGreatCalamity = 'The Second Great Calamity',
  TerrakoGoesBackInTime = 'Terrako Goes Back in Time',
  // Timesplit events
  TheHeroIsTriumphant = 'The Hero is Triumphant',
  TheHeroIsDefeated = 'The Hero is Defeated',
  Downfall = 'Downfall',
  // Triforce events
  Divergence = 'Divergence',
  Convergence = 'Convergence'
}

export const timeSplitEvents = [
  Events.TheHeroIsTriumphant,
  Events.TheHeroIsDefeated,
  Events.Divergence,
  Events.Convergence,
  Events.Downfall
]

// Create subgraphs
export enum Eras {
  EraOfMyth = 'Era of Myth',
  EraOfTheWilds = 'Era of the Wilds'
}
