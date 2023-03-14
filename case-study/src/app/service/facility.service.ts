import {Injectable} from '@angular/core';
import {Facility} from '../model/facility';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  facilityList: Facility[] = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
      img: '/assets/img/1.jpg',
      name: 'Room twin 02',
      area: 125,
      cost: 900000,
      maxPeople: 2,
      rentType: 4,
      facilityType: 3,
      facilityFree: '1 xe máy'
    }];

  constructor() {
  }

  getAll(): Facility[] {
    return this.facilityList;
  }
}
