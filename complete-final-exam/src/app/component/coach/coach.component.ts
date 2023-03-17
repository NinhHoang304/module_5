import {Component, OnInit} from '@angular/core';
import {Coach} from '../../model/coach';
import {CoachService} from '../../service/coach.service';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.css']
})
export class CoachComponent implements OnInit {
  coachList: Coach[];

  constructor(private coachService: CoachService) {
  }

  ngOnInit(): void {
    this.coachService.getAllCoach().subscribe(item => {
      console.log(item);
      this.coachList = item.content;
    });
  }

  getInfoDelete(id: any) {
    return null;
  }
}
