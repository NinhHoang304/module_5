import {Component, OnInit} from '@angular/core';
import {FacilityService} from '../../service/facility.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Facility} from '../../model/facility';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {

  constructor(private facilityService: FacilityService,
              private activatedRoute: ActivatedRoute) {
  }

  editFacilityForm: FormGroup;
  facility: Facility;
  id: number;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
    });
    this.facility = this.facilityService.findById(this.id);
    this.editFacilityForm = new FormGroup({
      id: new FormControl(this.facility.id),
      img: new FormControl(this.facility.img),
      facilityType: new FormControl(this.facility.facilityType),
      name: new FormControl(this.facility.name, [Validators.required, Validators.pattern('^\\D+$')]),
      area: new FormControl(this.facility.area, [Validators.required]),
      cost: new FormControl(this.facility.cost, [Validators.required]),
      maxPeople: new FormControl(this.facility.maxPeople, [Validators.required]),
      rentType: new FormControl(this.facility.rentType, [Validators.required]),
      standardRoom: new FormControl(this.facility.standardRoom, [Validators.required]),
      descriptionOtherConvenience: new FormControl(this.facility.descriptionOtherConvenience, [Validators.required]),
      poolArea: new FormControl(this.facility.poolArea, [Validators.required, Validators.pattern(/^[1-9]\d*$/)]),
      numberOfFloors: new FormControl(this.facility.numberOfFloors, [Validators.required, Validators.pattern(/^[1-9]\d*$/)]),
      facilityFree: new FormControl(this.facility.facilityFree, [Validators.required])
    });
  }

  updateFacility() {
    return null;
  }
}
