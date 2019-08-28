import { AfterViewInit, Component, OnInit, ViewContainerRef, ViewChild, ComponentRef, ComponentFactoryResolver, ChangeDetectorRef } from '@angular/core';
import {KeywordComponent} from '../keyword/keyword.component';
import {tropes} from '../keyword-list/tropes';
import {coreTriggerKeywords} from '../keyword-list/triggers';
import {coreTargetKeywords} from '../keyword-list/targets';
import {coreSituationKeywords} from '../keyword-list/situations';
import {KeywordModel, TropeModel} from '../keyword-list/keyword-model';
import {AnimaWeaveCreatorService} from './anima-weave-creator.service';


@Component({
  selector: 'app-anima-weave-creator',
  templateUrl: './anima-weave-creator.component.html',
  styleUrls: ['./anima-weave-creator.component.sass']
})
export class AnimaWeaveCreatorComponent implements AfterViewInit {

  @ViewChild('triggers', {read: ViewContainerRef, static: false}) triggerContainerRef: ViewContainerRef;
  @ViewChild('targets', {read: ViewContainerRef, static: false}) targetContainerRef: ViewContainerRef;

  keywordIndex: number = 0;
  keywordComponentReferences = [];
  keywordLevel: number = 0;

  tropes = tropes;
  selectedTrope: TropeModel;

  triggerKeywords: KeywordModel[] = [...coreTriggerKeywords];
  targetKeywords: KeywordModel[] = [...coreTargetKeywords];

  triggerPoints: number = 0;
  targetPoints: number = 0;
  totalPoints: number = 0;

  constructor(
    private cfr: ComponentFactoryResolver,
    private cdr: ChangeDetectorRef,
    private animaWeaveService: AnimaWeaveCreatorService,
    ) { }

  ngOnInit() {
    this.animaWeaveService.triggerWeavePointCostObservable.subscribe((data) => {
      this.triggerPoints = data;
    })
    this.animaWeaveService.targetWeavePointCostObservable.subscribe((data) => {
      this.targetPoints = data;
    })
    this.animaWeaveService.totalWeavePointCostObservable.subscribe((data) => {
      this.totalPoints = data;
    })
  }

  ngAfterViewInit() {
    this.addTrigger();
    this.addTarget();
    this.cdr.detectChanges();
  }

  selectTrope(trope: TropeModel) {
    this.animaWeaveService.setSelectedTrope(trope);

    this.triggerKeywords = [...coreTriggerKeywords];
    this.targetKeywords = [...coreTargetKeywords];

    // Process Fundamental Keywords of this Trope
    trope.tropeKeywords.forEach((keyword: KeywordModel) => {
      switch(keyword.component) {
        case '[Trigger]':
          this.triggerKeywords.push(keyword);
          break;
        case '[Target]':
          this.targetKeywords.push(keyword);
          break;
        default:
          break;
      }
    });
  }

  addTrigger() {
    let componentFactory = this.cfr.resolveComponentFactory(KeywordComponent);
    let componentRef: ComponentRef<KeywordComponent> = this.triggerContainerRef.createComponent(componentFactory);
    componentRef.instance.keywords = this.triggerKeywords;
    componentRef.instance.keywordLabel = '[Trigger]';
    componentRef.instance.keywordComponent = 'trigger';
    componentRef.instance.selectedTrope = this.selectedTrope;
    let currentComponent = componentRef.instance;

    currentComponent.self = currentComponent;
    currentComponent.index = ++this.keywordIndex;

    // add reference for newly created component
    this.keywordComponentReferences.push(componentRef);
  }

  addTarget() {
    let componentFactory = this.cfr.resolveComponentFactory(KeywordComponent);
    let componentRef: ComponentRef<KeywordComponent> = this.targetContainerRef.createComponent(componentFactory);
    componentRef.instance.keywords = this.targetKeywords;
    componentRef.instance.keywordLabel = '[Target]';
    componentRef.instance.keywordComponent = 'target';
    let currentComponent = componentRef.instance;

    currentComponent.self = currentComponent;
    currentComponent.index = ++this.keywordIndex;

    // add reference for newly created component
    this.keywordComponentReferences.push(componentRef);
  }
}
