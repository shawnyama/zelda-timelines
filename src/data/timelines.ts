import type { EdgeStyle } from './edge-decor'
import type { GameIds, Events, Eras } from './events'
import { official } from './timelines/official'
import { triforce } from './timelines/triforce'
import { lorulean } from './timelines/lorulean'
import { geekery } from './timelines/geekery'
import { absurd } from './timelines/absurd'
// import { newTimeline } from './timelines/new-timeline'

export enum Timelines {
  Official = 'official',
  Triforce = 'triforce',
  Lorulean = 'lorulean',
  Geekery = 'geekery',
  Absurd = 'absurd'
  // NewTimeline = 'new-timeline'
}

export type Edge = {
  source: GameIds | Events | Eras
  target: GameIds | Events | Eras
  subgraphStart?: string
  subgraphEnd?: number
  label?: string
  style?: EdgeStyle
  extraDistance?: number
}

export const edges = {
  [Timelines.Official]: official,
  [Timelines.Triforce]: triforce,
  [Timelines.Lorulean]: lorulean,
  [Timelines.Geekery]: geekery,
  [Timelines.Absurd]: absurd
  // [Timelines.NewTimeline]: newTimeline
}
