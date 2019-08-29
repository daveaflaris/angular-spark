export declare interface KeywordModel {
  component?: string;
  keyword: string;
  cost: number;
  hybrid?: string[];
  tropeKeyword?: boolean;
  factionKeyword?: boolean;
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
