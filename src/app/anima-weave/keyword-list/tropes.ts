import {KeywordModel} from './keyword-model';

export const asceticKeywords: KeywordModel[] = [
  {
    component: '[Trigger]',
    keyword: 'The character spends [FixedQuantity-StaticValue] Serenity',
    cost: 3,
    tropeKeyword: true,
  },
  {
    component: '[StaticValue]',
    keyword: 'Serenity',
    cost: 0,
    tropeKeyword: true,
  },
];

export const augmentedKeywords: KeywordModel[] = [
  {
    component: '[Target]',
    keyword: 'The character',
    cost: 0,
    tropeKeyword: true,
  }
];

export const tropes = [
  {
    tropeName: 'Ascetic',
    tropeKeywords: asceticKeywords,
  },
  {
    tropeName: 'Augmented',
    tropeKeywords: augmentedKeywords,
  }
];


