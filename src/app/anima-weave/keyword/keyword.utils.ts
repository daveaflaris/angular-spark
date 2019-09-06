import {KeywordModel} from '../keyword-list/keyword-model';

export function adjustKeywordCost(keyword: KeywordModel, action: string, adjust: number) {
  switch(action) {
    case 'add-cost':
      keyword.cost += adjust;
      break;
    case 'subtract-cost':
      keyword.cost -= adjust;
      break;
    case 'multiply-cost':
      keyword.cost *= adjust;
      keyword.costMultiplier *= adjust;
      break;
    case 'divide-cost':
      keyword.cost /= adjust;
      keyword.costMultiplier /= adjust;
      break;
    default:
      break;
  }

  return keyword;
}
