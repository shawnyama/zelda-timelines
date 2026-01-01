import { GameIds, Events, Eras } from '../events'
import { EdgeStyle, EdgeDistance } from '../edge-decor'
import type { Edge, Metadata } from '../timelines'

const metadata: Metadata = {
  timelineTitle: 'Sabrblade',
  timelineCreator: 'Sabrblade a.k.a. Miles Tinker',
  submittedBy: 'Miles Tinker',
  submittedOn: '2025-12-18',
  lastUpdatedOn: '2025-12-31',
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
  {
    source: Events.TheVoidBeforeCreation,
    target: Events.GoldenGoddessesCreateWorld
  },
  {
    source: Events.GoldenGoddessesCreateWorld,
    target: Events.NullCreatesRiftsTrisRepairRifts
  },
  {
    source: Events.NullCreatesRiftsTrisRepairRifts,
    target: Events.TriforceAndSecretStonesCreated
  },
  {
    source: Events.TriforceAndSecretStonesCreated,
    target: Events.HyliaTriforceSecretStonesZonai
  },
  {
    source: Events.HyliaTriforceSecretStonesZonai,
    target: Events.ZonaiAscendToSky,
    extraDistance: 3
  },
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
    extraDistance: 1
  },
  {
    source: Events.DemonTribeAndDemise,
    target: Events.HyliaRaisesSkyloft
  },
  {
    source: Events.HyliaRaisesSkyloft,
    target: Events.HyliaSealsDemise
  },
  {
    source: Events.HyliaSealsDemise,
    target: Events.HWSS1,
    extraDistance: 3
  },
  {
    source: Events.HWSS1,
    target: Events.HWSS2,
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
  {
    source: Events.SkyloftiansReturnToSurface,
    target: Events.NewTribesFormed
  },
  {
    source: Events.NewTribesFormed,
    target: Events.StormwindArkOtherStructures
  },
  {
    source: Events.StormwindArkOtherStructures,
    target: Events.ZonaiExtinctionMingle
  },
  {
    source: Events.ZonaiExtinctionMingle,
    target: Events.RauruMarriesSonia,
    extraDistance: 3
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
    target: Events.NewCastleBuiltDemonKingErasure,
    extraDistance: 3
  },
  {
    source: Events.NewCastleBuiltDemonKingErasure,
    target: Events.MalladusVersusGod,
    extraDistance: 5
  },
  {
    source: Events.MalladusVersusGod,
    target: Events.MinishLegendPicoriBladeLightForce,
    extraDistance: 5
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
    extraDistance: 6
  },
  {
    source: Events.WindTribeAscendsToTheSky,
    target: GameIds.TheMinishCap,
    extraDistance: 6
  },
  {
    source: GameIds.TheMinishCap,
    target: Events.WindTribeSkyPeople,
    extraDistance: 1
  },
  {
    source: Events.WindTribeSkyPeople,
    target: Events.CityInTheSky
  },
  {
    source: Events.CityInTheSky,
    target: Events.DarkTribeTwilightRealm,
    extraDistance: 6
  },
  {
    source: Events.DarkTribeTwilightRealm,
    target: Events.SagesSealSacredRealm
  },
  {
    source: Events.SagesSealSacredRealm,
    target: Events.VaatiSealedInFourSword,
    extraDistance: 6
  },
  {
    source: Events.VaatiSealedInFourSword,
    target: Events.NewGanondorfBorn,
    extraDistance: 3
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
    extraDistance: 6
  },
  {
    source: Events.GanonEscapesFourSword,
    target: Events.GanondorfKingOfThieves
  },
  {
    source: Events.GanondorfKingOfThieves,
    target: Events.FierceWar
  },
  {
    source: Events.FierceWar,
    target: GameIds.OcarinaOfTime,
    style: EdgeStyle.Thick
  },
  //Splinter timeline
  {
    source: GameIds.OcarinaOfTime,
    target: Events.SplinterTimeline,
    style: EdgeStyle.Thick,
    extraDistance: 5
  },
  {
    source: Events.SplinterTimeline,
    target: Events.OriginalGanondorfBreaksSeal,
    extraDistance: 1
  },
  {
    source: Events.OriginalGanondorfBreaksSeal,
    target: Events.HyruleIsFlooded
  },
  {
    source: Events.HyruleIsFlooded,
    target: Events.OriginalGanondorfDrowns
  },
  {
    source: Events.OriginalGanondorfDrowns,
    target: Events.KokiriBecomeKoroks,
    extraDistance: 2
  },
  {
    source: Events.KokiriBecomeKoroks,
    target: Events.KoroksIntegration
  },
  {
    source: Events.KoroksIntegration,
    target: Events.GreatSeaRito,
    extraDistance: 5
  },
  {
    source: Events.GreatSeaRito,
    target: Events.GanondorfEscapesTheVoid,
    extraDistance: 9
  },
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
  {
    source: Events.NewLandNewHyruleNewFounding,
    target: GameIds.SpiritTracks,
    extraDistance: 4
  },
  {
    source: GameIds.SpiritTracks,
    target: GameIds.TriforceHeroes
  },
  //Main timeline
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
    target: GameIds.TwilightPrincess,
    extraDistance: 4
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
    target: Events.HWTP2
  },
  {
    source: Events.HWTP2,
    target: Events.GanondorfResurrectedOffscreen,
    style: EdgeStyle.Dotted,
    extraDistance: 4
  },
  {
    source: Events.GanondorfResurrectedOffscreen,
    target: Events.ALTTPBackstory
  },
  {
    source: Events.ALTTPBackstory,
    target: Events.ALTTPImprisoningWar
  },
  {
    source: Events.ALTTPImprisoningWar,
    target: Events.AgahnimConquersHyrule,
    extraDistance: 5
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
  {
    source: Events.LinkReturnsHome,
    target: GameIds.ALinkBetweenWorlds,
    extraDistance: 2
  },
  {
    source: GameIds.ALinkBetweenWorlds,
    target: Events.PrimeEnergyHiddenDekuTree
  },
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
  {
    source: Events.SleepingPrincessZelda,
    target: Events.GanonInvadesHyrule,
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
  {
    source: GameIds.TheAdventureOfLink,
    target: Events.GanondorfSpiritSplitFourFragments,
    extraDistance: 6
  },
  {
    source: Events.GanondorfSpiritSplitFourFragments,
    target: Events.CiaWatchesOverTriforce,
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
  {
    source: Events.YigaClanFormed,
    target: Events.GreatCalamity,
    style: EdgeStyle.Dotted,
    extraDistance: 9
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
    source: Events.TerrakoTravelsBackInTime,
    target: Events.GreatCalamity,
    style: EdgeStyle.Thick
  },
  {
    source: Events.TerrakoTravelsBackInTime,
    target: GameIds.AgeOfCalamity,
    style: EdgeStyle.Thick
  }
]

export default { flowchart, metadata }
