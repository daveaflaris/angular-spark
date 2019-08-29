export const coreTriggerKeywords = [
  {
    component: '[Trigger]',
    keyword: 'The character spends [Quantity] [StaticValue]',
    cost: 3,
  },
  {
    component: '[Trigger]',
    keyword: 'The character fails a [SkillCheck]',
    cost: 1,
  },
  {
    component: '[Trigger]',
    keyword: 'The character succeeds on a [SkillCheck]',
    cost: 1,
  },
  {
    component: '[Trigger]',
    keyword: 'As an Offense Action (the Effect must inflict damage)',
    cost: 1,
  },
  {
    component: '[Trigger]',
    keyword: 'As a Long Action',
    cost: 0,
  },
  {
    component: '[Trigger]',
    keyword: 'When [Target] gains at least [Quantity] [StaticValue]',
    cost: 0,
  },
  {
    component: '[Trigger]',
    keyword: 'When [Target] loses at least [Quantity] [StaticValue]',
    cost: 0,
  },
  {
    component: '[Trigger]',
    keyword: 'The character consumes a/an [Item]',
    cost: 0,
  },
  {
    component: '[Trigger]',
    keyword: '[Trigger] and [Trigger]',
    cost: 0,
  },
  {
    component: '[Trigger]',
    keyword: 'At the start of a [Period]',
    cost: -1,
  },
  {
    component: '[Trigger]',
    keyword: 'At the end of a [Period]',
    cost: -1,
  },
  {
    component: '[Trigger]',
    keyword: 'When (Anima Weave) is invoked by [Target]',
    cost: -1,
  },
  {
    component: '[Trigger]',
    keyword: 'After (Anima Weave) is invoked by [Target]',
    cost: -1,
  },
  {
    component: '[Trigger]',
    keyword: '[Trigger] or [Trigger]',
    cost: -1,
  },
  {
    component: '[Trigger]',
    keyword: 'When [Target] [Situation]',
    cost: -2,
  },
  {
    component: '[Trigger]',
    keyword: 'When [Target] [Effect]',
    cost: -2,
  },
  {
    component: '[Trigger]',
    keyword: 'When [Duration] expires',
    cost: -2,
  },
  {
    component: '[Trigger]',
    keyword: 'When an Anima Weave is invoked by [Target]',
    cost: -4,
  },
  {
    component: '[Trigger]',
    keyword: 'After an Anima Weave is invoked by [Target]',
    cost: -4,
  },

  // Hybrids
  {
    component: '[Trigger]',
    keyword: 'At any time, a target gains an effect permanently (Passive Anima Weave)',
    cost: -15,
    hybrid: ['[Duration]','[Cooldown]'],
  },
  {
    component: '[Trigger]',
    keyword: 'While [Target] [Situation] persists, a target gains an effect (Persisting Anima Weave)',
    cost: 0,
    hybrid: ['[Duration]']
  },
  {
    component: '[Trigger]',
    keyword: 'As a Long Action, Invoke a Wildweave',
    cost: 10,
    hybrid: ['[Target]','[Effect]','[Duration]','[Cooldown]'],
  },
  {
    component: '[Trigger]',
    keyword: '[Target] makes a [SkillCheck]. On a success, [Target] [Effect]',
    cost: 1,
    hybrid: ['[Target]', '[Effect]']
  },
  {
    component: '[Trigger]',
    keyword: '[Target] makes a [SkillCheck]. On a failure, [Target] [Effect]',
    cost: 1,
    hybrid: ['[Target]','[Effect]']
  },
  {
    component: '[Trigger]',
    keyword: '[Target] makes a [SkillCheck]. On a success, [Target] [Effect]. On a failure, [Target] [Effect]',
    cost: 0,
    hybrid: ['[Target]','[Effect]']
  },
]
