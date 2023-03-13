import { Component, OnInit } from '@angular/core';
import {Iword} from '../model/iword';
import {DistionaryServiceService} from '../service/distionary-service.service';

@Component({
  selector: 'app-distionary-page',
  templateUrl: './distionary-page.component.html',
  styleUrls: ['./distionary-page.component.css']
})
export class DistionaryPageComponent implements OnInit {
  words: Iword[] = [];
  constructor(private distionaryServiceService: DistionaryServiceService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.words = this.distionaryServiceService.getAll();
  }
}
