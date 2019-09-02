export const coreTriggerKeywords = [
  {
    component: '[Trigger]',
    keyword: 'As a Long Action, Spend [Quantity] [StaticValue]',
    cost: 3,
  },
  {
    component: '[Trigger]',
    keyword: 'As a Long Action, Succeed on a [SkillCheck]',
    cost: 1,
  },
  {
    component: '[Trigger]',
    keyword: 'As a Long Action, Fail on a [SkillCheck]',
    cost: 1,
  },
  {
    component: '[Trigger]',
    keyword: 'As a Long Action, Consume a/an [Item]',
    cost: 1,
  },
  {
    component: '[Trigger]',
    keyword: 'As an Offense (the Effect must inflict damage to a Static Value)',
    cost: 1
  },
  {
    component: '[Trigger]',
    keyword: 'As a Long Action',
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
    keyword: 'When [Target] [Condition]',
    cost: -2,
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
    keyword: 'As a Long Action, [Target] makes a [SkillCheck]. On a success, [Target] [Effect]',
    cost: 1,
    hybrid: ['[Target]', '[Effect]']
  },
  {
    component: '[Trigger]',
    keyword: 'As a Long Action, [Target] makes a [SkillCheck]. On a failure, [Target] [Effect]',
    cost: 1,
    hybrid: ['[Target]','[Effect]']
  },
  {
    component: '[Trigger]',
    keyword: 'As a Long Action, [Target] makes a [SkillCheck]. On a success, [Target] [Effect]. On a failure, [Target] [Effect]',
    cost: 0,
    hybrid: ['[Target]','[Effect]']
  },
]
