export const coreTargetKeywords = [
  {
    component: '[Target]',
    keyword: '[Quantity] [Target]',
    cost: 0,
  },
  {
    component: '[Target]',
    keyword: 'Trigger Target',
    cost: 0,
  },
  {
    component: '[Target]',
    keyword: 'The character',
    cost: -1,
  },
  {
    component: '[Target]',
    keyword: 'An ally [Range] of [Target]',
    cost: -1,
  },
  {
    component: '[Target]',
    keyword: 'An enemy [Range] of [Target]',
    cost: -1,
  },
  {
    component: '[Target]',
    keyword: 'An ally / enemy [Range] of [Target]',
    cost: -1,
  },
  {
    component: '[Target]',
    keyword: 'An [Item] [Range] of [Target]',
    cost: -1,
  },
  {
    component: '[Target]',
    keyword: 'A random [Target]',
    cost: 1,
  },
  {
    component: '[Target]',
    keyword: 'An [Item] held by [Target]',
    cost: -1,
  },
  {
    component: '[Target]',
    keyword: 'A (Task) performed by [Target]',
    cost: -2,
  },
  {
    component: '[Target]',
    keyword: 'A [Range] area [Range] of [Target]',
    cost: -1,
  },
  {
    component: '[Target]',
    keyword: 'An ally with [Status]',
    cost: -1,
  },
  {
    component: '[Target]',
    keyword: 'An enemy with [Status]',
    cost: -1,
  },
  {
    component: '[Target]',
    keyword: '[Target] and/or [Target]',
    cost: -1,
  },
  {
    component: '[Target]',
    keyword: 'All [Target]',
    cost: -5,
  },
  {
    component: '[Target]',
    keyword: 'Random targets [Range] area centered around a point up to [Range] of [Target]',
    cost: 5,
  },
  {
    component: '[Target]',
    keyword: 'All enemies [Range] area centered around a point up to [Range] of [Target]',
    cost: -5,
  },
  {
    component: '[Target]',
    keyword: 'All allies [Range] area centered around a point up to [Range] of [Target]',
    cost: -5,
  },
  {
    component: '[Target]',
    keyword: 'All items [Range] area centered around a point up to [Range] of [Target]',
    cost: -5,
  },

  // Hybrids
  {
    component: '[Target]',
    keyword: '[Target] gains an [Effect] for a [Duration] (may add multiple times on an Anima Weave)',
    cost: 0,
    hybrid: ['[Effect]','[Duration]']
  },
  {
    component: '[Trigger]',
    keyword: '[Target] gains an [Effect]. (may add multiple times on an Anima Weave. The Duration must conform to all Effects listed.)',
    cost: 0,
    hybrid: ['[Effect]']
  },
]
