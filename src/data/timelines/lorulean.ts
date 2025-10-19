import { GameIds, Events } from '../events'
import { EdgeStyle } from '../edge-decor'
import type { Edge, Metadata } from '../timelines'

const metadata: Metadata = {
  timelineTitle: 'Lorulean',
  timelineCreator: 'LoruleanHistorian/Instrutilus/Zelda Lore',
  submittedBy: 'Shawn Yama',
  submittedOn: '2024-06-20',
  lastUpdatedOn: '2024-06-20',
  sources: [{ label: 'video', url: 'https://www.youtube.com/watch?v=7GAqIqYzqGQ' }]
}

const flowchart: Edge[] = [
  { source: Events.TheCreationOfTheLandAndSky, target: GameIds.SkywardSword },
  { source: GameIds.SkywardSword, target: Events.TheSacredRealmIsSealed },
  { source: Events.TheSacredRealmIsSealed, target: Events.TheEstablishmentOfHyruleKingdom },
  { source: Events.TheEstablishmentOfHyruleKingdom, target: Events.WarOfTheBoundChest },
  { source: Events.WarOfTheBoundChest, target: GameIds.TheMinishCap },
  // Good ending
  { source: GameIds.TheMinishCap, target: Events.VattiIsDestroyed },
  { source: Events.VattiIsDestroyed, target: Events.HyruleanCivilWar },
  { source: Events.HyruleanCivilWar, target: GameIds.OcarinaOfTime, style: EdgeStyle.Thick },
  // Adult timeline
  { source: GameIds.OcarinaOfTime, target: Events.AdultTimeline },
  { source: Events.AdultTimeline, target: Events.HyruleIsSealedAndThenFlooded },
  { source: Events.HyruleIsSealedAndThenFlooded, target: GameIds.TheWindWaker },

  { source: GameIds.TheWindWaker, target: GameIds.PhantomHourglass, style: EdgeStyle.Thick },
  { source: GameIds.PhantomHourglass, target: Events.NewContinentDiscovered },
  { source: Events.NewContinentDiscovered, target: Events.ANewHyruleKingdomIsFounded },
  { source: Events.ANewHyruleKingdomIsFounded, target: GameIds.SpiritTracks },
  // Child timeline
  { source: GameIds.OcarinaOfTime, target: Events.ChildTimeline, style: EdgeStyle.Thick },
  { source: Events.ChildTimeline, target: GameIds.MajorasMask, style: EdgeStyle.Thick },
  { source: GameIds.MajorasMask, target: Events.TheDemonThiefGanondorfIsExecuted },
  { source: Events.TheDemonThiefGanondorfIsExecuted, target: GameIds.TwilightPrincess },
  {
    source: GameIds.TwilightPrincess,
    target: Events.TheFirstGreatCalamity,
    extraDistance: 3,
    style: EdgeStyle.Dotted
  },
  {
    source: Events.TheFirstGreatCalamity,
    target: Events.TheSecondGreatCalamity,
    style: EdgeStyle.Dotted,
    extraDistance: 3
  },
  {
    source: Events.TheSecondGreatCalamity,
    target: GameIds.BreathOfTheWild,
    style: EdgeStyle.Thick
  },
  {
    source: GameIds.BreathOfTheWild,
    target: GameIds.TearsOfTheKingdom,
    style: EdgeStyle.Thick
  },
  // Bad ending
  { source: GameIds.TheMinishCap, target: Events.VattiIsSealed },
  { source: Events.VattiIsSealed, target: GameIds.FourSwords },
  { source: GameIds.FourSwords, target: GameIds.FourSwordsAdventures },
  { source: GameIds.FourSwordsAdventures, target: Events.TheImprisoningWar },
  { source: Events.TheImprisoningWar, target: GameIds.ALinkToThePast },
  { source: GameIds.ALinkToThePast, target: GameIds.OracleOfAges, style: EdgeStyle.Thick },
  { source: GameIds.OracleOfAges, target: GameIds.OracleOfSeasons, style: EdgeStyle.Thick },
  { source: GameIds.OracleOfSeasons, target: GameIds.LinksAwakening, style: EdgeStyle.Thick },
  { source: GameIds.LinksAwakening, target: GameIds.ALinkBetweenWorlds, extraDistance: 1 },
  { source: GameIds.ALinkBetweenWorlds, target: GameIds.TriforceHeroes, style: EdgeStyle.Thick },
  { source: GameIds.TriforceHeroes, target: Events.TheTragedyOfPrincessZeldaI },
  { source: Events.TheTragedyOfPrincessZeldaI, target: GameIds.TheLegendOfZelda },
  { source: GameIds.TheLegendOfZelda, target: GameIds.TheAdventureOfLink, style: EdgeStyle.Thick }
]

export default { flowchart, metadata }
