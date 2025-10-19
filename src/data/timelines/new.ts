import { GameIds, Events, Eras } from '../events'
import { EdgeStyle, EdgeDistance } from '../edge-decor'
import type { Edge, Metadata } from '../timelines'

const metadata: Metadata = {
  timelineTitle: 'New',
  timelineCreator: 'Timeline creator name here', // If there are mutliple creators, separate names with commas
  submittedBy: 'Your name here',
  submittedOn: '2024-06-25',
  lastUpdatedOn: '2024-06-25',
  sources: [
    {
      label: 'type of source',
      url: 'paste link here'
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

export default { flowchart, metadata }
