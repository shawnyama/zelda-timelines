import { GameIds, Events, Eras } from '../events'
import { EdgeStyle, EdgeDistance } from '../edge-decor'
import type { Edge, Metadata } from '../timelines'

// This is a comment, these are like notes used to help human readers understand certain lines of code.

const metadata: Metadata = {
  timelineTitle: 'New',
  timelineCreator: 'Timeline creator name here', // If there are mutliple creators, separate names with commas. Put null if unknown.
  submittedBy: 'Your name here', // Put null if you want to be anonymous
  submittedOn: '2025-10-19',
  lastUpdatedOn: '2025-10-19',
  // If there are no sources, put an empty array []
  // You can add another source by adding another object with label and url to the array
  sources: [
    {
      label: 'type of source',
      url: '' // Put null if there is no URL
    }
  ]
}

const flowchart: Edge[] = [
  {
    source: Events.TheTragedyOfPrincessZeldaI,
    target: GameIds.TheLegendOfZelda
  },
  {
    source: GameIds.TheLegendOfZelda,
    target: GameIds.TheAdventureOfLink,
    style: EdgeStyle.Thick
  }
]

// const flowchart: Edge[] = [
//   { source: Events.TheCreationOfTheLandAndSky, target: GameIds.SkywardSword },
//   { source: GameIds.SkywardSword, target: Events.TheSacredRealmIsSealed },
//   { source: Events.TheSacredRealmIsSealed, target: Events.TheEstablishmentOfHyruleKingdom },
//   { source: Events.TheEstablishmentOfHyruleKingdom, target: GameIds.TheMinishCap },
//   {
//     source: GameIds.TheMinishCap,
//     target: GameIds.FourSwords,
//     extraDistance: EdgeDistance.SomeTimePasses
//   },
//   { source: GameIds.FourSwords, target: Events.HyruleanCivilWar },
//   {
//     source: Events.HyruleanCivilWar,
//     target: GameIds.OcarinaOfTime,
//     style: EdgeStyle.Thick
//   },
//   // Adult timeline
//   {
//     source: GameIds.OcarinaOfTime,
//     target: Events.AdultTimeline
//   },
//   { source: Events.AdultTimeline, target: Events.HyruleIsSealedAndThenFlooded },
//   { source: Events.HyruleIsSealedAndThenFlooded, target: GameIds.TheWindWaker },
//   {
//     source: GameIds.TheWindWaker,
//     target: GameIds.PhantomHourglass,
//     style: EdgeStyle.Thick
//   }
// ]

export default { flowchart, metadata }
