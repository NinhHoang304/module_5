import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SlideComponent} from './slide/slide.component';
import {SliderComponent} from './slider/slider.component';


const routes: Routes = [
  {path: 'list', component: SlideComponent},
  {path: 'list', component: SliderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImgSliderRoutingModule { }
