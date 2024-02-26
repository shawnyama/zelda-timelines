import type { LinkDesigns } from './link-designs'
import type { GameIds, Events, TimeSplitEvents, Eras } from './events'
import { official } from './timelines/official'
import { triforce } from './timelines/triforce'
import { lorulean } from './timelines/lorulean'
import { geekery } from './timelines/geekery'

export enum Timelines {
  Official = 'official',
  Triforce = 'triforce',
  Lorulean = 'lorulean',
  Geekery = 'geekery'
}

export type Link = {
  source: GameIds | Events | TimeSplitEvents | Eras
  target: GameIds | Events | TimeSplitEvents | Eras
  subgraphStart?: GameIds | Events | TimeSplitEvents | Eras
  subgraphEnd?: number
  label?: string
  linkDesign?: LinkDesigns
  distance?: number
}

export const links: {
  [Timelines.Official]: Link[]
  [Timelines.Triforce]: Link[]
  [Timelines.Lorulean]: Link[]
  [Timelines.Geekery]: Link[]
} = {
  [Timelines.Official]: official,
  [Timelines.Triforce]: triforce,
  [Timelines.Lorulean]: lorulean,
  [Timelines.Geekery]: geekery
}
