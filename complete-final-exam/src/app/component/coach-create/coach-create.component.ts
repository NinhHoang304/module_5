import {Component, OnInit} from '@angular/core';
import {CoachService} from '../../service/coach.service';
import {Coach} from '../../model/coach';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CoachTypeService} from '../../service/coach-type.service';
import {DepartureService} from '../../service/departure.service';
import {DestinationService} from '../../service/destination.service';
import {CoachType} from '../../model/coach-type';
import {Departure} from '../../model/departure';
import {Destination} from '../../model/destination';

@Component({
  selector: 'app-coach-create',
  templateUrl: './coach-create.component.html',
  styleUrls: ['./coach-create.component.css']
})
export class CoachCreateComponent implements OnInit {
  coachReactForm?: FormGroup;
  coachTypeList: CoachType[];
  departureList: Departure[];
  destinationList: Destination[];

  constructor(private coachService: CoachService,
              private coachTypeService: CoachTypeService,
              private departureService: DepartureService,
              private destinationService: DestinationService) {
  }

  ngOnInit(): void {
    this.getAllCoachType();
    this.getAllDeparture();
    this.getAllDestination();
    this.coachReactForm = new FormGroup({
      numberPlate: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      departureTime: new FormControl('', [Validators.required]),
      arrivalTime: new FormControl('', [Validators.required]),
      deleted: new FormControl('', [Validators.required]),
      coachType: new FormControl('', [Validators.required]),
      departure: new FormControl('', [Validators.required]),
      destination: new FormControl('', [Validators.required])
    });
  }

  getAllCoachType() {
    this.coachTypeService.getAllCoachType().subscribe(item => {
      this.coachTypeList = item;
    });
  }

  getAllDeparture() {
    this.departureService.getAllDeparture().subscribe(item => {
      this.departureList = item;
    });
  }

  getAllDestination() {
    this.destinationService.getAllDestination().subscribe(item => {
      this.destinationList = item;
    });
  }

  createCoach() {
    return null;
  }
}
