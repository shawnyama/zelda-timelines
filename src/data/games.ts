export enum TimelineNames {
  Official = 'official',
  Triforce = 'triforce',
  Lorulean = 'lorulean'
}

export type Link = {
  source: string
  target: string
}

export type GameNode = {
  name: string
  title: string
  platform: string[]
  isSpinOff: boolean
}

export type GameLinks = {
  official?: Link[]
  triforce?: Link[]
  lorulean?: Link[]
}

export const links: GameLinks = {
  official: [
    { source: 'skyward-sword', target: 'the-minish-cap' },
    { source: 'the-minish-cap', target: 'four-swords' },
    { source: 'four-swords', target: 'ocarina-of-time' },
    { source: 'ocarina-of-time', target: 'twilight-princess' },
    { source: 'ocarina-of-time', target: 'the-wind-waker' },
    { source: 'ocarina-of-time', target: 'majoras-mask' },
    { source: 'twilight-princess', target: 'four-swords-adventures' },
    { source: 'four-swords-adventures', target: 'the-legend-of-zelda' },
    { source: 'a-link-to-the-past', target: 'links-awakening' },
    { source: 'links-awakening', target: 'a-link-between-worlds' },
    { source: 'a-link-between-worlds', target: 'triforce-heroes' },
    { source: 'the-legend-of-zelda', target: 'the-adventure-of-link' },
    { source: 'the-adventure-of-link', target: 'a-link-to-the-past' },
    { source: 'a-link-to-the-past', target: 'links-awakening' },
    { source: 'links-awakening', target: 'a-link-between-worlds' },
    { source: 'a-link-between-worlds', target: 'triforce-heroes' },
    { source: 'the-legend-of-zelda', target: 'majoras-mask' },
    { source: 'majoras-mask', target: 'twilight-princess' },
    { source: 'twilight-princess', target: 'four-swords-adventures' },
    { source: 'the-wind-waker', target: 'phantom-hourglass' },
    { source: 'phantom-hourglass', target: 'spirit-tracks' },
    { source: 'the-wind-waker', target: 'hyrule-warriors' },
    { source: 'hyrule-warriors', target: 'cadence-of-hyrule' },
    { source: 'cadence-of-hyrule', target: 'breath-of-the-wild' },
    { source: 'breath-of-the-wild', target: 'age-of-calamity' },
    { source: 'breath-of-the-wild', target: 'tears-of-the-kingdom' }
  ]
}

export const nodes: Record<string, GameNode> = {
  'skyward-sword': {
    title: 'Skyward Sword',
    name: 'skyward-sword',
    platform: ['Wii', 'Nintendo Switch'],
    isSpinOff: false
  },
  'ocarina-of-time': {
    title: 'Ocarina of Time',
    name: 'ocarina-of-time',
    platform: ['Nintendo 64'],
    isSpinOff: false
  },
  'majoras-mask': {
    title: "Majora's Mask",
    name: 'majoras-mask',
    platform: ['Nintendo 64'],
    isSpinOff: false
  },
  'hyrule-warriors': {
    title: 'Hyrule Warriors',
    name: 'hyrule-warriors',
    platform: ['Wii U', 'Nintendo 3DS', 'Nintendo Switch'],
    isSpinOff: true
  },
  'twilight-princess': {
    title: 'Twilight Princess',
    name: 'twilight-princess',
    platform: ['GameCube', 'Wii'],
    isSpinOff: false
  },
  'links-crossbow-training': {
    title: "Link's Crossbow Training",
    name: 'links-crossbow-training',
    platform: ['Wii'],
    isSpinOff: true
  },
  'a-link-to-the-past': {
    title: 'A Link to the Past',
    name: 'a-link-to-the-past',
    platform: ['Super Nintendo (SNES)'],
    isSpinOff: false
  },
  'the-wind-waker': {
    title: 'The Wind Waker',
    name: 'the-wind-waker',
    platform: ['GameCube'],
    isSpinOff: false
  },
  'mdi:triforce': {
    title: 'Navi Trackers',
    name: 'mdi:triforce',
    platform: ['GameCube'],
    isSpinOff: true
  },
  'phantom-hourglass': {
    title: 'Phantom Hourglass',
    name: 'phantom-hourglass',
    platform: ['Nintendo DS'],
    isSpinOff: false
  },
  'spirit-tracks': {
    title: 'Spirit Tracks',
    name: 'spirit-tracks',
    platform: ['Nintendo DS'],
    isSpinOff: false
  },
  'the-minish-cap': {
    title: 'The Minish Cap',
    name: 'the-minish-cap',
    platform: ['Game Boy Advance'],
    isSpinOff: false
  },
  'four-swords': {
    title: 'Four Swords',
    name: 'four-swords',
    platform: ['Game Boy Advance'],
    isSpinOff: true
  },
  'four-swords-adventures': {
    title: 'Four Swords Adventures',
    name: 'four-swords-adventures',
    platform: ['GameCube'],
    isSpinOff: true
  },
  'a-link-between-worlds': {
    title: 'A Link Between Worlds',
    name: 'a-link-between-worlds',
    platform: ['Nintendo 3DS'],
    isSpinOff: true
  },
  'cadence-of-hyrule': {
    title: 'Cadence of Hyrule',
    name: 'cadence-of-hyrule',
    platform: ['Nintendo Switch'],
    isSpinOff: true
  },
  'triforce-heroes': {
    title: 'Triforce Heroes',
    name: 'triforce-heroes',
    platform: ['Nintendo 3DS'],
    isSpinOff: true
  },
  'oracle-of-seasons': {
    title: 'Oracle of Seasons',
    name: 'oracle-of-seasons',
    platform: ['Game Boy Color'],
    isSpinOff: true
  },
  'oracle-of-ages': {
    title: 'Oracle of Ages',
    name: 'oracle-of-ages',
    platform: ['Game Boy Color'],
    isSpinOff: true
  },
  'links-awakening': {
    title: "Link's Awakening",
    name: 'links-awakening',
    platform: ['Game Boy', 'Nintendo Switch'],
    isSpinOff: false
  },
  'the-legend-of-zelda': {
    title: 'Zelda I',
    name: 'the-legend-of-zelda',
    platform: ['Nintendo Entertainment System (NES)'],
    isSpinOff: false
  },
  'the-adventure-of-link': {
    title: 'Zelda II: The Adventure of Link',
    name: 'the-adventure-of-link',
    platform: ['Nintendo Entertainment System (NES)'],
    isSpinOff: false
  },
  'age-of-calamity': {
    title: 'Hyrule Warriors: Age of Calamity',
    name: 'age-of-calamity',
    platform: ['Nintendo Switch'],
    isSpinOff: true
  },
  'tears-of-the-kingdom': {
    title: 'Tears of the Kingdom',
    name: 'tears-of-the-kingdom',
    platform: ['Nintendo Switch'],
    isSpinOff: false
  }
}
