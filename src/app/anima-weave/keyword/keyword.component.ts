import { Input, Component, OnInit, ViewContainerRef, ViewChild, ComponentRef, ComponentFactoryResolver, OnDestroy } from '@angular/core';

import {coreTriggerKeywords} from '../keyword-list/triggers';
import {coreTargetKeywords} from '../keyword-list/targets';

import {coreSituationKeywords} from '../keyword-list/situations';
import {coreQuantityKeywords, coreVariableQuantityKeywords} from '../keyword-list/quantities';
import {coreStaticValueKeywords} from '../keyword-list/static-values';
import {tropes} from '../keyword-list/tropes';

import {KeywordModel, TropeModel} from '../keyword-list/keyword-model';

import {AnimaWeaveCreatorService} from '../anima-weave-creator/anima-weave-creator.service';

export interface Keyword {
  removeKeyword(index: number);
}

@Component({
  selector: 'keyword',
  templateUrl: './keyword.component.html',
  styleUrls: ['./keyword.component.sass']
})
export class KeywordComponent implements OnInit, OnDestroy {

  index: number;
  self: KeywordComponent;

  @Input() parentContainerRef: ViewContainerRef;

  @ViewChild('keywordList', {read: ViewContainerRef, static: false}) keywordContainerRef: ViewContainerRef;

  keywordIndex: number = 0;
  keywordLevel: number = 0;
  keywordComponentReferences = [];
  keywordLabel: string = '';
  keywordComponent: string = '';
  keywordQuantityMultiplier: number = 1;
  keywordCost: number = 0;

  selectedKeyword: KeywordModel;
  previousKeyword: KeywordModel;
  enteredKeyword: number;

  selectedTrope: TropeModel;
  selectedTropeKeywords: KeywordModel;

  triggerKeywords = [...coreTriggerKeywords];
  targetKeywords = [...coreTargetKeywords];

  situationKeywords = [...coreSituationKeywords];
  quantityKeywords = [...coreQuantityKeywords];
  variableQuantityKeywords = [...coreVariableQuantityKeywords];
  staticValueKeywords = [...coreStaticValueKeywords];

  fixedQuantityKeywords = ['[FixedQuantity-StaticValue]'];
  currentQuantity = -1;

  @Input() keywords: Array<{keyword: string, cost: number}> = [];

  constructor(
    private cfr: ComponentFactoryResolver,
    private animaWeaveService: AnimaWeaveCreatorService,
    ) { }

  ngOnInit() {
    this.animaWeaveService.currentTropeObservable.subscribe((data) => {
      this.selectedTrope = data;
      // Reset the Keywords
      this.resetKeywords();
      console.log('reset keywords');

      // Process the Trope-Specific Keywords
      if (this.selectedTrope.tropeKeywords) {
        // Process Fundamental Keywords of this Trope
        this.selectedTrope.tropeKeywords.forEach((keyword: KeywordModel) => {
          switch(keyword.component) {
            case '[Trigger]':
              this.triggerKeywords.push(keyword);
              this.replaceCurrentKeywords(this.triggerKeywords, '[Trigger]');
              break;
            case '[Target]':
              this.targetKeywords.push(keyword);
              this.replaceCurrentKeywords(this.targetKeywords, '[Target]');
              break;
            case '[StaticValue]':
              this.staticValueKeywords.push(keyword);
              this.replaceCurrentKeywords(this.staticValueKeywords, '[StaticValue]');
              break;
            default:
              break;
          }
        });
      }
    })
  }

  replaceCurrentKeywords(keywords: KeywordModel[], component: string) {
    if (component === this.keywordLabel) {
      this.keywords = keywords;
    }
  }

  resetKeywords() { 
    this.triggerKeywords = [...coreTriggerKeywords];
    this.replaceCurrentKeywords(this.triggerKeywords, '[Trigger]');

    this.targetKeywords = [...coreTargetKeywords];
    this.replaceCurrentKeywords(this.targetKeywords, '[Target]');

    this.situationKeywords = [...coreSituationKeywords];
    this.replaceCurrentKeywords(this.situationKeywords, '[Situation]');

    this.quantityKeywords = [...coreQuantityKeywords];
    this.replaceCurrentKeywords(this.quantityKeywords, '[Quantity]');

    this.variableQuantityKeywords = [...coreVariableQuantityKeywords];
    this.replaceCurrentKeywords(this.variableQuantityKeywords, '[VariableQuantity]');

    this.staticValueKeywords = [...coreStaticValueKeywords];
    this.replaceCurrentKeywords(this.staticValueKeywords, '[StaticValue]');
  }

  addKeyword(keywords: KeywordModel[], label: string, keywordMultiplier: number) {
    let componentFactory = this.cfr.resolveComponentFactory(KeywordComponent);
    let componentRef: ComponentRef<KeywordComponent> = this.keywordContainerRef.createComponent(componentFactory);
    componentRef.instance.keywords = keywords;
    componentRef.instance.keywordLabel = label;
    componentRef.instance.keywordLevel = this.keywordLevel + 1;
    componentRef.instance.parentContainerRef = this.keywordContainerRef;
    componentRef.instance.keywordComponent = this.keywordComponent;
    componentRef.instance.selectedTrope = this.selectedTrope;
    if (this.fixedQuantityKeywords.indexOf(this.selectedKeyword.keyword) !== -1) {
      componentRef.instance.keywordQuantityMultiplier = this.keywordCost;
    }
    let currentComponent = componentRef.instance;

    currentComponent.self = currentComponent;
    currentComponent.index = ++this.keywordIndex;

    this.keywordComponentReferences.push(componentRef);
  }

  removeKeyword(index: number) {
    // console.log(`Level ${this.keywordLevel} removing at index ${index}`);

    //   console.log(this.selectedKeyword);
    //   console.log(this.keywordCost);
    if (this.parentContainerRef) {
      // console.log('call destroy');
      this.parentContainerRef.get(index-1).destroy();
    } else {
      // console.log('null value');
      this.animaWeaveService.modifyWeavePoint(-(this.selectedKeyword.cost), this.keywordComponent);
      this.keywordComponentReferences.forEach((compRef) => {
        compRef.destroy();
      })
      this.selectedKeyword = null;
      this.previousKeyword = null;
    }

    // if (this.keywordContainerRef.length < 1)
    //   return;

    // let componentRef = this.keywordComponentReferences.filter(x => x.instance.index == index)[0];
    // let component: KeywordComponent = <KeywordComponent>componentRef.instance;

    // let vcrIndex: number = this.keywordContainerRef.indexOf(componentRef)

    // // removing component from container
    // this.keywordContainerRef.remove(vcrIndex);

    // this.keywordComponentReferences = this.keywordComponentReferences.filter(x => x.instance.index !== index);
  }

  processKeyword(keyword: KeywordModel, control: string) {
    if (this.previousKeyword) {
      this.animaWeaveService.modifyWeavePoint(-(this.keywordCost), this.keywordComponent);
    }
    this.keywordComponentReferences.forEach((compRef) => {
      compRef.destroy();
    })

    if (control === 'select') {
      const keywordReg = /([[A-Za-z-]+])/g;
     
      const nestedKeywords = keyword.keyword['matchAll'](keywordReg);
      this.keywordCost = keyword.cost;

      if (this.fixedQuantityKeywords.indexOf(keyword.keyword) === -1) {
        this.animaWeaveService.modifyWeavePoint(this.keywordCost, this.keywordComponent)
      }

      for (const keyword of nestedKeywords) {
         switch(keyword[0]) {
          case '[Trigger]':
            this.addKeyword(this.triggerKeywords, keyword[0], 1);
            break;
          case '[Target]':
            this.addKeyword(this.targetKeywords, keyword[0], 1);
            break;
          case '[Quantity]':
            this.addKeyword(this.quantityKeywords, keyword[0], 1);
            break;
          case '[FixedQuantity-StaticValue]':
            this.addKeyword(this.quantityKeywords, keyword[0], keyword.cost);
            break;
          case '[VariableQuantity]':
            this.addKeyword(this.variableQuantityKeywords, keyword[0], 1);
            break;
          case '[Situation]':
            this.addKeyword(this.situationKeywords, keyword[0], 1);
            break;
          case '[StaticValue]':
            this.addKeyword(this.staticValueKeywords, keyword[0], 1);
            break;
          default:
            break;
         }
      }

      this.previousKeyword = this.selectedKeyword;
    }
    if (control === 'text') {
      this.keywordCost = Number(this.enteredKeyword);
      this.animaWeaveService.modifyWeavePoint(keyword.cost, this.keywordComponent);
    }

    
  }

  checkKeywordCost(cost: number) {
    if (cost > 0) {
       return 'weave-added';
    }
    return 'weave-cost';
  }

  checkKeywordTrope(tropeKeyword: boolean|undefined) {
    if (tropeKeyword) {
      return 'trope-keyword';
    }
    return '';
  }

  calculateKeywordCost(cost: number) {
    if (this.currentQuantity !== -1) {
      const prevKeyword = {
        keyword: '[FixedQuantity]',
        cost: -(this.keywordQuantityMultiplier * this.currentQuantity),
      }
      this.processKeyword(prevKeyword, 'text');
    }
    const newKeyword = {
      keyword: '[FixedQuantity]',
      cost: this.keywordQuantityMultiplier * cost,
    }
    this.processKeyword(newKeyword, 'text');

    this.selectedKeyword = newKeyword;
    this.keywordCost = newKeyword.cost;
    this.currentQuantity = cost;
  }

  ngOnDestroy() {
    if (this.selectedKeyword && this.fixedQuantityKeywords.indexOf(this.selectedKeyword.keyword) === -1) {
      this.animaWeaveService.modifyWeavePoint(-(this.keywordCost), this.keywordComponent);
    }
  }  
}
