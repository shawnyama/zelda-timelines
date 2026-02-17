import { GameIds, Events, Eras } from '../events'
import { EdgeStyle, EdgeDistance } from '../edge-decor'
import type { Edge, Metadata } from '../timelines'

const metadata: Metadata = {
  timelineTitle: 'Sabrblade',
  timelineCreator: 'Sabrblade a.k.a. Miles Tinker',
  submittedBy: 'Miles Tinker',
  submittedOn: '2025-12-18',
  lastUpdatedOn: '2026-01-29',
  sources: [
    {
      label: 'The games/game manuals',
      url: null
    },
    {
      label: 'Creating a Champion',
      url: null
    },
    {
      label: 'TOTK Master Works',
      url: null
    }
  ],
  notes:
    'This lengthy timeline features no hypothetical "what-if" branches, no reincarnating Ganondorfs (FSAdorf is OOTdorf, but TOTKdorf is an entirely separate man with the same name), FSA as a direct sequel to FS, five spinoff games, True Founding, and some minor retcons to help smooth out the rougher edges.'
}

const flowchart: Edge[] = [
  //Origin Era
  {
    source: Events.GoldenGoddessesCreateWorld,
    target: Events.TriforceAndSecretStonesCreated
  },
  //Godly Era: Zonai Birth Period
  {
    source: Events.TriforceAndSecretStonesCreated,
    target: Events.HyliaTriforceSecretStonesZonai
  },
  {
    source: Events.HyliaTriforceSecretStonesZonai,
    target: Events.ZonaiAscendToSky,
    style: EdgeStyle.Dotted,
    extraDistance: 6
  },
  //Godly Era: Pre-Skyloft Period
  {
    source: Events.ZonaiAscendToSky,
    target: Events.SheikahEyeSymbol
  },
  {
    source: Events.SheikahEyeSymbol,
    target: Events.LanayruSea
  },
  {
    source: Events.LanayruSea,
    target: Events.DemonTribeAndDemise,
    style: EdgeStyle.Dotted,
    extraDistance: 3
  },
  {
    source: Events.DemonTribeAndDemise,
    target: Events.HyliaRaisesHumansToSky
  },
  {
    source: Events.HyliaRaisesHumansToSky,
    target: Events.HyliaSealsDemise
  },
  {
    source: Events.HyliaSealsDemise,
    target: Events.LanayruDesert,
    style: EdgeStyle.Dotted,
    extraDistance: 3
  },
  //Godly Era: Skyloft Period
  {
    source: Events.LanayruDesert,
    target: Events.HWSS1
  },
  {
    source: Events.HWSS1,
    target: Events.HWSS2,
    style: EdgeStyle.Dotted,
    extraDistance: 3
  },
  {
    source: Events.HWSS2,
    target: GameIds.SkywardSword
  },
  {
    source: GameIds.SkywardSword,
    target: Events.SkyloftiansReturnToSurface,
    style: EdgeStyle.Thick
  },
  //Godly Era: Post-Skyloft Period
  {
    source: Events.SkyloftiansReturnToSurface,
    target: Events.NewTribesFormed
  },
  {
    source: Events.NewTribesFormed,
    target: Events.GerudoTribe
  },
  {
    source: Events.GerudoTribe,
    target: Events.ZonaiExtinctionMingle,
    style: EdgeStyle.Dotted,
    extraDistance: 6
  },
  //Godly Era: Zonai Heavenly Period
  {
    source: Events.ZonaiAscendToSky,
    target: Events.ZonaiProsperInTheSky,
    style: EdgeStyle.Dotted
  },
  {
    source: Events.ZonaiProsperInTheSky,
    target: Events.StormwindArkOtherStructures,
    style: EdgeStyle.Dotted,
    extraDistance: 9
  },
  {
    source: Events.StormwindArkOtherStructures,
    target: Events.ZonaiExtinctionMingle,
    style: EdgeStyle.Dotted,
    extraDistance: 4
  },
  //Godly Era: Hyrule Kingdom Founding Period
  {
    source: Events.ZonaiExtinctionMingle,
    target: Events.RauruMarriesSonia,
    style: EdgeStyle.Dotted,
    extraDistance: 6
  },
  {
    source: Events.RauruMarriesSonia,
    target: Events.RauruAndSoniaFoundHyruleKingdom
  },
  {
    source: Events.RauruAndSoniaFoundHyruleKingdom,
    target: Events.OriginalGanondorfBecomesGerudoChief
  },
  {
    source: Events.OriginalGanondorfBecomesGerudoChief,
    target: GameIds.AgeofImprisonment
  },
  {
    source: GameIds.AgeofImprisonment,
    target: Events.GreatSkyIsland
  },
  {
    source: Events.GreatSkyIsland,
    target: Events.NewCastleBuiltDemonKingErasure
  },
  //Force Era: Minish Period
  {
    source: Events.NewCastleBuiltDemonKingErasure,
    target: Events.MalladusVersusGod,
    style: EdgeStyle.Dotted,
    extraDistance: 6
  },
  {
    source: Events.MalladusVersusGod,
    target: Events.MinishLegendPicoriBladeLightForce,
    style: EdgeStyle.Dotted,
    extraDistance: 6
  },
  {
    source: Events.MinishLegendPicoriBladeLightForce,
    target: Events.PicoriFestival
  },
  {
    source: Events.PicoriFestival,
    target: Events.HyruleWindTribeRelations
  },
  {
    source: Events.HyruleWindTribeRelations,
    target: Events.WindTribeAscendsToTheSky,
    style: EdgeStyle.Dotted,
    extraDistance: 6
  },
  {
    source: Events.WindTribeAscendsToTheSky,
    target: GameIds.TheMinishCap,
    style: EdgeStyle.Dotted,
    extraDistance: 6
  },
  {
    source: GameIds.TheMinishCap,
    target: Events.WindTribeSkyPeople,
    extraDistance: 3
  },
  {
    source: Events.WindTribeSkyPeople,
    target: Events.CityInTheSky
  },
  {
    source: Events.CityInTheSky,
    target: Events.DarkTribeTwilightRealm,
    style: EdgeStyle.Dotted,
    extraDistance: 6
  },
  {
    source: Events.DarkTribeTwilightRealm,
    target: Events.SagesSealSacredRealm
  },
  //Force Era: Four Sword Period
  {
    source: Events.SagesSealSacredRealm,
    target: Events.VaatiSealedInFourSword,
    style: EdgeStyle.Dotted,
    extraDistance: 6
  },
  {
    source: Events.VaatiSealedInFourSword,
    target: Events.NewGanondorfBorn,
    style: EdgeStyle.Dotted,
    extraDistance: 6
  },
  {
    source: Events.NewGanondorfBorn,
    target: GameIds.FourSwords,
    style: EdgeStyle.Thick
  },
  {
    source: GameIds.FourSwords,
    target: Events.GanondorfStealsTrident,
    style: EdgeStyle.Thick
  },
  {
    source: Events.GanondorfStealsTrident,
    target: GameIds.FourSwordsAdventures,
    style: EdgeStyle.Thick
  },
  {
    source: GameIds.FourSwordsAdventures,
    target: Events.GanonEscapesFourSword,
    style: EdgeStyle.Dotted,
    extraDistance: 6
  },
  //Era of the Hero of Time
  {
    source: Events.GanonEscapesFourSword,
    target: Events.GanondorfKingOfThieves
  },
  {
    source: Events.GanondorfKingOfThieves,
    target: Events.GerudoEars
  },
  {
    source: Events.GerudoEars,
    target: Events.FierceWar
  },
  {
    source: Events.FierceWar,
    target: GameIds.OcarinaOfTime,
    style: EdgeStyle.Thick
  },
  //Splinter timeline: Pre-Flood Period
  {
    source: GameIds.OcarinaOfTime,
    target: Events.SplinterTimeline,
    style: EdgeStyle.Thick,
    extraDistance: 5
  },
  {
    source: Events.SplinterTimeline,
    target: Events.NewHyruleCastle
  },
  {
    source: Events.NewHyruleCastle,
    target: Events.OriginalGanondorfBreaksSeal
  },
  {
    source: Events.OriginalGanondorfBreaksSeal,
    target: Events.HyruleIsFlooded
  },
  {
    source: Events.HyruleIsFlooded,
    target: Events.OriginalGanondorfDrowns
  },
  //Great Sea Era: Post-Flood Period
  {
    source: Events.OriginalGanondorfDrowns,
    target: Events.KokiriBecomeKoroks,
    extraDistance: 1
  },
  {
    source: Events.KokiriBecomeKoroks,
    target: Events.KoroksIntegration
  },
  {
    source: Events.KoroksIntegration,
    target: Events.GreatSeaRito,
    style: EdgeStyle.Dotted,
    extraDistance: 9
  },
  {
    source: Events.GreatSeaRito,
    target: Events.GanondorfEscapesTheVoid,
    style: EdgeStyle.Dotted,
    extraDistance: 9
  },
  //Great Sea Era: Wind Waker Period
  {
    source: Events.GanondorfEscapesTheVoid,
    target: Events.HWTWW
  },
  {
    source: Events.HWTWW,
    target: GameIds.TheWindWaker
  },
  {
    source: GameIds.TheWindWaker,
    target: GameIds.NaviTrackers,
    style: EdgeStyle.Thick
  },
  {
    source: GameIds.NaviTrackers,
    target: GameIds.PhantomHourglass,
    style: EdgeStyle.Thick
  },
  {
    source: GameIds.PhantomHourglass,
    target: Events.NewLandNewHyruleNewFounding,
    style: EdgeStyle.Thick,
    extraDistance: 1
  },
  //New Hyrule Era
  {
    source: Events.NewLandNewHyruleNewFounding,
    target: GameIds.SpiritTracks,
    style: EdgeStyle.Dotted,
    extraDistance: 4
  },
  {
    source: GameIds.SpiritTracks,
    target: GameIds.TriforceHeroes
  },
  //Main timeline: Era of the Hero of Time
  {
    source: GameIds.OcarinaOfTime,
    target: Events.MainTimeline,
    style: EdgeStyle.Thick
  },
  {
    source: Events.MainTimeline,
    target: Events.SalesmanSkullKidMajorasMask,
    style: EdgeStyle.Thick
  },
  {
    source: Events.SalesmanSkullKidMajorasMask,
    target: Events.HWMM,
    style: EdgeStyle.Thick
  },
  {
    source: Events.HWMM,
    target: GameIds.MajorasMask,
    style: EdgeStyle.Thick
  },
  {
    source: GameIds.MajorasMask,
    target: Events.HWOOT1
  },
  {
    source: Events.HWOOT1,
    target: Events.HWOOT2
  },
  {
    source: Events.HWOOT2,
    target: Events.GanondorfInvadesHyrule
  },
  {
    source: Events.GanondorfInvadesHyrule,
    target: Events.RutoDefendsZorasDomain,
    style: EdgeStyle.Thick
  },
  {
    source: Events.RutoDefendsZorasDomain,
    target: Events.GanondorfExecutionBanishment,
    style: EdgeStyle.Thick
  },
  {
    source: Events.GanondorfExecutionBanishment,
    target: Events.NewZorasDomainRutoNabooruSages,
    style: EdgeStyle.Thick
  },
  {
    source: Events.NewZorasDomainRutoNabooruSages,
    target: Events.ChickensInTheSky,
    style: EdgeStyle.Dotted,
    extraDistance: 4
  },
  //Twilight Era
  {
    source: Events.ChickensInTheSky,
    target: GameIds.TwilightPrincess
  },
  {
    source: GameIds.TwilightPrincess,
    target: Events.GanondorfDeathTriforceSacredRealm
  },
  {
    source: Events.GanondorfDeathTriforceSacredRealm,
    target: Events.HWTP1
  },
  {
    source: Events.HWTP1,
    target: Events.ZantIsRevived
  },
  {
    source: Events.ZantIsRevived,
    target: Events.HWTP2
  },
  //Golden Era: Imprisoning War Period
  {
    source: Events.HWTP2,
    target: Events.GanondorfResurrectedOffscreen,
    style: EdgeStyle.Dotted,
    extraDistance: 4
  },
  {
    source: Events.GanondorfResurrectedOffscreen,
    target: Events.GanondorfBecomesGanon
  },
  {
    source: Events.GanondorfBecomesGanon,
    target: Events.ALTTPImprisoningWar
  },
  //Golden Era: Great Cataclysm Period
  {
    source: Events.ALTTPImprisoningWar,
    target: Events.AgahnimConquersHyrule,
    style: EdgeStyle.Dotted,
    extraDistance: 6
  },
  {
    source: Events.AgahnimConquersHyrule,
    target: GameIds.ALinkToThePast
  },
  {
    source: GameIds.ALinkToThePast,
    target: GameIds.OracleOfAges,
    style: EdgeStyle.Thick
  },
  {
    source: GameIds.OracleOfAges,
    target: GameIds.OracleOfSeasons,
    style: EdgeStyle.Thick
  },
  {
    source: GameIds.OracleOfSeasons,
    target: Events.DarkRitesTriforceSplits,
    style: EdgeStyle.Thick
  },
  //Golden Era: Post-Great Cataclysm Period (Hyrule)
  {
    source: Events.DarkRitesTriforceSplits,
    target: Events.SahasrahlaSearchesForLink,
    extraDistance: 1
  },
  {
    source: Events.SahasrahlaSearchesForLink,
    target: GameIds.AncientStoneTablets
  },
  {
    source: GameIds.AncientStoneTablets,
    target: Events.LinkReturnsHome
  },
  //Golden Era: Post-Great Cataclysm Period (Koholint Island)
  {
    source: Events.DarkRitesTriforceSplits,
    target: Events.LinkLeavesHyrule,
    style: EdgeStyle.Thick
  },
  {
    source: Events.LinkLeavesHyrule,
    target: GameIds.LinksAwakening,
    style: EdgeStyle.Thick,
    extraDistance: 1
  },
  {
    source: GameIds.LinksAwakening,
    target: Events.LinkReturnsHome,
    style: EdgeStyle.Thick
  },
  //Golden Era: Lorule Invasion Period
  {
    source: Events.LinkReturnsHome,
    target: GameIds.ALinkBetweenWorlds,
    style: EdgeStyle.Dotted,
    extraDistance: 2
  },
  {
    source: GameIds.ALinkBetweenWorlds,
    target: Events.PrimeEnergyHiddenDekuTree
  },
  //Golden Era: Rifts Period
  {
    source: Events.PrimeEnergyHiddenDekuTree,
    target: Events.NullCreatesMassiveRifts,
    style: EdgeStyle.Dotted,
    extraDistance: 6
  },
  {
    source: Events.NullCreatesMassiveRifts,
    target: Events.GanonCopiedByNull
  },
  {
    source: Events.GanonCopiedByNull,
    target: GameIds.EchoesOfWisdom
  },
  //Golden Era: Age of Prosperity
  {
    source: GameIds.EchoesOfWisdom,
    target: Events.GreatKingTriforce,
    style: EdgeStyle.Dotted,
    extraDistance: 6
  },
  {
    source: Events.GreatKingTriforce,
    target: Events.SleepingPrincessZelda
  },
  //Era of Decline: Ganon Invasion Period
  {
    source: Events.SleepingPrincessZelda,
    target: Events.GanonInvadesHyrule,
    style: EdgeStyle.Dotted,
    extraDistance: 6
  },
  {
    source: Events.GanonInvadesHyrule,
    target: Events.ZeldaSplitsTriforceOfWisdom
  },
  {
    source: Events.ZeldaSplitsTriforceOfWisdom,
    target: Events.ZeldaIsCaptured
  },
  {
    source: Events.ZeldaIsCaptured,
    target: GameIds.TheLegendOfZelda
  },
  {
    source: GameIds.TheLegendOfZelda,
    target: GameIds.TheAdventureOfLink,
    style: EdgeStyle.Thick
  },
  //Era of Myth: Period of Legend
  {
    source: GameIds.TheAdventureOfLink,
    target: Events.GanondorfSpiritSplitFourFragments,
    style: EdgeStyle.Dotted,
    extraDistance: 6
  },
  //Era of Myth: War Across the Ages
  {
    source: Events.GanondorfSpiritSplitFourFragments,
    target: Events.CiaWatchesOverTriforce,
    style: EdgeStyle.Dotted,
    extraDistance: 6
  },
  {
    source: Events.CiaWatchesOverTriforce,
    target: GameIds.HyruleWarriors
  },
  {
    source: GameIds.HyruleWarriors,
    target: Events.CiaAndLanaWatchOverTriforce
  },
  //Era of Myth: Early Sheikah Period
  {
    source: Events.CiaAndLanaWatchOverTriforce,
    target: Events.GateOfSoulsSheikah,
    style: EdgeStyle.Dotted,
    extraDistance: 6
  },
  {
    source: Events.GateOfSoulsSheikah,
    target: Events.SheikahOralLegends
  },
  {
    source: Events.SheikahOralLegends,
    target: Events.CalamityGanon,
    extraDistance: 6
  },
  //Wilds Era: Advanced Shiekah Period
  {
    source: Events.CalamityGanon,
    target: Events.ZoraSettleInLanayru,
    style: EdgeStyle.Dotted,
    extraDistance: 7
  },
  {
    source: Events.ZoraSettleInLanayru,
    target: Events.SheikahTechnology
  },
  //Wilds Era: Ancient Calamity Period
  {
    source: Events.SheikahTechnology,
    target: Events.EastReservoirLake,
    style: EdgeStyle.Dotted,
    extraDistance: 7
  },
  {
    source: Events.EastReservoirLake,
    target: Events.AncientCalamity
  },
  {
    source: Events.AncientCalamity,
    target: Events.YigaClanFormed
  },
  //Wilds Era: Great Calamity Period
  {
    source: Events.YigaClanFormed,
    target: Events.GreatCalamityPreparations,
    style: EdgeStyle.Dotted,
    extraDistance: 9
  },
  {
    source: Events.GreatCalamityPreparations,
    target: Events.GreatCalamity,
    style: EdgeStyle.Thick
  },
  {
    source: Events.GreatCalamity,
    target: GameIds.BreathOfTheWild,
    style: EdgeStyle.Thick,
    extraDistance: 6
  },
  {
    source: GameIds.BreathOfTheWild,
    target: Events.ChampionsGoBackInTime,
    style: EdgeStyle.Thick
  },
  {
    source: Events.ChampionsGoBackInTime,
    target: Events.OriginalGanondorfFinallyBreaksSeal,
    style: EdgeStyle.Thick
  },
  {
    source: Events.OriginalGanondorfFinallyBreaksSeal,
    target: GameIds.TearsOfTheKingdom,
    style: EdgeStyle.Thick
  },
  //Age of Calamity
  {
    source: Events.AOCSplinterTimeline2,
    target: Events.GreatCalamity,
    style: EdgeStyle.Thick
  },
  {
    source: Events.AOCSplinterTimeline2,
    target: GameIds.AgeOfCalamity,
    style: EdgeStyle.Thick
  }
]

export default { flowchart, metadata }
