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
];

export const eventideKeywords: KeywordModel[] = [
  {
    component: '[Trigger]',
    keyword: 'When [Target] loses any amount of Resolve',
    cost: -2,
    factionKeyword: true,
  }
];

export const factions: FactionModel[] = [
  {
    factionName: 'The Illuminati Corporation',
    factionKeywords: illuminatiKeywords,
  },
  {
    factionName: 'The Eventide Summit',
    factionKeywords: eventideKeywords,
  }
];
