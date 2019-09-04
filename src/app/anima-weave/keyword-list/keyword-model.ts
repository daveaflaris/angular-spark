import {KeywordComponent} from '../keyword/keyword.component'

export declare interface AnimaWeave {
  name: string;
  components: KeywordModel[];
}

export declare interface AnimaWeaveModel {
  trigger: KeywordComponent;
  target: KeywordComponent;
  effect: KeywordComponent;
  duration: KeywordComponent;
  cooldown: KeywordComponent;
}

export declare interface KeywordModel {
  component?: string;
  keyword: string;
  cost: number;
  hybrid?: string[];
  tropeKeyword?: boolean;
  factionKeyword?: boolean;
  childKeywords?: KeywordModel[];
}

export declare interface HybridCommand {
  hybrid: string[]|undefined;
  disable: boolean;
}

export declare interface TropeModel {
  tropeName: string;
  tropeKeywords: KeywordModel[];
}

export declare interface FactionModel {
  factionName: string;
  factionKeywords: KeywordModel[];
}
