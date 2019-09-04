import { Input, Component, OnInit } from '@angular/core';
import {KeywordModel} from '../keyword-list/keyword-model';

@Component({
  selector: 'anima-weave-text',
  templateUrl: './anima-weave-text.component.html',
  styleUrls: ['./anima-weave-text.component.sass']
})
export class AnimaWeaveTextComponent implements OnInit {
  @Input() childKeywords: KeywordModel[];
  @Input() level: number;

  componentText: string = '';

  constructor() { }

  ngOnInit() {
  }

  getComponentClass(component: string) {
    let className = '';
    switch(component) {
      case '[Trigger]':
        className = 'trigger-background';
        break;
      case '[Target]':
        className = 'target-background';
        break;
      case '[Effect]':
        className = 'effect-background';
        break;
      case '[Duration]':
        className = 'duration-background';
        break;
      case '[Cooldown]':
        className = 'cooldown-background';
        break;
      default:
        break;
    }

    return className;
  }

  stripComponentTags(component: string) {
    return component.substr(1).slice(0, -1);
  }

}
