import type { EdgeStyle } from './edge-decor'
import type { GameIds, Events, Eras } from './events'
import { official } from './timelines/official'
import { triforce } from './timelines/triforce'
import { lorulean } from './timelines/lorulean'
import { geekery } from './timelines/geekery'
import { absurd } from './timelines/absurd'
import { newTimeline } from './timelines/new-timeline'

export enum Timelines {
  Official = 'official',
  Triforce = 'triforce',
  Lorulean = 'lorulean',
  Geekery = 'geekery',
  Absurd = 'absurd',
  NewTimeline = 'new-timeline'
}

export type Edge = {
  source: GameIds | Events | Eras // Previous event
  target: GameIds | Events | Eras // Next event
  // Optional properties
  extraDistance?: number // Additional distance for the edge
  style?: EdgeStyle // Style of the edge
  // Subgraphs are optional as well and might be complex to use
  subgraphToStart?: string // Subgraph to start
  subgraphsToEnd?: string[] // List of subgraphs to end
}

export const edges = {
  [Timelines.Official]: official,
  [Timelines.Triforce]: triforce,
  [Timelines.Lorulean]: lorulean,
  [Timelines.Geekery]: geekery,
  [Timelines.Absurd]: absurd,
  [Timelines.NewTimeline]: newTimeline
}
