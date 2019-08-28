export declare interface KeywordModel {
  component?: string;
  keyword: string;
  cost: number;
  tropeKeyword?: boolean;
  factionKeyword?: boolean;
}

export declare interface TropeModel {
  tropeName: string;
  tropeKeywords: KeywordModel[];
}