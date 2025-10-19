import { GameIds, Events, Eras } from '../events'
import { EdgeStyle, EdgeDistance } from '../edge-decor'
import type { Edge, Metadata } from '../timelines'

const metadata: Metadata = {
  timelineTitle: 'New Timeline',
  timelineCreator: 'Your Name Here',
  submittedBy: 'Shawn Yama',
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
