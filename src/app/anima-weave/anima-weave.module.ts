import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimaWeaveCreatorComponent } from './anima-weave-creator/anima-weave-creator.component';
import {AbsPipe} from './anima-weave-creator/anima-weave-creator.pipe';
import { AngularMaterialModule } from '../shared/angular-material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MatCardModule} from '@angular/material/card';
import { KeywordComponent } from './keyword/keyword.component';
import { AnimaWeaveListComponent } from './anima-weave-list/anima-weave-list.component';

@NgModule({
  declarations: [AnimaWeaveCreatorComponent, KeywordComponent, AbsPipe, AnimaWeaveListComponent],
  imports: [
    FormsModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
  ],
  exports: [AnimaWeaveCreatorComponent, AnimaWeaveListComponent],
  entryComponents: [KeywordComponent],
})
export class AnimaWeaveModule { }
