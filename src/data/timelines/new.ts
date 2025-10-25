import { GameIds, Events, Eras } from '../events'
import { EdgeStyle, EdgeDistance } from '../edge-decor'
import type { Edge, Metadata } from '../timelines'

// This is a comment, these are like notes used to help human readers understand certain lines of code.

const metadata: Metadata = {
  timelineTitle: 'New',
  timelineCreator: 'Timeline creator name here', // If there are mutliple creators, separate names with commas. Put null here if unknown.
  submittedBy: 'Your name here', // Put null here if you want to be anonymous
  submittedOn: '2025-10-19',
  lastUpdatedOn: '2025-10-19',
  // If there are no sources, put an empty array []
  // You can add another source by adding another object with label and url to the array
  sources: []
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

export default { flowchart, metadata }
