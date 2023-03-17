import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoachComponent} from './component/coach/coach.component';
import {CoachCreateComponent} from './component/coach-create/coach-create.component';


const routes: Routes = [
  {path: 'coach', component: CoachComponent},
  {path: 'coach/create', component: CoachCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
