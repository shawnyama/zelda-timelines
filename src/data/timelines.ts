import type { EdgeStyle } from './edge-decor'
import type { GameIds, Events, Eras } from './events'
import official from './timelines/official'
import triforce from './timelines/triforce'
import lorulean from './timelines/lorulean'
import geekery from './timelines/geekery'
import absurd from './timelines/absurd'
import celeste from './timelines/celeste'
import sabrblade from './timelines/sabrblade'
import foundingSplit from './timelines/founding-split'
// import debug from './timelines/debug'
// import newTimeline from './timelines/new'

// Order of options is alphabetical
export enum Timelines {
  Absurd = 'absurd',
  Celeste = 'celeste',
  FoundingSplit = 'founding-split',
  Geekery = 'geekery',
  Lorulean = 'lorulean',
  Official = 'official',
  Sabrblade = 'sabrblade',
  Triforce = 'triforce'
  // Debug = 'debug'
  // New = 'new'
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

export type Metadata = {
  timelineTitle: string
  timelineCreator: string | null
  submittedBy: string | null
  submittedOn: string
  lastUpdatedOn: string
  sources: { label: string; url: string | null }[]
  notes: string | null
}

export const timelineData: Record<Timelines, { metadata: Metadata; flowchart: Edge[] }> = {
  [Timelines.Absurd]: absurd,
  [Timelines.Celeste]: celeste,
  [Timelines.FoundingSplit]: foundingSplit,
  [Timelines.Geekery]: geekery,
  [Timelines.Lorulean]: lorulean,
  [Timelines.Official]: official,
  [Timelines.Sabrblade]: sabrblade,
  [Timelines.Triforce]: triforce
  // [Timelines.Debug]: debug
  // [Timelines.New]: newTimeline
}
