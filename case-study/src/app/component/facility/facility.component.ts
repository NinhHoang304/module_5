import { Component, OnInit } from '@angular/core';
import {Facility} from '../../model/facility';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {
  facilityList: Facility[] = [
    {
      img: '/assets/img/1.jpg',
      name: 'Villa beach front',
      area: 250,
      cost: 1000000,
      maxPeople: 6,
      rentType: 3,
      facilityType: 1,
      standardRoom: 'Normal',
      descriptionOtherConvenience: 'Có hồ bơi',
      poolArea: 100,
      numberOfFloors: 4
    },
    {
      img: '/assets/img/1.jpg',
      name: 'House princess 02',
      area: 150,
      cost: 4000000,
      maxPeople: 2,
      rentType: 4,
      facilityType: 2,
      standardRoom: 'Normal',
      descriptionOtherConvenience: 'Có thêm bếp nướng',
      numberOfFloors: 2
    },
    {
      img: '/assets/img/3.jpg',
      name: 'Room twin 02',
      area: 125,
      cost: 900000,
      maxPeople: 2,
      rentType: 4,
      facilityType: 3,
      facilityFree: '1 xe máy'
    },
    {
      img: '/assets/img/1.jpg',
      name: 'House princess 02',
      area: 150,
      cost: 4000000,
      maxPeople: 2,
      rentType: 4,
      facilityType: 2,
      standardRoom: 'Normal',
      descriptionOtherConvenience: 'Có thêm bếp nướng',
      numberOfFloors: 2
    },
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
