import { Component, OnInit } from '@angular/core';
import {Iword} from '../model/iword';
import {DistionaryServiceService} from '../service/distionary-service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-distionary-detail',
  templateUrl: './distionary-detail.component.html',
  styleUrls: ['./distionary-detail.component.css']
})
export class DistionaryDetailComponent implements OnInit {
  word: Iword;
  constructor(private distionaryServiceService: DistionaryServiceService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = parseInt(paramMap.get('id'), 10);
      this.word = this.distionaryServiceService.findById(id);
    });
  }

}
