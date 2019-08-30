import {KeywordModel, FactionModel} from './keyword-model';

export const illuminatiKeywords: KeywordModel[] = [
  {
    component: '[SkillCheck]',
    keyword: 'Human Approach Skill Check at [Difficulty] [Proficiency], upgraded once',
    cost: -1,
    factionKeyword: true,
  },
  {
    component: '[Status]',
    keyword: 'Intelligence around an area [Range]',
    cost: -6,
    factionKeyword: true,
  },
  {
    component: '[Effect]',
    keyword: 'The target gains a Modifier Bonus equal to half his Human Concept Rank (Rounded Up) on Human Approach Skill Checks',
    cost: -20,
    factionKeyword: true,
    hybrid: ['[Target]']
  },
  {
    component: '[Trigger]',
    keyword: 'While the character\'s Patron Faction is the Illuminati Corporation, the character gains an effect',
    cost: -3,
    factionKeyword: true,
    hybrid: ['[Target]','[Duration]']
  },
];

export const eventideKeywords: KeywordModel[] = [
  {
    component: '[Trigger]',
    keyword: 'When [Target] loses any amount of Resolve',
    cost: -2,
    factionKeyword: true,
  },
  {
    component: '[Trigger]',
    keyword: 'When [Target] gains any amount of Resolve',
    cost: -2,
    factionKeyword: true,
  },
  {
    component: '[Trigger]',
    keyword: 'When any of user\'s Anima Traps are triggered',
    cost: 0,
    factionKeyword: true,
  },
  {
    component: '[Effect]',
    keyword: 'The character weaves an Anima Trap imbued with (Anima Weave). Set a narrative or mechanical condition that will set off the Trap. The character may keep laying Anima Traps up to his Arcane Concept Rank',
    cost: -8,
    factionKeyword: true,
    hybrid: ['[Target]','[Duration]','[Cooldown]']
  },
];

export const unitedKeywords: KeywordModel[] = [
  {
    component: '[Effect]',
    keyword: 'Becomes imbued with an (Anima Weave), triggering when targeted item is used',
    cost: -2,
    factionKeyword: true,
  },
  {
    component: '[Trigger]',
    keyword: 'When invoking this Anima Weave through an Artifact and [Trigger]',
    cost: -2,
    factionKeyword: true,
  },
  {
    component: '[Effect]',
    keyword: 'The character gains a Modifier Bonus equal to half his Divine Concept Rank (Rounded Up) whenever he uses an Artifact',
    cost: -18,
    factionKeyword: true,
    hybrid: ['[Target]']
  },
  {
    component: '[Status]',
    keyword: 'Vulnerability III: Increased [StaticValue] Damage by [Quantity] + half the character\'s Divine Concept Rank (Rounded Up) if the character is invoking through an Artifact',
    cost: -6,
    factionKeyword: true,
  },
]

export const edenKeywords: KeywordModel[] = [
  {
    component: '[Effect]',
    keyword: 'Gains [Quantity] [StaticValue]. Increase the Quantity by half if at half of the Maximum Static Value, or double the Quantity if at a quarter of the Maximum Static Value (All Values Rounded Up)',
    cost: -3,
    factionKeyword: true,
  },
  {
    component: '[Effect]',
    keyword: 'Dispels the effects of an Identified Anima Weave that confers a negative Status Effect immediately',
    cost: -4,
    factionKeyword: true,
  },
  {
    component: '[Trigger]',
    keyword: 'When [Target] is afflicted with a negative Status Condition or Anima Weave Effect',
    cost: -2,
    factionKeyword: true,
  },
  {
    component: '[Status]',
    keyword: 'Damage Reduction Shield equal to half the character\'s Primal Concept Rank (Rounded Up)',
    cost: -8,
    factionKeyword: true,
  },
]

export const transhumanistKeywords: KeywordModel[] = [
  {
    component: '[Trigger]',
    keyword: 'While the character has at least [Quantity] Anima Bionics equipped and active, the character gains an effect',
    cost: 0,
    factionKeyword: true,
    hybrid: ['[Target]','[Duration]']
  },
  {
    component: '[VariableQuantity]',
    keyword: 'Number of Anima Bionics equipped and active',
    cost: 0,
    factionKeyword: true,
  },
  {
    component: '[VariableQuantity]',
    keyword: 'Number of Anima Bionics equipped but deactivated',
    cost: 0,
    factionKeyword: true,
  },
  {
    component: '[Effect]',
    keyword: 'Maximum [StaticValue] increases by [Quantity] x 3 (Does not increase current Static Value)',
    cost: -2,
    factionKeyword: true,
  },
  {
    component: '[Duration]',
    keyword: 'For as long as the character has an active Anima Bionic equipped and active',
    cost: 1,
    factionKeyword: true,
  },
  {
    component: '[Cooldown]',
    keyword: 'May be triggered when an Anima Bionic is deactivated',
    cost: 2,
    factionKeyword: true,
  },
]

export const zaibatsuKeywords: KeywordModel[] = [
  {
    component: '[Effect]',
    keyword: 'Is restored back to 1 [StaticValue] if the target is dead. The character takes damage to that Static Value equal to the negative damage suffered by target',
    cost: -15,
    factionKeyword: true,
  },
  {
    component: '[Effect]',
    keyword: 'Is raised back to half his Health if he is Incapacitated',
    cost: -8,
    factionKeyword: true,
  },
  {
    component: '[Effect]',
    keyword: 'Is raised back to half his Resolve if he is Incapacitated',
    cost: -8,
    factionKeyword: true,
  },
  {
    component: '[Effect]',
    keyword: 'Loses [Quantity] [StaticValue], bypassing Barriers and Shields',
    cost: -4,
    factionKeyword: true,
  },
]

export const unaffiliatedKeywords: KeywordModel[] = [
  {
    component: '[Concept]',
    keyword: 'Any Concept',
    cost: -2,
    factionKeyword: true,
  },
  {
    component: '[Approach]',
    keyword: 'Any Approach',
    cost: -2,
    factionKeyword: true,
  },
  {
    component: '[VariableQuantity]',
    keyword: 'The character\'s current highest Static Value',
    cost: 0,
    factionKeyword: true,
  },
  {
    component: '[Trigger]',
    keyword: 'While the character remains Unaffiliated, the character gains an effect',
    cost: -3,
    factionKeyword: true,
    hybrid: ['[Target]','[Duration]']
  },
]

export const factions: FactionModel[] = [
  {
    factionName: 'The Illuminati Corporation',
    factionKeywords: illuminatiKeywords,
  },
  {
    factionName: 'The Eventide Summit',
    factionKeywords: eventideKeywords,
  },
  {
    factionName: 'The United Pantheons',
    factionKeywords: unitedKeywords,
  },
  {
    factionName: 'The Eden Project',
    factionKeywords: edenKeywords,
  },
  {
    factionName: 'The Transhumanist Movement',
    factionKeywords: transhumanistKeywords,
  },
  {
    factionName: 'The Oni Zaibatsu',
    factionKeywords: zaibatsuKeywords,
  },
  {
    factionName: 'The Unaffiliated',
    factionKeywords: unaffiliatedKeywords,
  },
];
