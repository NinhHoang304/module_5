import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImgSliderRoutingModule } from './img-slider-routing.module';
import { SliderComponent } from './slider/slider.component';
import { SlideComponent } from './slide/slide.component';


@NgModule({
  declarations: [SliderComponent, SlideComponent],
  exports: [
    SlideComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    ImgSliderRoutingModule
  ]
})
export class ImgSliderModule { }
