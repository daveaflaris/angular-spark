import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimaWeaveCreatorComponent} from './anima-weave/anima-weave-creator/anima-weave-creator.component'

const routes: Routes = [
    { path: '', component: AnimaWeaveCreatorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
