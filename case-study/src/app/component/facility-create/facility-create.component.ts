import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
