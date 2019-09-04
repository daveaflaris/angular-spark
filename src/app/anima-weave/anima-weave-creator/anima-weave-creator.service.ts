import { Injectable } from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';
import {HybridCommand, AnimaWeaveModel, AnimaWeave, TropeModel, FactionModel} from '../keyword-list/keyword-model';

@Injectable({
  providedIn: 'root'
})
export class AnimaWeaveCreatorService {
  currentTrope: TropeModel = {} as TropeModel;
  currentTropeObservable: Observable<TropeModel>;
  currentTropeStream = new BehaviorSubject<TropeModel>({} as TropeModel);

  currentFaction: FactionModel = {} as FactionModel;
  currentFactionObservable: Observable<FactionModel>;
  currentFactionStream = new BehaviorSubject<FactionModel>({} as FactionModel);

  totalWeavePointCost: number = 0;
  totalWeavePointCostObservable: Observable<number>;
  totalWeavePointCostStream = new BehaviorSubject<number>(0);

  triggerWeavePointCost: number = 0;
  triggerWeavePointCostObservable: Observable<number>;
  triggerWeavePointCostStream = new BehaviorSubject<number>(0);

  targetWeavePointCost: number = 0;
  targetWeavePointCostObservable: Observable<number>;
  targetWeavePointCostStream = new BehaviorSubject<number>(0);

  effectWeavePointCost: number = 0;
  effectWeavePointCostObservable: Observable<number>;
  effectWeavePointCostStream = new BehaviorSubject<number>(0);

  durationWeavePointCost: number = 0;
  durationWeavePointCostObservable: Observable<number>;
  durationWeavePointCostStream = new BehaviorSubject<number>(0);

  cooldownWeavePointCost: number = 0;
  cooldownWeavePointCostObservable: Observable<number>;
  cooldownWeavePointCostStream = new BehaviorSubject<number>(0);

  refreshWeave: boolean = false;
  refreshWeaveObservable: Observable<boolean>;
  refreshWeaveStream = new BehaviorSubject<boolean>(false);

  hybridComponent: string[] = [];
  hybridComponentObservable: Observable<HybridCommand>;
  hybridComponentStream = new BehaviorSubject<HybridCommand>({hybrid: [], disable: false});

  animaWeave: AnimaWeaveModel = {} as AnimaWeaveModel;
  animaWeaveObservable: Observable<AnimaWeaveModel>;
  animaWeaveStream = new BehaviorSubject<AnimaWeaveModel>({} as AnimaWeaveModel);

  currentAnimaWeave: AnimaWeave = {} as AnimaWeave;
  currentAnimaWeaveObservable: Observable<AnimaWeave>;
  currentAnimaWeaveStream = new BehaviorSubject<AnimaWeave>({} as AnimaWeave);

  weavePointModifier: Observable<number>;
  weavePointCost = new BehaviorSubject<number>(0);


  constructor() {
    this.totalWeavePointCostObservable = this.totalWeavePointCostStream.asObservable();
    this.triggerWeavePointCostObservable = this.triggerWeavePointCostStream.asObservable();
    this.targetWeavePointCostObservable = this.targetWeavePointCostStream.asObservable();
    this.effectWeavePointCostObservable = this.effectWeavePointCostStream.asObservable();
    this.durationWeavePointCostObservable = this.durationWeavePointCostStream.asObservable();
    this.cooldownWeavePointCostObservable = this.cooldownWeavePointCostStream.asObservable();
    this.currentTropeObservable = this.currentTropeStream.asObservable();
    this.currentFactionObservable = this.currentFactionStream.asObservable();
    this.refreshWeaveObservable = this.refreshWeaveStream.asObservable();
    this.hybridComponentObservable = this.hybridComponentStream.asObservable();
    this.animaWeaveObservable = this.animaWeaveStream.asObservable();
    this.currentAnimaWeaveObservable = this.currentAnimaWeaveStream.asObservable();
  }

  refreshAnimaWeave(refresh: boolean) {
    this.refreshWeaveStream.next(refresh);
  }

  setSelectedTrope(trope: TropeModel) {
    this.currentTropeStream.next(trope);
  }

  setSelectedFaction(faction: FactionModel) {
    this.currentFactionStream.next(faction);
  }

  setAnimaWeave(animaWeave: AnimaWeaveModel) {
    this.animaWeaveStream.next(animaWeave);
  }

  setCurrentAnimaWeave(animaWeave: AnimaWeave) {
    this.currentAnimaWeaveStream.next(animaWeave);
  }

  enableComponents(command: {hybrid: string[], disable: boolean}) {
    this.hybridComponentStream.next(command);
  }

  disableComponents(command: {hybrid: string[], disable: boolean}) {
    this.hybridComponentStream.next(command);
  }

  modifyWeavePoint(keywordCost: number, component: string) {
    // console.log('modify weave point');
    // console.log(keywordCost);
    this.totalWeavePointCost += keywordCost;
    this.totalWeavePointCostStream.next(this.totalWeavePointCost);

    switch(component) {
      case 'trigger':
        this.triggerWeavePointCost += keywordCost;
        this.triggerWeavePointCostStream.next(this.triggerWeavePointCost);
        break;
      case 'target':
        this.targetWeavePointCost += keywordCost;
        this.targetWeavePointCostStream.next(this.targetWeavePointCost);
        break;
      case 'effect':
        this.effectWeavePointCost += keywordCost;
        this.effectWeavePointCostStream.next(this.effectWeavePointCost);
        break;
      case 'duration':
        this.durationWeavePointCost += keywordCost;
        this.durationWeavePointCostStream.next(this.durationWeavePointCost);
        break;
      case 'cooldown':
        this.cooldownWeavePointCost += keywordCost;
        this.cooldownWeavePointCostStream.next(this.cooldownWeavePointCost);
        break;
      default:
        break;
    }

    this.weavePointCost.next(keywordCost);
  }

  setWeavePoint(weavePoint: number, component: string) {
    switch(component) {
      case 'trigger':
        this.triggerWeavePointCost = weavePoint;
        this.triggerWeavePointCostStream.next(weavePoint);
        break;
      case 'target':
        this.targetWeavePointCost = weavePoint;
        this.targetWeavePointCostStream.next(weavePoint);
        break;
      case 'effect':
        this.effectWeavePointCost = weavePoint;
        this.effectWeavePointCostStream.next(weavePoint);
        break;
      case 'duration':
        this.durationWeavePointCost = weavePoint;
        this.durationWeavePointCostStream.next(weavePoint);
        break;
      case 'cooldown':
        this.cooldownWeavePointCost = weavePoint;
        this.cooldownWeavePointCostStream.next(weavePoint);
        break;
      default:
        break;
    }
  }
}
