import {Component, OnInit} from '@angular/core';
import {ImgService} from '../img.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  imgList: string [];
  temp = 0;
  slide: string;

  constructor(private imgService: ImgService) {
  }

  ngOnInit(): void {
    this.imgList = this.imgService.imgList;
  }

  next() {
    this.temp++;
    if (this.temp > this.imgList.length - 1) {
      this.temp = 0;
    }
    this.slide = this.imgList[this.temp];

  }

  previous() {
    this.temp--;
    if (this.temp < 0) {
      this.temp = this.imgList.length - 1;
    }
    this.slide = this.imgList[this.temp];

  }
}
