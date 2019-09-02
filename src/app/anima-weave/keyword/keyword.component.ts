import { Input, Component, OnInit, ViewContainerRef, ViewChild, ComponentRef, ComponentFactoryResolver, OnDestroy } from '@angular/core';

import {coreTriggerKeywords} from '../keyword-list/triggers';
import {coreTargetKeywords} from '../keyword-list/targets';
import {coreEffectKeywords} from '../keyword-list/effects';
import {coreDurationKeywords} from '../keyword-list/durations';
import {coreCooldownKeywords} from '../keyword-list/cooldowns';

import {coreAnimaWeaveKeywords} from '../keyword-list/anima-weaves';
import {coreApproachKeywords} from '../keyword-list/approaches';
import {coreAttunementKeywords} from '../keyword-list/attunements';
import {coreConceptKeywords} from '../keyword-list/concepts';
import {coreConditionKeywords} from '../keyword-list/conditions';
import {coreDicepoolKeywords} from '../keyword-list/dicepools';
import {coreDifficultyKeywords} from '../keyword-list/difficulties';
import {coreItemKeywords} from '../keyword-list/items';
import {coreNPCKeywords} from '../keyword-list/npcs';
import {corePeriodKeywords} from '../keyword-list/periods';
import {coreProficiencyKeywords} from '../keyword-list/proficiencies';
import {coreQuantityKeywords, coreVariableQuantityKeywords} from '../keyword-list/quantities';
import {coreRangeKeywords} from '../keyword-list/ranges';
import {coreSituationKeywords} from '../keyword-list/situations';
import {coreSkillCheckKeywords} from '../keyword-list/skill-checks';
import {coreStaticValueKeywords} from '../keyword-list/static-values';
import {coreStatusKeywords} from '../keyword-list/statuses';
import {coreTimeframeKeywords} from '../keyword-list/timeframes';
import {tropes} from '../keyword-list/tropes';

import {KeywordModel, AnimaWeaveModel, HybridCommand, TropeModel, FactionModel} from '../keyword-list/keyword-model';

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

  animaWeave: AnimaWeaveModel;
  animaWeaveComponents: KeywordModel[] = [];

  keywordIndex: number = 0;
  keywordLevel: number = 0;
  keywordComponentReferences = [];
  keywordLabel: string = '';
  keywordComponent: string = '';
  keywordQuantityMultiplier: number = 1;
  keywordCost: number = 0;
  keywordDisabled: boolean = false;

  parentKeyword: KeywordComponent;
  childKeywords: KeywordComponent[] = [];

  selectedKeyword: KeywordModel;
  previousKeyword: KeywordModel;
  enteredKeyword: number;

  selectedTrope: TropeModel;
  selectedTropeKeywords: KeywordModel;

  selectedFaction: FactionModel;
  selectedFactionKeywords: KeywordModel;

  triggerKeywords: KeywordModel[] = [...coreTriggerKeywords];
  targetKeywords: KeywordModel[] = [...coreTargetKeywords];
  effectKeywords: KeywordModel[] = [...coreEffectKeywords];
  durationKeywords: KeywordModel[] = [...coreDurationKeywords];
  cooldownKeywords: KeywordModel[] = [...coreCooldownKeywords];

  animaWeaveKeywords: KeywordModel[] = [...coreAnimaWeaveKeywords];
  approachKeywords: KeywordModel[] = [...coreApproachKeywords];
  attunementKeywords: KeywordModel[] = [...coreAttunementKeywords];
  conceptKeywords: KeywordModel[] = [...coreConceptKeywords];
  conditionKeywords: KeywordModel[] = [...coreConditionKeywords];
  dicepoolKeywords: KeywordModel[] = [...coreDicepoolKeywords];
  difficultyKeywords: KeywordModel[] = [...coreDifficultyKeywords];
  itemKeywords: KeywordModel[] = [...coreItemKeywords];
  npcKeywords: KeywordModel[] = [...coreNPCKeywords];
  periodKeywords: KeywordModel[] = [...corePeriodKeywords];
  proficiencyKeywords: KeywordModel[] = [...coreProficiencyKeywords];
  quantityKeywords: KeywordModel[] = [...coreQuantityKeywords];
  fixedQuantityKeywords = [
    '[FixedQuantity-StaticValue]',
    '[FixedQuantity-Target]',
    '[FixedQuantity-Item]',
    '[FixedQuantity-NPC]',
    '[FixedQuantity-Dice]',
    '[FixedQuantity-Modifier]',
    '[FixedQuantity-Period]',
    '[FixedQuantity-ActionType]',
    '[FixedQuantity-Miscellaneous]',
    '[FixedQuantity-AnimaWeavePoints]',
  ];
  variableQuantityKeywords: KeywordModel[] = [...coreVariableQuantityKeywords];
  rangeKeywords: KeywordModel[] = [...coreRangeKeywords];
  situationKeywords: KeywordModel[] = [...coreSituationKeywords];
  skillCheckKeywords: KeywordModel[] = [...coreSkillCheckKeywords];
  staticValueKeywords: KeywordModel[] = [...coreStaticValueKeywords];
  statusKeywords: KeywordModel[] = [...coreStatusKeywords];
  taskKeywords: KeywordModel[] = [];
  timeframeKeywords: KeywordModel[] = [...coreTimeframeKeywords];

  currentQuantity = -1;

  @Input() keywords: KeywordModel[] = [];

  constructor(
    private cfr: ComponentFactoryResolver,
    private animaWeaveService: AnimaWeaveCreatorService,
    ) { }

  ngOnInit() {
    this.animaWeaveService.currentTropeObservable.subscribe((data) => {
      this.selectedTrope = data;
      // Reset the Keywords
      this.resetKeywords();

      if (this.selectedTrope) {
        this.populateTropeKeywords(this.selectedTrope);
      }
      if (this.selectedFaction) {
        this.populateFactionKeywords(this.selectedFaction);
      }
    })

    this.animaWeaveService.currentFactionObservable.subscribe((data) => {
      this.selectedFaction = data;
      // Reset the Keywords
      this.resetKeywords();

      if (this.selectedTrope) {
        this.populateTropeKeywords(this.selectedTrope);
      }
      if (this.selectedFaction) {
        this.populateFactionKeywords(this.selectedFaction);
      }
    })

    this.animaWeaveService.animaWeaveObservable.subscribe((data) => {
      this.animaWeave = data;
    })

    // console.log(this.buildAnimaWeave(this.animaWeaveComponents));
  }

  populateTropeKeywords(trope: TropeModel) {
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
          case '[Effect]':
            this.effectKeywords.push(keyword);
            this.replaceCurrentKeywords(this.effectKeywords, '[Effect]');
            break;
          case '[Duration]':
            this.durationKeywords.push(keyword);
            this.replaceCurrentKeywords(this.durationKeywords, '[Duration]');
            break;
          case '[Cooldown]':
            this.cooldownKeywords.push(keyword);
            this.replaceCurrentKeywords(this.cooldownKeywords, '[Cooldown]');
            break;
          case '[AnimaWeave]':
            this.animaWeaveKeywords.push(keyword);
            this.replaceCurrentKeywords(this.animaWeaveKeywords, '[AnimaWeave]');
            break;
          case '[Approach]':
            this.approachKeywords.push(keyword);
            this.replaceCurrentKeywords(this.approachKeywords, '[Approach]');
            break;
          case '[Attunement]':
            this.attunementKeywords.push(keyword);
            this.replaceCurrentKeywords(this.attunementKeywords, '[Attunement]');
            break;
          case '[Concept]':
            this.conceptKeywords.push(keyword);
            this.replaceCurrentKeywords(this.conceptKeywords, '[Concept]');
            break;
          case '[Condition]':
            this.conditionKeywords.push(keyword);
            this.replaceCurrentKeywords(this.conditionKeywords, '[Condition]');
            break;
          case '[Dicepool]':
            this.dicepoolKeywords.push(keyword);
            this.replaceCurrentKeywords(this.dicepoolKeywords, '[Dicepool]');
            break;
          case '[Difficulty]':
            this.difficultyKeywords.push(keyword);
            this.replaceCurrentKeywords(this.difficultyKeywords, '[Difficulty]');
            break;
          case '[Item]':
            this.itemKeywords.push(keyword);
            this.replaceCurrentKeywords(this.itemKeywords, '[Item]');
            break;
          case '[NPC]':
            this.npcKeywords.push(keyword);
            this.replaceCurrentKeywords(this.npcKeywords, '[NPC]');
            break;
          case '[Period]':
            this.periodKeywords.push(keyword);
            this.replaceCurrentKeywords(this.periodKeywords, '[Period]');
            break;
          case '[Proficiency]':
            this.proficiencyKeywords.push(keyword);
            this.replaceCurrentKeywords(this.proficiencyKeywords, '[Proficiency]');
            break;
          case '[Quantity]':
            this.quantityKeywords.push(keyword);
            this.replaceCurrentKeywords(this.quantityKeywords, '[Quantity]');
            break;
          case '[VariableQuantity]':
            this.variableQuantityKeywords.push(keyword);
            this.replaceCurrentKeywords(this.variableQuantityKeywords, '[VariableQuantity]');
            break;
          case '[Range]':
            this.rangeKeywords.push(keyword);
            this.replaceCurrentKeywords(this.rangeKeywords, '[Range]');
            break;
          case '[Situation]':
            this.situationKeywords.push(keyword);
            this.replaceCurrentKeywords(this.situationKeywords, '[Situation]');
            break;
          case '[SkillCheck]':
            this.skillCheckKeywords.push(keyword);
            this.replaceCurrentKeywords(this.skillCheckKeywords, '[SkillCheck]');
            break;
          case '[StaticValue]':
            this.staticValueKeywords.push(keyword);
            this.replaceCurrentKeywords(this.staticValueKeywords, '[StaticValue]');
            break;
          case '[Status]':
            this.statusKeywords.push(keyword);
            this.replaceCurrentKeywords(this.statusKeywords, '[Status]');
            break;
          case '[Task]':
            this.taskKeywords.push(keyword);
            this.replaceCurrentKeywords(this.taskKeywords, '[Task]');
            break;
          case '[Timeframe]':
            this.timeframeKeywords.push(keyword);
            this.replaceCurrentKeywords(this.timeframeKeywords, '[Timeframe]');
            break;
          default:
            break;
        }
      });
    }
  }

  populateFactionKeywords(faction: FactionModel) {
    // Process the Faction-Specific Keywords
    if (this.selectedFaction.factionKeywords) {
      // Process Fundamental Keywords of this Faction
      this.selectedFaction.factionKeywords.forEach((keyword: KeywordModel) => {
        switch(keyword.component) {
          case '[Trigger]':
            this.triggerKeywords.push(keyword);
            this.replaceCurrentKeywords(this.triggerKeywords, '[Trigger]');
            break;
          case '[Target]':
            this.targetKeywords.push(keyword);
            this.replaceCurrentKeywords(this.targetKeywords, '[Target]');
            break;
          case '[Effect]':
            this.effectKeywords.push(keyword);
            this.replaceCurrentKeywords(this.effectKeywords, '[Effect]');
            break;
          case '[Duration]':
            this.durationKeywords.push(keyword);
            this.replaceCurrentKeywords(this.durationKeywords, '[Duration]');
            break;
          case '[Cooldown]':
            this.cooldownKeywords.push(keyword);
            this.replaceCurrentKeywords(this.cooldownKeywords, '[Cooldown]');
            break;
          case '[AnimaWeave]':
            this.animaWeaveKeywords.push(keyword);
            this.replaceCurrentKeywords(this.animaWeaveKeywords, '[AnimaWeave]');
            break;
          case '[Approach]':
            this.approachKeywords.push(keyword);
            this.replaceCurrentKeywords(this.approachKeywords, '[Approach]');
            break;
          case '[Attunement]':
            this.attunementKeywords.push(keyword);
            this.replaceCurrentKeywords(this.attunementKeywords, '[Attunement]');
            break;
          case '[Concept]':
            this.conceptKeywords.push(keyword);
            this.replaceCurrentKeywords(this.conceptKeywords, '[Concept]');
            break;
          case '[Dicepool]':
            this.dicepoolKeywords.push(keyword);
            this.replaceCurrentKeywords(this.dicepoolKeywords, '[Dicepool]');
            break;
          case '[Difficulty]':
            this.difficultyKeywords.push(keyword);
            this.replaceCurrentKeywords(this.difficultyKeywords, '[Difficulty]');
            break;
          case '[Item]':
            this.itemKeywords.push(keyword);
            this.replaceCurrentKeywords(this.itemKeywords, '[Item]');
            break;
          case '[NPC]':
            this.npcKeywords.push(keyword);
            this.replaceCurrentKeywords(this.npcKeywords, '[NPC]');
            break;
          case '[Period]':
            this.periodKeywords.push(keyword);
            this.replaceCurrentKeywords(this.periodKeywords, '[Period]');
            break;
          case '[Proficiency]':
            this.proficiencyKeywords.push(keyword);
            this.replaceCurrentKeywords(this.proficiencyKeywords, '[Proficiency]');
            break;
          case '[Quantity]':
            this.quantityKeywords.push(keyword);
            this.replaceCurrentKeywords(this.quantityKeywords, '[Quantity]');
            break;
          case '[VariableQuantity]':
            this.variableQuantityKeywords.push(keyword);
            this.replaceCurrentKeywords(this.variableQuantityKeywords, '[VariableQuantity]');
            break;
          case '[Range]':
            this.rangeKeywords.push(keyword);
            this.replaceCurrentKeywords(this.rangeKeywords, '[Range]');
            break;
          case '[Situation]':
            this.situationKeywords.push(keyword);
            this.replaceCurrentKeywords(this.situationKeywords, '[Situation]');
            break;
          case '[SkillCheck]':
            this.skillCheckKeywords.push(keyword);
            this.replaceCurrentKeywords(this.skillCheckKeywords, '[SkillCheck]');
            break;
          case '[StaticValue]':
            this.staticValueKeywords.push(keyword);
            this.replaceCurrentKeywords(this.staticValueKeywords, '[StaticValue]');
            break;
          case '[Status]':
            this.statusKeywords.push(keyword);
            this.replaceCurrentKeywords(this.statusKeywords, '[Status]');
            break;
          case '[Task]':
            this.taskKeywords.push(keyword);
            this.replaceCurrentKeywords(this.taskKeywords, '[Task]');
            break;
          case '[Timeframe]':
            this.timeframeKeywords.push(keyword);
            this.replaceCurrentKeywords(this.timeframeKeywords, '[Timeframe]');
            break;
          default:
            break;
        }
      });
    }
  }

  replaceCurrentKeywords(keywords: KeywordModel[], component: string) {
    if (component === this.keywordLabel) {
      this.keywords = keywords;
    }
    this.selectedKeyword = null;
  }

  getParentKeyword() {
    if (this.parentKeyword) {
      this.parentKeyword.getParentKeyword();
    } else {
      // Hit top-level Parent.
      // console.log('refresh weave');
      this.animaWeaveService.refreshAnimaWeave(true);
    }
  }

  getImmediateParent() {
    if (this.parentKeyword) {
      return this.parentKeyword;
    }
    return null;
  }

  getChildKeywords() {
    this.childKeywords.forEach((child) => {
      // console.log(child.selectedKeyword);
      child.getChildKeywords()
    })
  }

  buildAnimaWeave(animaWeaveArr: KeywordModel[]) {
    if (this.animaWeave) {
      animaWeaveArr.push(this.animaWeave.trigger.selectedKeyword);
      if (this.animaWeave.trigger.selectedKeyword && this.animaWeave.trigger.childKeywords) {
        this.animaWeave.trigger.childKeywords.forEach((child) => {
          this.animaWeave.trigger.selectedKeyword.childKeywords.push(child.selectedKeyword);
          child.getChildComponents(animaWeaveArr[0]);
        })
      }
    }
  }

  getChildComponents(component: KeywordModel) {
    if (this.selectedKeyword && this.childKeywords) {
      this.childKeywords.forEach((child) => {
        component.childKeywords.push(child.selectedKeyword);
        child.getChildComponents(component);
      })
    }
  }

  resetKeywords() {
    this.triggerKeywords = [...coreTriggerKeywords];
    this.replaceCurrentKeywords(this.triggerKeywords, '[Trigger]');

    this.targetKeywords = [...coreTargetKeywords];
    this.replaceCurrentKeywords(this.targetKeywords, '[Target]');

    this.effectKeywords = [...coreEffectKeywords];
    this.replaceCurrentKeywords(this.effectKeywords, '[Effect]');

    this.durationKeywords = [...coreDurationKeywords];
    this.replaceCurrentKeywords(this.durationKeywords, '[Duration]');

    this.cooldownKeywords = [...coreCooldownKeywords];
    this.replaceCurrentKeywords(this.cooldownKeywords, '[Cooldown]');

    this.animaWeaveKeywords = [...coreAnimaWeaveKeywords];
    this.replaceCurrentKeywords(this.animaWeaveKeywords, '[AnimaWeave]');

    this.approachKeywords = [...coreApproachKeywords];
    this.replaceCurrentKeywords(this.approachKeywords, '[Approach]');

    this.attunementKeywords = [...coreAttunementKeywords];
    this.replaceCurrentKeywords(this.attunementKeywords, '[Attunement]');

    this.conceptKeywords = [...coreConceptKeywords];
    this.replaceCurrentKeywords(this.conceptKeywords, '[Concept]');

    this.conditionKeywords = [...coreConditionKeywords];
    this.replaceCurrentKeywords(this.conditionKeywords, '[Condition]');

    this.dicepoolKeywords = [...coreDicepoolKeywords];
    this.replaceCurrentKeywords(this.dicepoolKeywords, '[Dicepool]');

    this.difficultyKeywords = [...coreDifficultyKeywords];
    this.replaceCurrentKeywords(this.difficultyKeywords, '[Difficulty]');

    this.itemKeywords = [...coreItemKeywords];
    this.replaceCurrentKeywords(this.itemKeywords, '[Item]');

    this.npcKeywords = [...coreNPCKeywords];
    this.replaceCurrentKeywords(this.npcKeywords, '[NPC]');

    this.periodKeywords = [...corePeriodKeywords];
    this.replaceCurrentKeywords(this.periodKeywords, '[Period]');

    this.proficiencyKeywords = [...coreProficiencyKeywords];
    this.replaceCurrentKeywords(this.proficiencyKeywords, '[Proficiency]');

    this.quantityKeywords = [...coreQuantityKeywords];
    this.replaceCurrentKeywords(this.quantityKeywords, '[Quantity]');

    this.variableQuantityKeywords = [...coreVariableQuantityKeywords];
    this.replaceCurrentKeywords(this.variableQuantityKeywords, '[VariableQuantity]');

    this.rangeKeywords = [...coreRangeKeywords];
    this.replaceCurrentKeywords(this.rangeKeywords, '[Range]');

    this.situationKeywords = [...coreSituationKeywords];
    this.replaceCurrentKeywords(this.situationKeywords, '[Situation]');

    this.skillCheckKeywords = [...coreSkillCheckKeywords];
    this.replaceCurrentKeywords(this.skillCheckKeywords, '[SkillCheck]');

    this.staticValueKeywords = [...coreStaticValueKeywords];
    this.replaceCurrentKeywords(this.staticValueKeywords, '[StaticValue]');

    this.statusKeywords = [...coreStatusKeywords];
    this.replaceCurrentKeywords(this.statusKeywords, '[Status]');

    this.taskKeywords = [];
    this.replaceCurrentKeywords(this.taskKeywords, '[Task]')

    this.timeframeKeywords = [...coreTimeframeKeywords];
    this.replaceCurrentKeywords(this.timeframeKeywords, '[Timeframe]');
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
    componentRef.instance.parentKeyword = this;
    if (this.fixedQuantityKeywords.indexOf(this.selectedKeyword.keyword) !== -1) {
      componentRef.instance.keywordQuantityMultiplier = this.keywordCost;
    }
    let currentComponent = componentRef.instance;

    currentComponent.self = currentComponent;
    currentComponent.index = ++this.keywordIndex;

    this.keywordComponentReferences.push(componentRef);
    this.childKeywords.push(componentRef.instance);
    if (!this.selectedKeyword.childKeywords) {
      this.selectedKeyword.childKeywords = [];
    }
  }

  removeKeyword(index: number) {
    if (this.selectedKeyword) {
      if (this.selectedKeyword.hybrid) {
        this.animaWeaveService.enableComponents({hybrid: this.selectedKeyword.hybrid, disable: false});
      }
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

      if (this.keywordLevel === 0) {
        this.animaWeaveService.setWeavePoint(0, this.keywordComponent)
      }
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

  processKeyword(currentKeyword: KeywordModel, control: string) {
    if (this.previousKeyword) {
      if (this.previousKeyword.hybrid) {
        this.animaWeaveService.enableComponents({hybrid: this.previousKeyword.hybrid, disable: false});
      }
      this.animaWeaveService.modifyWeavePoint(-(this.keywordCost), this.keywordComponent);
    }
    this.keywordComponentReferences.forEach((compRef) => {
      compRef.destroy();
      this.childKeywords = [];
    })

    if (currentKeyword) {
      currentKeyword = this.modifyKeywordCost(currentKeyword);
      if (control === 'select') {
        const keywordReg = /([[A-Za-z-]+])/g;

        const nestedKeywords = currentKeyword.keyword.match(keywordReg);
        this.keywordCost = currentKeyword.cost;

        if (this.fixedQuantityKeywords.indexOf(currentKeyword.keyword) === -1) {
          this.animaWeaveService.modifyWeavePoint(this.keywordCost, this.keywordComponent)
        }

        if (nestedKeywords) {
          for (const keyword of nestedKeywords) {
             switch(keyword) {
              case '[Trigger]':
                this.addKeyword(this.triggerKeywords, keyword, 1);
                break;
              case '[Target]':
                this.addKeyword(this.targetKeywords, keyword, 1);
                break;
              case '[Effect]':
                this.addKeyword(this.effectKeywords, keyword, 1);
                break;
              case '[Duration]':
                this.addKeyword(this.durationKeywords, keyword, 1);
                break;
              case '[Cooldown]':
                this.addKeyword(this.cooldownKeywords, keyword, 1);
                break;
              case '[AnimaWeave]':
                this.addKeyword(this.animaWeaveKeywords, keyword, 1);
                break;
              case '[Approach]':
                this.addKeyword(this.approachKeywords, keyword, 1);
                break;
              case '[Attunement]':
                this.addKeyword(this.attunementKeywords, keyword, 1);
                break;
              case '[Concept]':
                this.addKeyword(this.conceptKeywords, keyword, 1);
                break;
              case '[Condition]':
                this.addKeyword(this.conditionKeywords, keyword, 1);
                break;
              case '[Dicepool]':
                this.addKeyword(this.dicepoolKeywords, keyword, 1);
                break;
              case '[Difficulty]':
                this.addKeyword(this.difficultyKeywords, keyword, 1);
                break;
              case '[Item]':
                this.addKeyword(this.itemKeywords, keyword, 1);
                break;
              case '[NPC]':
                this.addKeyword(this.npcKeywords, keyword, 1);
                break;
              case '[Period]':
                this.addKeyword(this.periodKeywords, keyword, 1);
                break;
              case '[Proficiency]':
                this.addKeyword(this.proficiencyKeywords, keyword, 1);
                break;
              case '[Quantity]':
                this.addKeyword(this.quantityKeywords, keyword, 1);
                break;
              case '[FixedQuantity-StaticValue]':
                this.addKeyword(this.quantityKeywords, keyword, currentKeyword.cost);
                break;
              case '[FixedQuantity-Target]':
                this.addKeyword(this.quantityKeywords, keyword, currentKeyword.cost);
                break;
              case '[FixedQuantity-Item]':
                this.addKeyword(this.quantityKeywords, keyword, currentKeyword.cost);
                break;
              case '[FixedQuantity-NPC]':
                this.addKeyword(this.quantityKeywords, keyword, currentKeyword.cost);
                break;
              case '[FixedQuantity-Dice]':
                this.addKeyword(this.quantityKeywords, keyword, currentKeyword.cost);
                break;
              case '[FixedQuantity-Modifier]':
                this.addKeyword(this.quantityKeywords, keyword, currentKeyword.cost);
                break;
              case '[FixedQuantity-Period]':
                this.addKeyword(this.quantityKeywords, keyword, currentKeyword.cost);
                break;
              case '[FixedQuantity-ActionType]':
                this.addKeyword(this.quantityKeywords, keyword, currentKeyword.cost);
                break;
              case '[FixedQuantity-AnimaWeavePoints]':
                this.addKeyword(this.quantityKeywords, keyword, currentKeyword.cost);
                break;
              case '[FixedQuantity-Miscellaneous]':
                this.addKeyword(this.quantityKeywords, keyword, currentKeyword.cost);
                break;
              case '[VariableQuantity]':
                this.addKeyword(this.variableQuantityKeywords, keyword, 1);
                break;
              case '[Range]':
                this.addKeyword(this.rangeKeywords, keyword, 1);
                break;
              case '[Situation]':
                this.addKeyword(this.situationKeywords, keyword, 1);
                break;
              case '[SkillCheck]':
                this.addKeyword(this.skillCheckKeywords, keyword, 1);
                break;
              case '[StaticValue]':
                this.addKeyword(this.staticValueKeywords, keyword, 1);
                break;
              case '[Status]':
                this.addKeyword(this.statusKeywords, keyword, 1);
                break;
              case '[Task]':
                this.addKeyword(this.taskKeywords, keyword, 1);
                break;
              case '[Timeframe]':
                this.addKeyword(this.timeframeKeywords, keyword, 1);
                break;
              default:
                break;
             }
             if (keyword.indexOf('[VariableQuantity-') !== -1) {
               this.addKeyword(this.variableQuantityKeywords, keyword, 1);
             }
          }
        }


        this.previousKeyword = this.selectedKeyword;
      }

      if (control === 'text') {
        this.keywordCost = Number(this.enteredKeyword);
        this.animaWeaveService.modifyWeavePoint(currentKeyword.cost, this.keywordComponent);
      }

      if (currentKeyword.hybrid) {
        // Disable the other components
        this.animaWeaveService.disableComponents({hybrid: currentKeyword.hybrid, disable: true});
      }

      this.getParentKeyword();
    }
  }

  modifyKeywordCost(sk: KeywordModel) {
    if (sk) {
      // Periods on Triggers invert Weave Point Costing
      if (sk.component === '[Period]' && this.keywordComponent === 'trigger') {
        sk.cost = -(sk.cost);
      }

      // Random Targets invert Weave Point Costing
      if (sk.component === '[Target]' && sk.keyword.toLowerCase().indexOf('random') !== -1) {
        sk.cost = -(sk.cost);
      }

      // Effect happens in Quantity Period invert Weave Point Costing
      if (sk.component === '[Period]' && this.keywordComponent === 'effect') {
        sk.cost = -(sk.cost);
      }

      // Variable Quantities set their value to 0 when Static Values are spent
      if (sk.component === '[VariableQuantity]' && this.keywordComponent === 'trigger' &&
          this.parentKeyword.parentKeyword.selectedKeyword.keyword === 'The character spends [Quantity] [StaticValue]') {
        sk.cost = -(this.parentKeyword.selectedKeyword.cost);
      }

      // Ongoing Skill Checks add Weave Points equal to the Skill Check's Weave Point Cost
      if (sk.component === '[VariableQuantity]' &&
          this.parentKeyword.parentKeyword.selectedKeyword.keyword === 'Ongoing [Approach] Skill Check at [Difficulty] [Proficiency], requiring [Quantity] successes to complete') {
        sk.cost = -(this.parentKeyword.selectedKeyword.cost * 2);
      }

      // Target ally with harmful effect
      // console.log(this.animaWeave.target.selectedKeyword);
      // console.log(this.animaWeave.effect.selectedKeyword);

    }

    return sk;
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

  checkKeywordFaction(factionKeyword: boolean|undefined) {
    if (factionKeyword) {
      return 'faction-keyword';
    }
    return '';
  }

  calculateKeywordCost(label: string, cost: number) {
    // qkr: Quantity Keyword Reference; qkc: Quantity Keyword Component
    const qkr = this.getImmediateParent().getImmediateParent().selectedKeyword;
    const qkc = this.getImmediateParent().getImmediateParent().keywordComponent;

    if ((qkr.keyword === 'As a Long Action, Spend [Quantity] [StaticValue]' && qkc === 'trigger') ||
        (qkr.keyword === 'As a Long Action, Spend [Quantity] Serenity' && qkc === 'trigger') ||
        (qkr.keyword === 'Ongoing [Approach] Skill Check at [Difficulty] [Proficiency], requiring [Quantity] successes to complete')) {
      this.keywordQuantityMultiplier = 1;
    }
    if ((qkr.keyword === '[Effect] happens in [Quantity] [Period]' && qkc === 'effect')) {
      this.keywordQuantityMultiplier = 2;
    }

    if (this.currentQuantity !== -1) {
      const prevKeyword = {
        keyword: label,
        cost: -(this.keywordQuantityMultiplier * this.currentQuantity),
      }
      this.processKeyword(prevKeyword, 'text');
    }
    const newKeyword = {
      keyword: label,
      cost: this.keywordQuantityMultiplier * cost,
    }
    this.selectedKeyword = newKeyword;
    this.keywordCost = newKeyword.cost;
    this.currentQuantity = cost;
    this.processKeyword(newKeyword, 'text');
  }

  setButtonColor(component: string) {
    switch(component) {
      case '[Trigger]':
        return 'trigger-remove';
        break;
      case '[Target]':
        return 'target-remove';
        break;
      case '[Effect]':
        return 'effect-remove';
        break;
      case '[Duration]':
        return 'duration-remove';
        break;
      case '[Cooldown]':
        return 'cooldown-remove';
        break;
      default:
        return 'variable-remove';
        break;
    }
  }

  ngOnDestroy() {
    if (this.selectedKeyword) {
      if (this.selectedKeyword.hybrid) {
        this.animaWeaveService.enableComponents({hybrid: this.previousKeyword.hybrid, disable: false});
      }
      if (this.selectedKeyword && this.fixedQuantityKeywords.indexOf(this.selectedKeyword.keyword) === -1) {
        this.animaWeaveService.modifyWeavePoint(-(this.keywordCost), this.keywordComponent);
      }
    }
  }
}
