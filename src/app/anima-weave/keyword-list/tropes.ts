import {KeywordModel, TropeModel} from './keyword-model';

export const alfarKeywords: KeywordModel[] = [
  {
    component: '[Trigger]',
    keyword: 'The character succeeds on a Social Skill Check at [Difficulty] [Proficiency]',
    cost: 1,
    tropeKeyword: true,
  },
  {
    component: '[Effect]',
    keyword: 'Gains a Modifier Bonus equal to half the character\'s Arcane Concept Rank (Rounded Up) to its Social Actions',
    cost: -18,
    tropeKeyword: true,
  },
  {
    component: '[Effect]',
    keyword: 'Gains a Modifier Penalty equal to half the character\'s Primal Concept Rank (Rounded Up) to its Social Actions',
    cost: -18,
    tropeKeyword: true,
  },
  {
    component: '[Duration]',
    keyword: 'Until the target spends [Quantity] Anima Points to end the effect (The Anima Weave must target an enemy)',
    cost: -2,
    tropeKeyword: true,
  },
  {
    component: '[Status]',
    keyword: 'Entranced: Target is forced to turn his social attention to the character unless he spends [Quantity] Resolve each time he attempts to interact with another character or leave the character\'s presence',
    cost: -4,
    tropeKeyword: true,
  },
]

export const asceticKeywords: KeywordModel[] = [
  {
    component: '[Trigger]',
    keyword: 'The character spends [Quantity] Serenity',
    cost: 3,
    tropeKeyword: true,
  },
  {
    component: '[Situation]',
    keyword: 'Is at full Serenity',
    cost: 1,
    tropeKeyword: true,
  },
  {
    component: '[StaticValue]',
    keyword: 'Serenity',
    cost: 0,
    tropeKeyword: true,
  },
  {
    component: '[Effect]',
    keyword: 'The character gains [Quantity] Serenity whenever he succeeds on a Divine Skill Check',
    cost: -7,
    tropeKeyword: true,
    hybrid: ['[Target]']
  },
];

export const augmentedKeywords: KeywordModel[] = [
  {
    component: '[Target]',
    keyword: 'The character',
    cost: 0,
    tropeKeyword: true,
  },
  {
    component: '[Trigger]',
    keyword: 'When the character receives a positive Status Effect from an Anima Weave',
    cost: 0,
    tropeKeyword: true,
  },
  {
    component: '[Trigger]',
    keyword: 'While the character is afflicted with a positive Status Effect, the character gains an effect',
    cost: 2,
    tropeKeyword: true,
    hybrid: ['[Target]', '[Duration]'],
  },
  {
    component: '[Effect]',
    keyword: 'Gains a Modifier Bonus equal to half the character\'s Construct Concept Rank (Rounded Up) to its (Task) Actions',
    cost: -17,
    tropeKeyword: true,
  },
  {
    component: '[VariableQuantity]',
    keyword: 'Number of positive Status Effects the character currently has',
    cost: 0,
    tropeKeyword: true,
  },
];

export const cambionKeywords: KeywordModel[] = [
  {
    component: '[Trigger]',
    keyword: 'When an enemy within Short Range of the character takes damage to [StaticValue]',
    cost: -5,
    tropeKeyword: true,
  },
  {
    component: '[Trigger]',
    keyword: 'The character succeeds on an Infernal Skill Check at [Difficulty] [Proficiency]',
    cost: 1,
    tropeKeyword: true,
  },
  {
    component: '[Trigger]',
    keyword: 'The character fails on a non-Infernal Skill Check at [Difficulty] [Proficiency]',
    cost: 0,
    tropeKeyword: true,
  },
  {
    component: '[Duration]',
    keyword: 'For as long as the character keeps making Infernal Skill Checks',
    cost: 0,
    tropeKeyword: true,
  },
]

export const cantorKeywords: KeywordModel[] = [
  {
    component: '[Trigger]',
    keyword: 'When the character sings',
    cost: 1,
    tropeKeyword: true,
  },
  {
    component: '[Target]',
    keyword: 'All allies that can hear the character within Short Range',
    cost: -4,
    tropeKeyword: true,
  },
  {
    component: '[Target]',
    keyword: 'All enemies that can hear the character within Short Range',
    cost: -4,
    tropeKeyword: true,
  },
  {
    component: '[Duration]',
    keyword: 'For as long as the character continues to sing or perform as a Long Action',
    cost: 1,
    tropeKeyword: true,
  },
]

export const demigodKeywords: KeywordModel[] = [
  {
    component: '[Trigger]',
    keyword: 'The character succeeds on an (Epic Concept) Skill Check at [Difficulty] [Proficiency]',
    cost: 1,
    tropeKeyword: true,
  },
  {
    component: '[VariableQuantity]',
    keyword: 'The character\'s Epic Concept Rank',
    cost: 0,
    tropeKeyword: true,
  },
  {
    component: '[StaticValue]',
    keyword: 'Health and Resolve',
    cost: -3,
    tropeKeyword: true,
  },
  {
    component: '[Status]',
    keyword: 'Protective Barrier with [Quantity] [StaticValue]',
    cost: -1,
    tropeKeyword: true,
  },
  {
    component: '[Status]',
    keyword: 'Damage Reduction Shield for ([Quantity] / 2, Rounded Up) [StaticValue]',
    cost: -5,
    tropeKeyword: true,
  },
]

export const doppelgangerKeywords: KeywordModel[] = [
  {
    component: '[Effect]',
    keyword: 'Identifies up to [Quantity] active Anima Weaves in effect on [Target]',
    cost: -2,
    tropeKeyword: true,
  },
  {
    component: '[Effect]',
    keyword: 'The effect of the last Anima Weave inflicted on the character',
    cost: -4,
    tropeKeyword: true,
  },
  {
    component: '[Effect]',
    keyword: 'Creates a copy of [Target]. It is under the character\'s control and may only do one action before it expires. Duplicates all traits but dies in one hit from damage or dispelling Anima Weaves',
    cost: -11,
    tropeKeyword: true,
    hybrid: ['[Target]','[Duration]']
  },
  {
    component: '[Effect]',
    keyword: 'The character transforms into a copy of [Target]. Duplicates all traits and Static Values of the target, but the character retains his Anima Weaves (Cannot target characters of a higher Tier)',
    cost: -16,
    tropeKeyword: true,
    hybrid: ['[Target]']
  },
]

export const dreamweaverKeywords: KeywordModel[] = [
  {
    component: '[Status]',
    keyword: 'Reduced cost of invoked Anima Weaves by [Quantity] [StaticValue]',
    cost: -7,
    tropeKeyword: true,
  },
  {
    component: '[Status]',
    keyword: 'Reduced committed Anima of Anima Weaves by [Quantity] [Anima Points]',
    cost: -10,
    tropeKeyword: true,
  },
  {
    component: '[Effect]',
    keyword: 'Loses [Quantity] Resolve. If target\'s Resolve becomes 0, he is Incapacitated as if his Health were reduced to 0 (Physically Knocked Out)',
    cost: -3,
    tropeKeyword: true,
  },
  {
    component: '[Quantity]',
    keyword: '[FixedQuantity-AnimaWeavePoints]',
    cost: -3,
    tropeKeyword: true,
  },
  {
    component: '[Quantity]',
    keyword: '[VariableQuantity-AnimaWeavePoints]',
    cost: -6,
    tropeKeyword: true,
  },
  {
    component: '[Status]',
    keyword: 'Increased Anima Weave Points of Quickweaves invoked by [Quantity] Anima Weave Points',
    cost: -10,
    tropeKeyword: true,
  },
  {
    component: '[Effect]',
    keyword: '[Target] gains the ability to invoke Quickweaves with 7 Anima Weave Points (Single Targets only). The targets gain access to the character\'s Anima Weave Component keywords',
    cost: -10,
    tropeKeyword: true,
    hybrid: ['[Target]']
  },
]

export const druidKeywords: KeywordModel[] = [
  {
    component: '[Trigger]',
    keyword: 'While the character is outdoors, the character gains an effect',
    cost: -2,
    tropeKeyword: true,
  },
  {
    component: '[Target]',
    keyword: 'A [Range] outdoor area [Range] of the character',
    cost: 1,
    tropeKeyword: true,
  },
  {
    component: '[Target]',
    keyword: 'All allies [Range] of the character',
    cost: -5,
    tropeKeyword: true,
  },
  {
    component: '[Target]',
    keyword: 'All enemies [Range] of the character',
    cost: -5,
    tropeKeyword: true,
  },
  {
    component: '[Item]',
    keyword: 'Non-Tiered Plant or Earthen Items (Leaves, Plants, Rocks, Soil, etc), at least a fistful in quantity',
    cost: 1,
    tropeKeyword: true,
  },
  {
    component: '[Range]',
    keyword: 'Short Range (Outdoors)',
    cost: 0,
    tropeKeyword: true,
  },
  {
    component: '[Range]',
    keyword: 'Long Range (Outdoors)',
    cost: -2,
    tropeKeyword: true,
  },
  {
    component: '[SkillCheck]',
    keyword: 'Primal Skill Check at [Difficulty] [Proficiency]',
    cost: 0,
    tropeKeyword: true,
  },
]

export const dwarfKeywords: KeywordModel[] = [
  {
    component: '[Effect]',
    keyword: 'Conjures [Quantity] [Item]s',
    cost: -2,
    tropeKeyword: true,
  },
  {
    component: '[Effect]',
    keyword: 'Becomes imbued with (Anima Weave), triggering when targeted item is used',
    cost: -2,
    tropeKeyword: true,
  },
  {
    component: '[Effect]',
    keyword: 'Destroys targeted [Item] and renders it unusable',
    cost: -2,
    tropeKeyword: true,
  },
  {
    component: '[Effect]',
    keyword: 'Repairs destroyed [Item] and allows it to be used once again',
    cost: -2,
    tropeKeyword: true,
  },
  {
    component: '[Item]',
    keyword: 'Minor Item',
    cost: -6,
    tropeKeyword: true,
  },
  {
    component: '[Item]',
    keyword: 'Average Item',
    cost: -14,
    tropeKeyword: true,
  },
  {
    component: '[Item]',
    keyword: 'Exceptional Item',
    cost: -22,
    tropeKeyword: true,
  },
  {
    component: '[Status]',
    keyword: 'Protective Barrier with [Quantity] [StaticValue]',
    cost: 0,
    tropeKeyword: true,
  },
  {
    component: '[Status]',
    keyword: 'Damage Reduction Shield for ([Quantity] / 2, Rounded Up) [StaticValue]',
    cost: -4,
    tropeKeyword: true,
  },
]

export const elementalKeywords: KeywordModel[] = [
  {
    component: '[Trigger]',
    keyword: 'The character releases an [Attunement]',
    cost: 3,
    tropeKeyword: true,
  },
  {
    component: '[Trigger]',
    keyword: 'When the character has at least three [Attunement]',
    cost: 6,
    tropeKeyword: true,
  },
  {
    component: '[Trigger]',
    keyword: 'When the character has an attunement to every element',
    cost: 10,
    tropeKeyword: true,
  },
  {
    component: '[Effect]',
    keyword: '[Effect], and then again an [Attunement]',
    cost: -2,
    tropeKeyword: true,
  },
  {
    component: '[VariableQuantity]',
    keyword: 'Number of Attunements the character has',
    cost: 0,
    tropeKeyword: true,
  },
]

export const faeKeywords: KeywordModel[] = [
  {
    component: '[Trigger]',
    keyword: 'When the character\'s illusion is broken (the Anima Weave did not expire)',
    cost: -2,
    tropeKeyword: true,
  },
  {
    component: '[Status]',
    keyword: 'Illusion that requires a [SkillCheck] to pierce',
    cost: -4,
    tropeKeyword: true,
  },
  {
    component: '[Trigger]',
    keyword: 'While the character is disguised by an illusion, the character gains an effect',
    cost: -6,
    tropeKeyword: true,
    hybrid: ['[Target]','[Duration]']
  },
  {
    component: '[Effect]',
    keyword: 'The character gains a Modifier Bonus equal to half his Arcane Concept Rank (Rounded Up) on Deception Rolls',
    cost: -18,
    tropeKeyword: true,
    hybrid: ['[Target]']
  },
]

export const gnosticKeywords: KeywordModel[] = [
  {
    component: '[Trigger]',
    keyword: 'When the character scores a critical hit with [Quantity] dice or more (Quantity must be a Fixed Quantity at least 2)',
    cost: 0,
    tropeKeyword: true,
  },
  {
    component: '[Trigger]',
    keyword: 'When the character incurs a botch with [Quantity] dice or more (Quantity must be a Fixed Quantity at least 2)',
    cost: 0,
    tropeKeyword: true,
  },
  {
    component: '[Trigger]',
    keyword: 'When the character invokes a Wildweave',
    cost: 5,
    tropeKeyword: true,
  },
  {
    component: '[VariableQuantity]',
    keyword: 'A random d8 value',
    cost: 0,
    tropeKeyword: true,
  },
  {
    component: '[Target]',
    keyword: 'A random [Target]',
    cost: 1,
    tropeKeyword: true,
  },
  {
    component: '[Target]',
    keyword: 'Random targets in an area centered around a point up to [Range] of [Target]',
    cost: 0,
    tropeKeyword: true,
  },
  {
    component: '[Target]',
    keyword: '[Quantity] random targets [Range] of [Target]',
    cost: 12,
    tropeKeyword: true,
  },
  {
    component: '[Effect]',
    keyword: 'A random effect happens (make a list of Effects)',
    cost: 0,
    tropeKeyword: true,
  },
]

export const golemKeywords: KeywordModel[] = [
  {
    component: '[Trigger]',
    keyword: 'The character succeeds on an Arcane Skill Check and on a Construct Skill Check, both at [Difficulty] [Proficiency]',
    cost: 0,
    tropeKeyword: true,
  },
  {
    component: '[Effect]',
    keyword: 'Loses [Quantity] Health to gain an amount of Anima Points equal to quantity spent',
    cost: -7,
    tropeKeyword: true,
  },
  {
    component: '[StaticValue]',
    keyword: 'Anima',
    cost: -2,
    tropeKeyword: true,
  },
  {
    component: '[Effect]',
    keyword: 'The character gains a Modifier Bonus equal to half his Construct Concept Rank (Rounded Up) on his Arcane Skill Checks',
    cost: -19,
    tropeKeyword: true,
    hybrid: ['[Target]']
  },
  {
    component: '[Effect]',
    keyword: 'The character gains a Modifier Bonus equal to half his Arcane Concept Rank (Rounded Up) on his Construct Skill Checks',
    cost: -19,
    tropeKeyword: true,
    hybrid: ['[Target]']
  },
]

export const hermeticKeywords: KeywordModel[] = [
  {
    component: '[Effect]',
    keyword: 'The character draws [Quantity] Arcana Cards',
    cost: -3,
    tropeKeyword: true,
    hybrid: ['[Target]']
  },
  {
    component: '[Effect]',
    keyword: 'The character returns [Quantity] Arcana Cards to the Arcana Deck',
    cost: -3,
    tropeKeyword: true,
    hybrid: ['[Target]']
  },
  {
    component: '[Trigger]',
    keyword: 'The character spreads a full Arcana. Cooldown once per turn.',
    cost: -10,
    tropeKeyword: true,
    hybrid: ['[Target]','[Effect]','[Duration]','[Cooldown]']
  },
  {
    component: '[Trigger]',
    keyword: 'When the character spreads a full Arcana',
    cost: -3,
    tropeKeyword: true,
  },
  {
    component: '[VariableQuantity]',
    keyword: 'Club Suit Cards Drawn',
    cost: 0,
    tropeKeyword: true,
  },
  {
    component: '[VariableQuantity]',
    keyword: 'Spade Suit Cards Drawn',
    cost: 0,
    tropeKeyword: true,
  },
  {
    component: '[VariableQuantity]',
    keyword: 'Heart Suit Cards Drawn',
    cost: 0,
    tropeKeyword: true,
  },
  {
    component: '[VariableQuantity]',
    keyword: 'Diamond Suit Cards Drawn',
    cost: 0,
    tropeKeyword: true,
  },
]

export const humanKeywords: KeywordModel[] = [
  {
    component: '[Trigger]',
    keyword: 'When the character fails a Skill Check',
    cost: -2,
    tropeKeyword: true,
  },
  {
    component: '[VariableQuantity]',
    keyword: 'The character\'s highest Awakened Concept Rank',
    cost: 0,
    tropeKeyword: true,
  },
  {
    component: '[SkillCheck]',
    keyword: '[Concept] Approach Skill Check at [Difficulty] [Proficiency] (Designate an Awakened Concept)',
    cost: -1,
    tropeKeyword: true,
  },
  {
    component: '[SkillCheck]',
    keyword: 'Awakened Approach Skill Check at [Difficulty] [Proficiency], upgraded once',
    cost: -1,
    tropeKeyword: true,
  },
  {
    component: '[Trigger]',
    keyword: 'While the character has no other positive effects, the character gains an effect',
    cost: -2,
    tropeKeyword: true,
    hybrid: ['[Target]','[Duration]']
  },
  {
    component: '[Trigger]',
    keyword: 'While the character has at least one negative effect, the character gains an effect',
    cost: -2,
    tropeKeyword: true,
    hybrid: ['[Target]','[Duration]']
  },
]

export const jagdKeywords: KeywordModel[] = [
  {
    component: '[Trigger]',
    keyword: 'While the character\'s Bestial Companions are alive and [Range] of [Target], the target gains an effect',
    cost: -4,
    tropeKeyword: true,
    hybrid: ['[Target]','[Duration]']
  },
  {
    component: '[NPC]',
    keyword: 'Bestial Companion',
    cost: -4,
    tropeKeyword: true,
  },
  {
    component: '[Target]',
    keyword: 'Target attacked by a Bestial Companion owned by the character',
    cost: 0,
    tropeKeyword: true,
  },
  {
    component: '[Duration]',
    keyword: 'While the character\'s Bestial Companions are present and alive',
    cost: -3,
    tropeKeyword: true,
  },
]

export const lichKeywords: KeywordModel[] = [
  {
    component: '[Item]',
    keyword: 'The character\'s Phylactery',
    cost: 0,
    tropeKeyword: true,
  },
  {
    component: '[Trigger]',
    keyword: 'When the character\'s Health (Physical Body) reaches 0',
    cost: 0,
    tropeKeyword: true,
  },
  {
    component: '[Trigger]',
    keyword: 'The Lich creates another Phylactery for his soul',
    cost: -10,
    tropeKeyword: true,
    hybrid: ['[Target]','[Effect]','[Duration]','[Cooldown]']
  },
  {
    component: '[Effect]',
    keyword: 'Is raised back to [Quantity] Health if Incapacitated. Target suffers a Modifier Penalty to his Skill Checks equal to half the character\'s Infernal Concept Rank (Rounded Up) for the rest of the encounter',
    cost: -5,
    tropeKeyword: true,
    hybrid: ['[Duration]']
  },
]

export const logosKeywords: KeywordModel[] = [
  {
    component: '[StaticValue]',
    keyword: 'Ethos',
    cost: 0,
    tropeKeyword: true,
  },
  {
    component: '[StaticValue]',
    keyword: 'Pathos',
    cost: 0,
    tropeKeyword: true,
  },
  {
    component: '[StaticValue]',
    keyword: 'Logos',
    cost: 0,
    tropeKeyword: true,
  },
  {
    component: '[Effect]',
    keyword: 'Gains Ethos, Pathos, or Logos equal to number of successes gained, in any combination',
    cost: -4,
    tropeKeyword: true,
  },
  {
    component: '[Effect]',
    keyword: 'The character spends [Quantity] Ethos: target adds a number of dice to his next Human or Primal Skill Check equal to the amount spent',
    cost: -2,
    tropeKeyword: true,
  },
  {
    component: '[Effect]',
    keyword: 'The character spends [Quantity] Pathos: target adds a number of dice to his next Divine or Infernal Skill Check equal to the amount spent',
    cost: -2,
    tropeKeyword: true,
  },
  {
    component: '[Effect]',
    keyword: 'The character spends [Quantity] Logos: target adds a number of dice to his next Arcane or Construct Skill Check equal to the amount spent',
    cost: -2,
    tropeKeyword: true,
  },
  {
    component: '[Effect]',
    keyword: 'The character spends 1 Ethos and Pathos: target upgrades its [Dicepool] for its next [SkillCheck] and gains [Quantity] Health',
    cost: -6,
    tropeKeyword: true,
  },
  {
    component: '[Effect]',
    keyword: 'The character spends 1 Ethos and Logos: target upgrades its [Dicepool] for its next [SkillCheck] and gains [Quantity] Resolve',
    cost: -6,
    tropeKeyword: true,
  },
  {
    component: '[Effect]',
    keyword: 'The character spends 1 Pathos and Logos: target upgrades its [Dicepool] for its next [SkillCheck] and gains [Quantity] Anima',
    cost: -8,
    tropeKeyword: true,
  },
  {
    component: '[Effect]',
    keyword: 'The character spends [Quantity] Ethos, Pathos, and Logos: target gains a Modifier Bonus to all Actions equal to the amount spent',
    cost: -12,
    tropeKeyword: true,
  },
]

export const magiKeywords: KeywordModel[] = [
  {
    component: '[SkillCheck]',
    keyword: 'Arcane Skill Check at [Difficulty] [Proficiency]',
    cost: 0,
    tropeKeyword: true,
  },
  {
    component: '[VariableQuantity]',
    keyword: 'The character\'s Arcane Concept Rank',
    cost: 0,
    tropeKeyword: true,
  },
  {
    component: '[Effect]',
    keyword: 'Invokes (Anima Weave) immediately, bypassing normal triggers',
    cost: -3,
    tropeKeyword: true,
  },
  {
    component: '[Effect]',
    keyword: 'Identifies up to [Quantity] Anima Weaves used by or used on [Target] within the last turn',
    cost: -3,
    tropeKeyword: true,
  },
  {
    component: '[Effect]',
    keyword: 'Immediately Dispels the effects of an Anima Weave that the character has identified on the target',
    cost: -5,
    tropeKeyword: true,
  },
  {
    component: '[Status]',
    keyword: 'Anima Curtain: Blocks [Quantity] Identified Anima Weaves',
    cost: -7,
    tropeKeyword: true,
  },
  {
    component: '[Status]',
    keyword: 'Anima Wall: Blocks [Quantity] Anima Weaves',
    cost: -9,
    tropeKeyword: true,
  },
]

export const nephilimKeywords: KeywordModel[] = [
  {
    component: '[Trigger]',
    keyword: 'The character succeeds on a Divine Skill Check and on an Infernal Skill Check, both at [Difficulty] [Proficiency]',
    cost: 0,
    tropeKeyword: true,
  },
  {
    component: '[Trigger]',
    keyword: 'While the character is above half his Maximum Health, the character gains an effect',
    cost: 1,
    tropeKeyword: true,
    hybrid: ['[Target]','[Duration]']
  },
  {
    component: '[Trigger]',
    keyword: 'While the character is below half his Maximum Resolve, the character gains an effect',
    cost: 1,
    tropeKeyword: true,
    hybrid: ['[Target]','[Duration]']
  },
  {
    component: '[Trigger]',
    keyword: 'While the character is above half his Maximum Health and below half his Maximum Resolve, the character gains an effect',
    cost: 3,
    tropeKeyword: true,
    hybrid: ['[Target]','[Duration]']
  },
  {
    component: '[Effect]',
    keyword: 'Loses [Quantity] Resolve to gain an amount of Health equal to half of the quantity spent (Rounded Down)',
    cost: -6,
    tropeKeyword: true,
  },
]

export const ninjaKeywords: KeywordModel[] = [
  {
    component: '[Trigger]',
    keyword: 'As a Long Action, while having Stealth',
    cost: -5,
    tropeKeyword: true,
  },
  {
    component: '[Item]',
    keyword: 'Ninja Tools (Non-Tiered Items)',
    cost: 2,
    tropeKeyword: true,
  },
  {
    component: '[Status]',
    keyword: 'Stealth that requires a [Skill Check] to pierce',
    cost: -4,
    tropeKeyword: true,
  },
  {
    component: '[Trigger]',
    keyword: 'While the character has Stealth, the character gains an effect',
    cost: -6,
    tropeKeyword: true,
    hybrid: ['[Target]','[Duration]']
  },
  {
    component: '[Effect]',
    keyword: 'The character creates a copy of himself. It is under his control and may only do one action before it expires. Duplicates all traits but dies in one hit from damage or dispelling Anima Weaves',
    cost: -13,
    tropeKeyword: true,
  },
]

export const ogreKeywords: KeywordModel[] = [
  {
    component: '[Task]',
    keyword: 'Attack',
    cost: 2,
    tropeKeyword: true,
  },
  {
    component: '[Quantity]',
    keyword: '[FixedQuantity-StaticValue] Damage',
    cost: -1,
    tropeKeyword: true,
  },
  {
    component: '[Quantity]',
    keyword: '[VariableQuantity-StaticValue] Damage',
    cost: -2,
    tropeKeyword: true,
  },
  {
    component: '[Trigger]',
    keyword: 'As an Offense Action (the Effect must inflict damage)',
    cost: 3,
    tropeKeyword: true,
  },
  {
    component: '[Effect]',
    keyword: 'Loses [Quantity] [StaticValue]',
    cost: -1,
    tropeKeyword: true,
  },
  {
    component: '[Duration]',
    keyword: 'For as long as the character keeps making Offenses',
    cost: 1,
    tropeKeyword: true,
  },
]

export const phantomKeywords: KeywordModel[] = [
  {
    component: '[Effect]',
    keyword: 'The character gains Corporeal Form: during this state, the character can physically interact with his surroundings (the Incorporeal Form Status is removed)',
    cost: -8,
    tropeKeyword: true,
    hybrid: ['[Target]']
  },
  {
    component: '[Effect]',
    keyword: 'The character gains Incorporeal Form: during this state, the character may pass through his surroundings (the Corporeal Form Status is removed)',
    cost: -8,
    tropeKeyword: true,
    hybrid: ['[Target]']
  },
  {
    component: '[Trigger]',
    keyword: 'While the character has Incorporeal Form and for as long as the character remains in Incorporeal Form, a target gains an effect',
    cost: -6,
    tropeKeyword: true,
    hybrid: ['[Duration]']
  },
  {
    component: '[Effect]',
    keyword: 'The character possesses a single [Target], blending the character\'s Anima with its own. The character gains Intelligence in a Short Range area around the target. The character may end this effect at any time and must have Incorporeal Form to begin with',
    cost: -4,
    tropeKeyword: true,
  },
  {
    component: '[Target]',
    keyword: 'The Phantom\'s Host (the possessed target)',
    cost: -1,
    tropeKeyword: true,
  },
]

export const psychicKeywords: KeywordModel[] = [
  {
    component: '[Effect]',
    keyword: 'Is moved to a position within [Range]',
    cost: 0,
    tropeKeyword: true,
  },
  {
    component: '[Effect]',
    keyword: 'Make a Contested [SkillCheck] against target. On a success, control the target on its next turn',
    cost: -20,
    tropeKeyword: true,
  },
  {
    component: '[Effect]',
    keyword: 'A willing ally acts again in place of your turn with no Exhaustion Penalties applied',
    cost: -15,
    tropeKeyword: true,
    hybrid: ['[Target]','[Duration]']
  },
  {
    component: '[Status]',
    keyword: 'Knocked Prone',
    cost: -3,
    tropeKeyword: true,
  },
  {
    component: '[Status]',
    keyword: 'Restrained',
    cost: -5,
    tropeKeyword: true,
  },
  {
    component: '[Status]',
    keyword: 'Stunned',
    cost: -7,
    tropeKeyword: true,
  },
]

export const seraphimKeywords: KeywordModel[] = [
  {
    component: '[Effect]',
    keyword: 'Maximum [StaticValue] increases by [Quantity] x 5 (Does not increase current Static Value)',
    cost: -4,
    tropeKeyword: true,
  },
  {
    component: '[Effect]',
    keyword: 'Maximum [StaticValue] decreases by [Quantity] x 3 (May decrease current Static Value)',
    cost: -6,
    tropeKeyword: true,
  },
  {
    component: '[SkillCheck]',
    keyword: 'Contested Divine Skill Check against [Target]\'s Infernal Skill Check',
    cost: 0,
    tropeKeyword: true,
  },
  {
    component: '[Effect]',
    keyword: 'The character gains a Modifier Bonus equal to half the [Target]\'s Infernal Concept Rank (Rounded Up) on his Divine Skill Checks',
    cost: -19,
    tropeKeyword: true,
    hybrid: ['[Target]']
  },
  {
    component: '[Effect]',
    keyword: '[Target] gains a Modifier Penalty equal to half the character\'s Divine Concept Rank (Rounded Up) on its Infernal Skill Checks',
    cost: -19,
    tropeKeyword: true,
    hybrid: ['[Target]']
  },
]

export const sibylKeywords: KeywordModel[] = [
  {
    component: '[Effect]',
    keyword: 'The character may immediately ask the GM [Quantity] questions about upcoming events in the Session',
    cost: -17,
    tropeKeyword: true,
    hybrid: ['[Target]','[Duration]']
  },
  {
    component: '[Effect]',
    keyword: 'Changes target of next Anima Weave that the target invokes to [Target]',
    cost: -6,
    tropeKeyword: true,
  },
  {
    component: '[Effect]',
    keyword: 'May reroll once its next [Quantity] Skill Checks and take the better result',
    cost: -6,
    tropeKeyword: true,
  },
  {
    component: '[Effect]',
    keyword: 'May reroll once its next [Quantity] Skill Checks and take the worse result',
    cost: -6,
    tropeKeyword: true,
  },
  {
    component: '[Status]',
    keyword: 'Destined: Target\'s Anima is bound to the character (referred to as the Destined)',
    cost: -6,
    tropeKeyword: true,
  },
  {
    component: '[Target]',
    keyword: 'The Destined',
    cost: -1,
    tropeKeyword: true,
  },
]

export const summonerKeywords: KeywordModel[] = [
  {
    component: '[Trigger]',
    keyword: 'While the character\'s summoned ally is alive and [Range] of [Target]',
    cost: -2,
    tropeKeyword: true,
  },
  {
    component: '[Effect]',
    keyword: 'Summons [Quantity] ally [NPC]s',
    cost: -5,
    tropeKeyword: true,
  },
  {
    component: '[Effect]',
    keyword: 'Conjures [Quantity] [Item]s',
    cost: -3,
    tropeKeyword: true,
  },
  {
    component: '[Target]',
    keyword: 'An [NPC] [Range] of [Target]',
    cost: 0,
    tropeKeyword: true,
  },
  {
    component: '[Duration]',
    keyword: 'For as long as the character has a summoned ally',
    cost: -2,
    tropeKeyword: true,
  },
  {
    component: '[Effect]',
    keyword: 'An [NPC] [Range] of [Target] loses [StaticValue] in place of [Target]',
    cost: -5,
    tropeKeyword: true,
    hybrid: ['[Target]']
  },
  {
    component: '[Item]',
    keyword: 'Minor Item',
    cost: -7,
    tropeKeyword: true,
  },
  {
    component: '[Item]',
    keyword: 'Average Item',
    cost: -15,
    tropeKeyword: true,
  },
  {
    component: '[Item]',
    keyword: 'Exceptional Item',
    cost: -23,
    tropeKeyword: true,
  },
  {
    component: '[NPC]',
    keyword: 'Extra',
    cost: 2,
    tropeKeyword: true,
  },
  {
    component: '[NPC]',
    keyword: 'Critter',
    cost: -8,
    tropeKeyword: true,
  },
  {
    component: '[NPC]',
    keyword: 'Creature',
    cost: -18,
    tropeKeyword: true,
  },
]

export const syntheticKeywords: KeywordModel[] = [
  {
    component: '[Trigger]',
    keyword: 'While the character is exposed to a polluted environment, the character gains an effect',
    cost: 0,
    tropeKeyword: true,
    hybrid: ['[Target]','[Duration]']
  },
  {
    component: '[Trigger]',
    keyword: 'While the character is afflicted with a negative Status Effect, the character gains an effect',
    cost: 8,
    tropeKeyword: true,
    hybrid: ['[Target]','[Duration]']
  },
  {
    component: '[Item]',
    keyword: 'Non-Tiered Polluted Items (Garbage, Polluted Substances, etc), at least a fistful in quantity',
    cost: 2,
    tropeKeyword: true,
  },
  {
    component: '[Effect]',
    keyword: 'Loses an existing Status Effect (your choice)',
    cost: -8,
    tropeKeyword: true,
  },
  {
    component: '[Target]',
    keyword: 'A polluted area [Range] of [Target]',
    cost: 1,
    tropeKeyword: true,
  },
]

export const technomancerKeywords: KeywordModel[] = [
  {
    component: '[Trigger]',
    keyword: 'The character uses a digital device (smartphone, laptop, etc) as part of his Long Action to invoke this Weave',
    cost: 4,
    tropeKeyword: true,
  },
  {
    component: '[SkillCheck]',
    keyword: 'Hacking Skill Check at [Difficulty] [Proficiency]',
    cost: 0,
    tropeKeyword: true,
  },
  {
    component: '[Item]',
    keyword: 'Non-Tiered Technological gadgets (Computers, Smartphones, Laptops, etc)',
    cost: 2,
    tropeKeyword: true,
  },
  {
    component: '[Duration]',
    keyword: 'For as long as the character continues to use a digital device to supplement his Actions',
    cost: 1,
    tropeKeyword: true,
  },
]

export const temporisChronomancerKeywords: KeywordModel[] = [
  {
    component: '[Status]',
    keyword: 'Hastened',
    cost: -6,
    tropeKeyword: true,
  },
  {
    component: '[Status]',
    keyword: 'Slowed',
    cost: -8,
    tropeKeyword: true,
  },
  {
    component: '[Duration]',
    keyword: 'For the rest of the [Period]',
    cost: 1,
    tropeKeyword: true,
  },
  {
    component: '[Effect]',
    keyword: 'Travels back in time within [Timeframe] and stays in there for an hour. Usable only once per Session',
    cost: -10,
    tropeKeyword: true,
    hybrid: ['[Duration]','[Cooldown]']
  },
  {
    component: '[Effect]',
    keyword: 'Travels forward in time within [Timeframe] and stays in there for an hour. Usable only once per Session',
    cost: -4,
    tropeKeyword: true,
    hybrid: ['[Duration]','[Cooldown]']
  },
  {
    component: '[Effect]',
    keyword: 'The character immediately increases the duration of ongoing Anima Weave and Item effects on [Target] by [Quantity] more of its current Period',
    cost: -8,
    tropeKeyword: true,
    hybrid: ['[Target]','[Duration]']
  },
]

export const temporisMetronomeKeywords: KeywordModel[] = [
  {
    component: '[Trigger]',
    keyword: 'At the start of a [Period]',
    cost: 0,
    tropeKeyword: true,
  },
  {
    component: '[Trigger]',
    keyword: 'At the end of a [Period]',
    cost: 0,
    tropeKeyword: true,
  },
  {
    component: '[Effect]',
    keyword: '[Effect] happens in [Quantity] [Period]',
    cost: 0,
    tropeKeyword: true,
  },
  {
    component: '[Effect]',
    keyword: 'Downgrade the Period Duration of all Anima Weaves in effect on the target (Session > Encounter > Round > Turn)',
    cost: -8,
    tropeKeyword: true,
  },
  {
    component: '[Effect]',
    keyword: 'Upgrade the Period Duration of all Anima Weaves in effect on the target (Turn > Round > Encounter > Session)',
    cost: -8,
    tropeKeyword: true,
  },
  {
    component: '[Period]',
    keyword: 'Turn',
    cost: -1,
    tropeKeyword: true,
  },
  {
    component: '[Period]',
    keyword: 'Skill Check',
    cost: -1,
    tropeKeyword: true,
  },
  {
    component: '[Period]',
    keyword: 'Round',
    cost: -3,
    tropeKeyword: true,
  },
  {
    component: '[Period]',
    keyword: 'Encounter',
    cost: -6,
    tropeKeyword: true,
  },
  {
    component: '[Period]',
    keyword: 'Conflict',
    cost: -6,
    tropeKeyword: true,
  },
  {
    component: '[Period]',
    keyword: 'Session',
    cost: -12,
    tropeKeyword: true,
  },
  {
    component: '[VariableQuantity]',
    keyword: 'Number of times this Anima Weave has been invoked relevantly this encounter',
    cost: 0,
    tropeKeyword: true,
  },
]

export const therianthropeKeywords: KeywordModel[] = [
  {
    component: '[Trigger]',
    keyword: 'When the character is below half his Maximum Health, the character gains an effect',
    cost: -1,
    tropeKeyword: true,
    hybrid: ['[Target]']
  },
  {
    component: '[Trigger]',
    keyword: 'When the character is below half his Maximum Resolve, the character gains an effect',
    cost: -1,
    tropeKeyword: true,
    hybrid: ['Target']
  },
  {
    component: '[Trigger]',
    keyword: 'While the character has no Resolve, the character gains an effect',
    cost: 0,
    tropeKeyword: true,
    hybrid: ['[Target]','[Duration]']
  },
  {
    component: '[Effect]',
    keyword: 'Loses ([Quantity] + half the character\'s Infernal Concept Rank, Rounded Up) Health',
    cost: -5,
    tropeKeyword: true,
  },
  {
    component: '[Duration]',
    keyword: 'So long as the character keeps making Primal Skill Checks',
    cost: 2,
    tropeKeyword: true,
  },
]

export const vampireKeywords: KeywordModel[] = [
  {
    component: '[StaticValue]',
    keyword: 'Sangre',
    cost: -2,
    tropeKeyword: true,
  },
  {
    component: '[Trigger]',
    keyword: 'When the character gains Sangre',
    cost: -4,
    tropeKeyword: true,
  },
  {
    component: '[Effect]',
    keyword: 'The character\'s Offenses recover Health equal to Health damage dealt to its target',
    cost: -12,
    tropeKeyword: true,
    hybrid: ['[Target]']
  },
  {
    component: '[Effect]',
    keyword: 'The character\'s Offenses recover Resolve equal to Resolve damage dealt to its target',
    cost: -12,
    tropeKeyword: true,
    hybrid: ['[Target]']
  },
  {
    component: '[Trigger]',
    keyword: 'While the character is above half his total Sangre, the character gains an effect',
    cost: 1,
    tropeKeyword: true,
    hybrid: ['[Target]','[Duration]']
  },
  {
    component: '[Duration]',
    keyword: 'For as long as the character has Sangre',
    cost: 0,
    tropeKeyword: true,
  },
]

export const tropes: TropeModel[] = [
  {
    tropeName: 'Alfar',
    tropeKeywords: alfarKeywords,
  },
  {
    tropeName: 'Ascetic',
    tropeKeywords: asceticKeywords,
  },
  {
    tropeName: 'Augmented',
    tropeKeywords: augmentedKeywords,
  },
  {
    tropeName: 'Cambion',
    tropeKeywords: cambionKeywords,
  },
  {
    tropeName: 'Cantor',
    tropeKeywords: cantorKeywords,
  },
  {
    tropeName: 'Demigod',
    tropeKeywords: demigodKeywords,
  },
  {
    tropeName: 'Doppelganger',
    tropeKeywords: doppelgangerKeywords,
  },
  {
    tropeName: 'Dreamweaver',
    tropeKeywords: dreamweaverKeywords,
  },
  {
    tropeName: 'Druid',
    tropeKeywords: druidKeywords,
  },
  {
    tropeName: 'Dwarf',
    tropeKeywords: dwarfKeywords,
  },
  {
    tropeName: 'Elemental',
    tropeKeywords: elementalKeywords,
  },
  {
    tropeName: 'Fae',
    tropeKeywords: faeKeywords,
  },
  {
    tropeName: 'Gnostic',
    tropeKeywords: gnosticKeywords,
  },
  {
    tropeName: 'Golem',
    tropeKeywords: golemKeywords,
  },
  {
    tropeName: 'Hermetic (Astrologer)',
    tropeKeywords: hermeticKeywords,
  },
  {
    tropeName: 'Human',
    tropeKeywords: humanKeywords,
  },
  {
    tropeName: 'Jagd',
    tropeKeywords: jagdKeywords,
  },
  {
    tropeName: 'Lich',
    tropeKeywords: lichKeywords,
  },
  {
    tropeName: 'Logos',
    tropeKeywords: logosKeywords,
  },
  {
    tropeName: 'Magi',
    tropeKeywords: magiKeywords,
  },
  {
    tropeName: 'Nephilim',
    tropeKeywords: nephilimKeywords,
  },
  {
    tropeName: 'Ninja',
    tropeKeywords: ninjaKeywords,
  },
  {
    tropeName: 'Ogre',
    tropeKeywords: ogreKeywords,
  },
  {
    tropeName: 'Phantom',
    tropeKeywords: phantomKeywords,
  },
  {
    tropeName: 'Psychic',
    tropeKeywords: psychicKeywords,
  },
  {
    tropeName: 'Seraphim',
    tropeKeywords: seraphimKeywords,
  },
  {
    tropeName: 'Sibyl',
    tropeKeywords: sibylKeywords,
  },
  {
    tropeName: 'Summoner',
    tropeKeywords: summonerKeywords,
  },
  {
    tropeName: 'Synthetic',
    tropeKeywords: syntheticKeywords,
  },
  {
    tropeName: 'Technomancer',
    tropeKeywords: technomancerKeywords,
  },
  {
    tropeName: 'Temporis (Chronomancer)',
    tropeKeywords: temporisChronomancerKeywords,
  },
  {
    tropeName: 'Temporis (Metronome)',
    tropeKeywords: temporisMetronomeKeywords,
  },
  {
    tropeName: 'Therianthrope',
    tropeKeywords: therianthropeKeywords,
  },
  {
    tropeName: 'Vampire',
    tropeKeywords: vampireKeywords,
  }
];
