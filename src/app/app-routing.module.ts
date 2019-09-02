import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimaWeaveListComponent} from './anima-weave/anima-weave-list/anima-weave-list.component'

const routes: Routes = [
    { path: '', component: AnimaWeaveListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
