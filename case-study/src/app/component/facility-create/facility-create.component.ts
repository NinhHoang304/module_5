import {Component, OnInit} from '@angular/core';
import {FacilityService} from '../../service/facility.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RentTypeService} from '../../service/rent-type.service';
import {FacilityTypeService} from '../../service/facility-type.service';
import {RentType} from '../../model/rent-type';
import {FacilityType} from '../../model/facility-type';

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {

  constructor(private facilityService: FacilityService,
              private rentTypeService: RentTypeService,
              private facilityTypeService: FacilityTypeService,
              private router: Router) {
  }

  facilityCreateForm: FormGroup;
  rentTypeList: RentType[];
  facilityTypeList: FacilityType[];

  ngOnInit(): void {
    this.getAllRentType();
    this.getAllFacilityType();
    this.facilityCreateForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('^\\D+$')]),
      area: new FormControl('', [Validators.required]),
      cost: new FormControl('', [Validators.required]),
      maxPeople: new FormControl('', [Validators.required]),
      rentType: new FormControl('', [Validators.required]),
      facilityType: new FormControl(),
      standardRoom: new FormControl('', [Validators.required]),
      descriptionOtherConvenience: new FormControl('', [Validators.required]),
      poolArea: new FormControl('', [Validators.required, Validators.pattern(/^[1-9]\d*$/)]),
      numberOfFloors: new FormControl('', [Validators.required, Validators.pattern(/^[1-9]\d*$/)]),
      facilityFree: new FormControl('', [Validators.required])
    });
  }
  getAllRentType() {
    this.rentTypeService.getAllRentType().subscribe(rentType => {
      this.rentTypeList = rentType;
    });
  }
  getAllFacilityType() {
    this.facilityTypeService.getAllFacilityType().subscribe(facilityType => {
      this.facilityTypeList = facilityType;
    });
  }
  addFacility() {
    this.facilityService.save(this.facilityCreateForm.value).subscribe(() => {
      alert('Add Success');
      this.router.navigateByUrl('/facility');
    });
  }
  addVilla() {
    // document.getElementById("facilityType").value = 1;
    document.getElementById('standardRoom').style.display = 'block';
    document.getElementById('descriptionOtherConvenience').style.display = 'block';
    document.getElementById('poolArea').style.display = 'block';
    document.getElementById('numberOfFloors').style.display = 'block';
    document.getElementById('facilityFree').style.display = 'none';
  }

  addHouse() {
    // document.getElementById('facilityType').value = 2;
    document.getElementById('standardRoom').style.display = 'block';
    document.getElementById('descriptionOtherConvenience').style.display = 'block';
    document.getElementById('poolArea').style.display = 'none';
    document.getElementById('numberOfFloors').style.display = 'block';
    document.getElementById('facilityFree').style.display = 'none';
  }

  addRoom() {
    // document.getElementById('facilityType').value = 3;
    document.getElementById('standardRoom').style.display = 'none';
    document.getElementById('descriptionOtherConvenience').style.display = 'none';
    document.getElementById('poolArea').style.display = 'none';
    document.getElementById('numberOfFloors').style.display = 'none';
    document.getElementById('facilityFree').style.display = 'block';
  }
}
