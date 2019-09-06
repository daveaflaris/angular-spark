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
  triggerAdjustments: string[] = [];
  triggerAdjustmentsObservable: Observable<Array<string>>;
  triggerAdjustmentsStream = new BehaviorSubject<Array<string>>([]);

  targetWeavePointCost: number = 0;
  targetWeavePointCostObservable: Observable<number>;
  targetWeavePointCostStream = new BehaviorSubject<number>(0);
  targetAdjustments: string[] = [];
  targetAdjustmentsObservable: Observable<Array<string>>;
  targetAdjustmentsStream = new BehaviorSubject<Array<string>>([]);

  effectWeavePointCost: number = 0;
  effectWeavePointCostObservable: Observable<number>;
  effectWeavePointCostStream = new BehaviorSubject<number>(0);
  effectAdjustments: string[] = [];
  effectAdjustmentsObservable: Observable<Array<string>>;
  effectAdjustmentsStream = new BehaviorSubject<Array<string>>([]);

  durationWeavePointCost: number = 0;
  durationWeavePointCostObservable: Observable<number>;
  durationWeavePointCostStream = new BehaviorSubject<number>(0);
  durationAdjustments: string[] = [];
  durationAdjustmentsObservable: Observable<Array<string>>;
  durationAdjustmentsStream = new BehaviorSubject<Array<string>>([]);

  cooldownWeavePointCost: number = 0;
  cooldownWeavePointCostObservable: Observable<number>;
  cooldownWeavePointCostStream = new BehaviorSubject<number>(0);
  cooldownAdjustments: string[] = [];
  cooldownAdjustmentsObservable: Observable<Array<string>>;
  cooldownAdjustmentsStream = new BehaviorSubject<Array<string>>([]);

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

    this.triggerAdjustmentsObservable = this.triggerAdjustmentsStream.asObservable();
    this.targetAdjustmentsObservable = this.targetAdjustmentsStream.asObservable();
    this.effectAdjustmentsObservable = this.effectAdjustmentsStream.asObservable();
    this.durationAdjustmentsObservable = this.durationAdjustmentsStream.asObservable();
    this.cooldownAdjustmentsObservable = this.cooldownAdjustmentsStream.asObservable();

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

  modifyAdjustment(component: string, adjustment: string, add: boolean) {
    let adjustmentIndex = -1;
    switch(component) {
      case 'trigger':
        if (add) {
          if (this.triggerAdjustments.indexOf(adjustment) === -1) {
            this.triggerAdjustments.push(adjustment);
          }
        } else {
          adjustmentIndex = this.triggerAdjustments.indexOf(adjustment);
          if (adjustmentIndex !== -1) {
            this.triggerAdjustments.splice(adjustmentIndex, 1);
          }
        }
        this.triggerAdjustmentsStream.next(this.triggerAdjustments);
        break;
      case 'target':
        if (add) {
          if (this.targetAdjustments.indexOf(adjustment) === -1) {
            this.targetAdjustments.push(adjustment);
          }
        } else {
          adjustmentIndex = this.targetAdjustments.indexOf(adjustment);
          if (adjustmentIndex !== -1) {
            this.targetAdjustments.splice(adjustmentIndex, 1);
          }
        }
        this.targetAdjustmentsStream.next(this.targetAdjustments);
        break;
      case 'effect':
        if (add) {
          if (this.effectAdjustments.indexOf(adjustment) === -1) {
            this.effectAdjustments.push(adjustment);
          }
        } else {
          adjustmentIndex = this.effectAdjustments.indexOf(adjustment);
          if (adjustmentIndex !== -1) {
            this.effectAdjustments.splice(adjustmentIndex, 1);
          }
        }
        this.effectAdjustmentsStream.next(this.effectAdjustments);
        break;
      case 'duration':
        if (add) {
          if (this.durationAdjustments.indexOf(adjustment) === -1) {
            this.durationAdjustments.push(adjustment);
          }
        } else {
          adjustmentIndex = this.durationAdjustments.indexOf(adjustment);
          if (adjustmentIndex !== -1) {
            this.durationAdjustments.splice(adjustmentIndex, 1);
          }
        }
        this.durationAdjustmentsStream.next(this.durationAdjustments);
        break;
      case 'cooldown':
        if (add) {
          if (this.cooldownAdjustments.indexOf(adjustment) === -1) {
            this.cooldownAdjustments.push(adjustment);
          }
        } else {
          adjustmentIndex = this.cooldownAdjustments.indexOf(adjustment);
          if (adjustmentIndex !== -1) {
            this.cooldownAdjustments.splice(adjustmentIndex, 1);
          }
        }
        this.cooldownAdjustmentsStream.next(this.cooldownAdjustments);
        break;
      default:
        break;
    }
  }

  setAdjustment(component: string, adjustments: string[]) {
    switch(component) {
      case 'trigger':
        this.triggerAdjustments  = adjustments;
        this.triggerAdjustmentsStream.next(this.triggerAdjustments);
        break;
      case 'target':
        this.targetAdjustments  = adjustments;
        this.targetAdjustmentsStream.next(this.targetAdjustments);
        break;
      case 'effect':
        this.effectAdjustments  = adjustments;
        this.effectAdjustmentsStream.next(this.effectAdjustments);
        break;
      case 'duration':
        this.durationAdjustments  = adjustments;
        this.durationAdjustmentsStream.next(this.durationAdjustments);
        break;
      case 'cooldown':
        this.cooldownAdjustments  = adjustments;
        this.cooldownAdjustmentsStream.next(this.cooldownAdjustments);
        break;
      default:
        break;
    }
  }
}
