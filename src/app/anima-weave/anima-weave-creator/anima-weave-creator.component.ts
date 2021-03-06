import { Input, AfterViewInit, Component, OnInit, ViewContainerRef, ViewChild, ComponentRef, ComponentFactoryResolver, ChangeDetectorRef } from '@angular/core';
import {KeywordComponent} from '../keyword/keyword.component';
import {tropes} from '../keyword-list/tropes';
import {factions} from '../keyword-list/factions';

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

import {AnimaWeave, AnimaWeaveModel, KeywordModel, HybridCommand, TropeModel, FactionModel} from '../keyword-list/keyword-model';
import {AnimaWeaveCreatorService} from './anima-weave-creator.service';


@Component({
  selector: 'anima-weave-creator',
  templateUrl: './anima-weave-creator.component.html',
  styleUrls: ['./anima-weave-creator.component.sass']
})
export class AnimaWeaveCreatorComponent implements AfterViewInit {

  @Input() animaWeaveName: string;

  @ViewChild('triggers', {read: ViewContainerRef, static: false}) triggerContainerRef: ViewContainerRef;
  @ViewChild('targets', {read: ViewContainerRef, static: false}) targetContainerRef: ViewContainerRef;
  @ViewChild('effects', {read: ViewContainerRef, static: false}) effectContainerRef: ViewContainerRef;
  @ViewChild('durations', {read: ViewContainerRef, static: false}) durationContainerRef: ViewContainerRef;
  @ViewChild('cooldowns', {read: ViewContainerRef, static: false}) cooldownContainerRef: ViewContainerRef;

  animaWeave: AnimaWeaveModel = {} as AnimaWeaveModel;
  currentAnimaWeave: AnimaWeave = {} as AnimaWeave;
  animaWeaveComponents: KeywordModel[] = [];

  keywordIndex: number = 0;
  keywordComponentReferences = [];
  keywordLevel: number = 0;

  childKeywords: KeywordComponent[] = [];

  tropes = tropes;
  selectedTrope: TropeModel;

  factions = factions;
  selectedFaction: FactionModel;

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
  variableQuantityKeywords: KeywordModel[] = [...coreVariableQuantityKeywords];
  rangeKeywords: KeywordModel[] = [...coreRangeKeywords];
  situationKeywords: KeywordModel[] = [...coreSituationKeywords];
  skillCheckKeywords: KeywordModel[] = [...coreSkillCheckKeywords];
  staticValueKeywords: KeywordModel[] = [...coreStaticValueKeywords];
  statusKeywords: KeywordModel[] = [...coreStatusKeywords];
  taskKeywords: KeywordModel[] = [];
  timeframeKeywords: KeywordModel[] = [...coreTimeframeKeywords];

  triggerPoints: number = 0;
  triggerAdjusted: boolean = false;
  triggerAdjustments: string[] = [];

  targetPoints: number = 0;
  targetAdjusted: boolean = false;
  targetAdjustments: string[] = [];

  effectPoints: number = 0;
  effectAdjusted: boolean = false;
  effectAdjustments: string[] = [];

  durationPoints: number = 0;
  durationAdjusted: boolean = false;
  durationAdjustments: string[] = [];

  cooldownPoints: number = 0;
  cooldownAdjusted: boolean = false;
  cooldownAdjustments: string[] = [];

  totalPoints: number = 0;

  constructor(
    private cfr: ComponentFactoryResolver,
    private cdr: ChangeDetectorRef,
    private animaWeaveService: AnimaWeaveCreatorService,
    ) { }

  ngOnInit() {
    this.animaWeaveService.triggerWeavePointCostObservable.subscribe((data) => {
      this.triggerPoints = data;
    });
    this.animaWeaveService.targetWeavePointCostObservable.subscribe((data) => {
      this.targetPoints = data;
    });
    this.animaWeaveService.effectWeavePointCostObservable.subscribe((data) => {
      this.effectPoints = data;
    });
    this.animaWeaveService.durationWeavePointCostObservable.subscribe((data) => {
      this.durationPoints = data;
    });
    this.animaWeaveService.cooldownWeavePointCostObservable.subscribe((data) => {
      this.cooldownPoints = data;
    });

    this.animaWeaveService.triggerAdjustmentsObservable.subscribe((data) => {
      if (data.length > 0) {
        this.triggerAdjusted = true;
      } else {
        this.triggerAdjusted = false;
      }
      this.triggerAdjustments = data;
    });
    this.animaWeaveService.targetAdjustmentsObservable.subscribe((data) => {
      if (data.length > 0) {
        this.targetAdjusted = true;
      } else {
        this.targetAdjusted = false;
      }
      this.targetAdjustments = data;
    });
    this.animaWeaveService.effectAdjustmentsObservable.subscribe((data) => {
      if (data.length > 0) {
        this.effectAdjusted = true;
      } else {
        this.effectAdjusted = false;
      }
      this.effectAdjustments = data;
    });
    this.animaWeaveService.durationAdjustmentsObservable.subscribe((data) => {
      if (data.length > 0) {
        this.durationAdjusted = true;
      } else {
        this.durationAdjusted = false;
      }
      this.durationAdjustments = data;
    });
    this.animaWeaveService.cooldownAdjustmentsObservable.subscribe((data) => {
      if (data.length > 0) {
        this.cooldownAdjusted = true;
      } else {
        this.cooldownAdjusted = false;
      }
      this.cooldownAdjustments = data;
    });

    this.animaWeaveService.totalWeavePointCostObservable.subscribe((data) => {
      this.totalPoints = data;
    });
    this.animaWeaveService.refreshWeaveObservable.subscribe((refresh) => {
      if (refresh) this.getChildKeywords();
    });
    this.animaWeaveService.hybridComponentObservable.subscribe((command) => {
      command.hybrid.forEach((component) => {
        switch(component) {
          case '[Trigger]':
            this.childKeywords[0].keywordDisabled = command.disable;
            this.childKeywords[0].removeKeyword(0)
            break;
          case '[Target]':
            this.childKeywords[1].keywordDisabled = command.disable;
            this.childKeywords[1].removeKeyword(0)
            break;
          case '[Effect]':
            this.childKeywords[2].keywordDisabled = command.disable;
            this.childKeywords[2].removeKeyword(0)
            break;
          case '[Duration]':
            this.childKeywords[3].keywordDisabled = command.disable;
            this.childKeywords[3].removeKeyword(0)
            break;
          case '[Cooldown]':
            this.childKeywords[4].keywordDisabled = command.disable;
            this.childKeywords[4].removeKeyword(0)
            break;
          default:
            break;
        }
        this.cdr.detectChanges();
      });
    });
  }

  ngAfterViewInit() {
    this.addTrigger();
    this.addTarget();
    this.addEffect();
    this.addDuration();
    this.addCooldown();
    this.animaWeaveService.setAnimaWeave(this.animaWeave);
    this.cdr.detectChanges();
  }

  resetAnimaWeave() {
    if (this.childKeywords[0]) {
      this.childKeywords[0].processKeyword(null, '');
      this.childKeywords[0].previousKeyword = null;
      this.childKeywords[0].selectedKeyword = null;
    }
    if (this.childKeywords[1]) {
      this.childKeywords[1].processKeyword(null, '');
      this.childKeywords[1].previousKeyword = null;
      this.childKeywords[1].selectedKeyword = null;
    }
    if (this.childKeywords[2]) {
      this.childKeywords[2].processKeyword(null, '');
      this.childKeywords[2].previousKeyword = null;
      this.childKeywords[2].selectedKeyword = null;
    }
    if (this.childKeywords[3]) {
      this.childKeywords[3].processKeyword(null, '');
      this.childKeywords[3].previousKeyword = null;
      this.childKeywords[3].selectedKeyword = null;
    }
    if (this.childKeywords[4]) {
      this.childKeywords[4].processKeyword(null, '');
      this.childKeywords[4].previousKeyword = null;
      this.childKeywords[4].selectedKeyword = null;
    }

    this.animaWeaveService.setWeavePoint(0, 'trigger');
    this.animaWeaveService.setWeavePoint(0, 'target');
    this.animaWeaveService.setWeavePoint(0, 'effect');
    this.animaWeaveService.setWeavePoint(0, 'duration');
    this.animaWeaveService.setWeavePoint(0, 'cooldown');
  }

  resetKeywords() {
    this.triggerKeywords = [...coreTriggerKeywords];
    this.targetKeywords = [...coreTargetKeywords];
    this.effectKeywords = [...coreEffectKeywords];
    this.durationKeywords = [...coreDurationKeywords];
    this.cooldownKeywords = [...coreCooldownKeywords];

    this.animaWeaveKeywords = [...coreAnimaWeaveKeywords];
    this.approachKeywords = [...coreApproachKeywords];
    this.attunementKeywords = [...coreAttunementKeywords];
    this.conceptKeywords = [...coreConceptKeywords];
    this.conditionKeywords = [...coreConditionKeywords];
    this.dicepoolKeywords = [...coreDicepoolKeywords];
    this.difficultyKeywords = [...coreDifficultyKeywords];
    this.itemKeywords = [...coreItemKeywords];
    this.npcKeywords = [...coreNPCKeywords];
    this.periodKeywords = [...corePeriodKeywords];
    this.proficiencyKeywords = [...coreProficiencyKeywords];
    this.quantityKeywords = [...coreQuantityKeywords];
    this.variableQuantityKeywords = [...coreVariableQuantityKeywords];
    this.rangeKeywords = [...coreRangeKeywords];
    this.situationKeywords = [...coreSituationKeywords];
    this.skillCheckKeywords = [...coreSkillCheckKeywords];
    this.staticValueKeywords = [...coreStaticValueKeywords];
    this.statusKeywords = [...coreStatusKeywords];
    this.taskKeywords = [];
    this.timeframeKeywords = [...coreTimeframeKeywords];
  }

  selectTrope(trope: TropeModel) {
    this.animaWeaveService.setSelectedTrope(trope);
    this.selectedTrope = trope;

    this.resetKeywords();
    this.resetAnimaWeave();
    this.cdr.detectChanges();
    this.populateTropeKeywords(trope);
    if (this.selectedFaction) {
      this.populateFactionKeywords(this.selectedFaction);
    }
  }

  populateTropeKeywords(trope: TropeModel) {
    // Process Fundamental Keywords of this Trope
    trope.tropeKeywords.forEach((keyword: KeywordModel) => {
      switch(keyword.component) {
        case '[Trigger]':
          this.triggerKeywords.push(keyword);
          break;
        case '[Target]':
          this.targetKeywords.push(keyword);
          break;
        case '[Effect]':
          this.effectKeywords.push(keyword);
          break;
        case '[Duration]':
          this.durationKeywords.push(keyword);
          break;
        case '[Cooldown]':
          this.cooldownKeywords.push(keyword);
          break;
        case '[AnimaWeave]':
          this.animaWeaveKeywords.push(keyword);
          break;
        case '[Approach]':
          this.approachKeywords.push(keyword);
          break;
        case '[Attunement]':
          this.attunementKeywords.push(keyword);
          break;
        case '[Concept]':
          this.conceptKeywords.push(keyword);
          break;
        case '[Condition]':
          this.conditionKeywords.push(keyword);
          break;
        case '[Dicepool]':
          this.dicepoolKeywords.push(keyword);
          break;
        case '[Difficulty]':
          this.difficultyKeywords.push(keyword);
          break;
        case '[Item]':
          this.itemKeywords.push(keyword);
          break;
        case '[NPC]':
          this.npcKeywords.push(keyword);
          break;
        case '[Period]':
          this.periodKeywords.push(keyword);
          break;
        case '[Proficiency]':
          this.proficiencyKeywords.push(keyword);
          break;
        case '[Quantity]':
          this.quantityKeywords.push(keyword);
          break;
        case '[VariableQuantity]':
          this.variableQuantityKeywords.push(keyword);
          break;
        case '[Range]':
          this.rangeKeywords.push(keyword);
          break;
        case '[Situation]':
          this.situationKeywords.push(keyword);
          break;
        case '[SkillCheck]':
          this.skillCheckKeywords.push(keyword);
          break;
        case '[StaticValue]':
          this.staticValueKeywords.push(keyword);
          break;
        case '[Status]':
          this.statusKeywords.push(keyword);
          break;
        case '[Task]':
          this.taskKeywords.push(keyword);
          break;
        case '[Timeframe]':
          this.timeframeKeywords.push(keyword);
          break;
        default:
          break;
      }
    });
  }

  selectFaction(faction: FactionModel) {
    this.animaWeaveService.setSelectedFaction(faction);
    this.selectedFaction = faction;

    this.resetKeywords();
    this.resetAnimaWeave();
    this.cdr.detectChanges();
    if (this.selectedTrope) {
      this.populateTropeKeywords(this.selectedTrope);
    }
    this.populateFactionKeywords(faction);
  }

  populateFactionKeywords(faction: FactionModel) {
    // Process Fundamental Keywords of this Trope
    faction.factionKeywords.forEach((keyword: KeywordModel) => {
      switch(keyword.component) {
        case '[Trigger]':
          this.triggerKeywords.push(keyword);
          break;
        case '[Target]':
          this.targetKeywords.push(keyword);
          break;
        case '[Effect]':
          this.effectKeywords.push(keyword);
          break;
        case '[Duration]':
          this.durationKeywords.push(keyword);
          break;
        case '[Cooldown]':
          this.cooldownKeywords.push(keyword);
          break;
        case '[AnimaWeave]':
          this.animaWeaveKeywords.push(keyword);
          break;
        case '[Approach]':
          this.approachKeywords.push(keyword);
          break;
        case '[Attunement]':
          this.attunementKeywords.push(keyword);
          break;
        case '[Concept]':
          this.conceptKeywords.push(keyword);
          break;
        case '[Condition]':
          this.conditionKeywords.push(keyword);
          break;
        case '[Dicepool]':
          this.dicepoolKeywords.push(keyword);
          break;
        case '[Difficulty]':
          this.difficultyKeywords.push(keyword);
          break;
        case '[Item]':
          this.itemKeywords.push(keyword);
          break;
        case '[NPC]':
          this.npcKeywords.push(keyword);
          break;
        case '[Period]':
          this.periodKeywords.push(keyword);
          break;
        case '[Proficiency]':
          this.proficiencyKeywords.push(keyword);
          break;
        case '[Quantity]':
          this.quantityKeywords.push(keyword);
          break;
        case '[VariableQuantity]':
          this.variableQuantityKeywords.push(keyword);
          break;
        case '[Range]':
          this.rangeKeywords.push(keyword);
          break;
        case '[Situation]':
          this.situationKeywords.push(keyword);
          break;
        case '[SkillCheck]':
          this.skillCheckKeywords.push(keyword);
          break;
        case '[StaticValue]':
          this.staticValueKeywords.push(keyword);
          break;
        case '[Status]':
          this.statusKeywords.push(keyword);
          break;
        case '[Task]':
          this.taskKeywords.push(keyword);
          break;
        case '[Timeframe]':
          this.timeframeKeywords.push(keyword);
          break;
        default:
          break;
      }
    });
  }

  getChildKeywords() {
    if (this.childKeywords) {
      this.childKeywords.forEach((child, index) => {
        // console.log('parent component');
        // console.log(child.selectedKeyword);
        child.getChildKeywords(child.selectedKeyword)
        this.animaWeaveComponents[index] = child.selectedKeyword;
        // console.log('leaving parent');
      })
      this.currentAnimaWeave.components = this.animaWeaveComponents;
      this.animaWeaveService.setCurrentAnimaWeave(this.currentAnimaWeave);
    }
  }


  addTrigger() {
    let componentFactory = this.cfr.resolveComponentFactory(KeywordComponent);
    let componentRef: ComponentRef<KeywordComponent> = this.triggerContainerRef.createComponent(componentFactory);
    componentRef.instance.keywords = this.triggerKeywords;
    componentRef.instance.keywordLabel = '[Trigger]';
    componentRef.instance.keywordComponent = 'trigger';
    componentRef.instance.selectedTrope = this.selectedTrope;
    componentRef.instance.selectedFaction = this.selectedFaction;
    let currentComponent = componentRef.instance;

    currentComponent.self = currentComponent;
    currentComponent.index = ++this.keywordIndex;

    // add reference for newly created component
    this.keywordComponentReferences.push(componentRef);

    this.childKeywords.push(componentRef.instance);
    this.animaWeave.trigger = componentRef.instance;
  }

  addTarget() {
    let componentFactory = this.cfr.resolveComponentFactory(KeywordComponent);
    let componentRef: ComponentRef<KeywordComponent> = this.targetContainerRef.createComponent(componentFactory);
    componentRef.instance.keywords = this.targetKeywords;
    componentRef.instance.keywordLabel = '[Target]';
    componentRef.instance.keywordComponent = 'target';
    componentRef.instance.selectedTrope = this.selectedTrope;
    componentRef.instance.selectedFaction = this.selectedFaction;
    let currentComponent = componentRef.instance;

    currentComponent.self = currentComponent;
    currentComponent.index = ++this.keywordIndex;

    // add reference for newly created component
    this.keywordComponentReferences.push(componentRef);

    this.childKeywords.push(componentRef.instance);
    this.animaWeave.target = componentRef.instance;
  }

  addEffect() {
    let componentFactory = this.cfr.resolveComponentFactory(KeywordComponent);
    let componentRef: ComponentRef<KeywordComponent> = this.effectContainerRef.createComponent(componentFactory);
    componentRef.instance.keywords = this.effectKeywords;
    componentRef.instance.keywordLabel = '[Effect]';
    componentRef.instance.keywordComponent = 'effect';
    componentRef.instance.selectedTrope = this.selectedTrope;
    componentRef.instance.selectedFaction = this.selectedFaction;
    let currentComponent = componentRef.instance;

    currentComponent.self = currentComponent;
    currentComponent.index = ++this.keywordIndex;

    // add reference for newly created component
    this.keywordComponentReferences.push(componentRef);

    this.childKeywords.push(componentRef.instance);
    this.animaWeave.effect = componentRef.instance;
  }

  addDuration() {
    let componentFactory = this.cfr.resolveComponentFactory(KeywordComponent);
    let componentRef: ComponentRef<KeywordComponent> = this.durationContainerRef.createComponent(componentFactory);
    componentRef.instance.keywords = this.durationKeywords;
    componentRef.instance.keywordLabel = '[Duration]';
    componentRef.instance.keywordComponent = 'duration';
    componentRef.instance.selectedTrope = this.selectedTrope;
    componentRef.instance.selectedFaction = this.selectedFaction;
    let currentComponent = componentRef.instance;

    currentComponent.self = currentComponent;
    currentComponent.index = ++this.keywordIndex;

    // add reference for newly created component
    this.keywordComponentReferences.push(componentRef);

    this.childKeywords.push(componentRef.instance);
    this.animaWeave.duration = componentRef.instance;
  }

  addCooldown() {
    let componentFactory = this.cfr.resolveComponentFactory(KeywordComponent);
    let componentRef: ComponentRef<KeywordComponent> = this.cooldownContainerRef.createComponent(componentFactory);
    componentRef.instance.keywords = this.cooldownKeywords;
    componentRef.instance.keywordLabel = '[Cooldown]';
    componentRef.instance.keywordComponent = 'cooldown';
    componentRef.instance.selectedTrope = this.selectedTrope;
    componentRef.instance.selectedFaction = this.selectedFaction;
    let currentComponent = componentRef.instance;

    currentComponent.self = currentComponent;
    currentComponent.index = ++this.keywordIndex;

    // add reference for newly created component
    this.keywordComponentReferences.push(componentRef);

    this.childKeywords.push(componentRef.instance);
    this.animaWeave.cooldown = componentRef.instance;
  }
}
