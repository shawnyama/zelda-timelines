import { GameIds, Events } from '../events'
import { EdgeStyle } from '../edge-decor'
import type { Edge, Metadata } from '../timelines'

const metadata: Metadata = {
  timelineTitle: 'Absurd',
  timelineCreator: 'AbsurdZeldaTheories aka Bird Keeper Toby',
  submittedBy: 'Shawn Yama',
  submittedOn: '2024-08-10',
  lastUpdatedOn: '2024-08-10',
  sources: [{ label: 'video', url: 'https://www.youtube.com/watch?v=rPrqd6682gE' }]
}

const flowchart: Edge[] = [
  { source: Events.TheCreationOfTheLandAndSky, target: GameIds.SkywardSword },
  { source: GameIds.SkywardSword, target: Events.TheSacredRealmIsSealed },
  { source: Events.TheSacredRealmIsSealed, target: Events.TheEstablishmentOfHyruleKingdom },
  { source: Events.TheEstablishmentOfHyruleKingdom, target: Events.HyruleanCivilWar },
  { source: Events.HyruleanCivilWar, target: GameIds.OcarinaOfTime },
  { source: GameIds.OcarinaOfTime, target: GameIds.MajorasMask, style: EdgeStyle.Thick },
  { source: GameIds.MajorasMask, target: Events.TheImprisoningWar },
  { source: Events.TheImprisoningWar, target: GameIds.ALinkToThePast },
  {
    source: GameIds.ALinkToThePast,
    target: GameIds.OracleOfSeasons,
    style: EdgeStyle.Thick
  },
  { source: GameIds.OracleOfSeasons, target: GameIds.OracleOfAges, style: EdgeStyle.Thick },
  { source: GameIds.OracleOfAges, target: GameIds.LinksAwakening, style: EdgeStyle.Thick },
  { source: GameIds.LinksAwakening, target: Events.TheDemonThiefGanondorfIsExecuted },
  { source: Events.TheDemonThiefGanondorfIsExecuted, target: GameIds.TwilightPrincess },
  { source: GameIds.TwilightPrincess, target: GameIds.ALinkBetweenWorlds, extraDistance: 3 },
  {
    source: GameIds.ALinkBetweenWorlds,
    target: GameIds.TriforceHeroes,
    style: EdgeStyle.Thick
  },
  { source: GameIds.TriforceHeroes, target: Events.HyruleIsSealedAndThenFlooded },
  { source: Events.HyruleIsSealedAndThenFlooded, target: GameIds.TheWindWaker },
  { source: GameIds.TheWindWaker, target: GameIds.PhantomHourglass, style: EdgeStyle.Thick },
  { source: GameIds.PhantomHourglass, target: Events.NewContinentDiscovered },
  { source: Events.NewContinentDiscovered, target: Events.ANewHyruleKingdomIsFounded },
  { source: Events.ANewHyruleKingdomIsFounded, target: GameIds.SpiritTracks },
  {
    source: GameIds.SpiritTracks,
    target: Events.TheFirstGreatCalamity,
    style: EdgeStyle.Dotted,
    extraDistance: 3
  },
  {
    source: Events.TheFirstGreatCalamity,
    target: Events.TheSecondGreatCalamity,
    style: EdgeStyle.Dotted,
    extraDistance: 6
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
  { source: GameIds.TearsOfTheKingdom, target: GameIds.TheMinishCap, extraDistance: 3 },
  { source: GameIds.TheMinishCap, target: GameIds.FourSwords },
  { source: GameIds.FourSwords, target: GameIds.FourSwordsAdventures },
  {
    source: GameIds.FourSwordsAdventures,
    target: GameIds.TheLegendOfZelda,
    extraDistance: 3
  },
  {
    source: GameIds.TheLegendOfZelda,
    target: GameIds.TheAdventureOfLink,
    style: EdgeStyle.Thick
  }
]

export default { flowchart, metadata }
