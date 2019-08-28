import { Injectable } from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';
import {TropeModel} from '../keyword-list/keyword-model';

@Injectable({
  providedIn: 'root'
})
export class AnimaWeaveCreatorService {
  currentTrope: TropeModel = {} as TropeModel;
  currentTropeObservable: Observable<TropeModel>;
  currentTropeStream = new BehaviorSubject<TropeModel>({} as TropeModel);

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
  }

  setSelectedTrope(trope: TropeModel) {
    this.currentTropeStream.next(trope);
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
}
