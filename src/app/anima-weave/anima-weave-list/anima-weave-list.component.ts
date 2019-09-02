import { Component, OnInit } from '@angular/core';
import { AnimaWeave } from '../keyword-list/keyword-model';

@Component({
  selector: 'anima-weave-list',
  templateUrl: './anima-weave-list.component.html',
  styleUrls: ['./anima-weave-list.component.sass']
})
export class AnimaWeaveListComponent implements OnInit {

  animaWeaves: AnimaWeave[] = [];
  animaWeaveName: string = '';

  constructor() { }

  ngOnInit() {
  }

  addWeave() {
    const animaWeave: AnimaWeave = {
      name: this.animaWeaveName,
    }
    this.animaWeaves.push(animaWeave);
    this.animaWeaveName = '';
  }

}
