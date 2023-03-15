import {Component, Input, OnInit} from '@angular/core';
import {ImgService} from '../img.service';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {
  @Input() slide: string;
  constructor(private imgService: ImgService) { }

  ngOnInit(): void {
  }

  showSlide() {
    this.slide = this.imgService.imgList[0];
  }
}
