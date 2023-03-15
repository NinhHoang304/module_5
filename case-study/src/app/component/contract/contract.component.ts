import { Component, OnInit } from '@angular/core';
import {Contract} from '../../model/contract';
import {ContractService} from '../../service/contract.service';
import {Customer} from '../../model/customer';
import {Facility} from '../../model/facility';
import {CustomerService} from '../../service/customer.service';
import {FacilityService} from '../../service/facility.service';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  contractList: Contract[] = [];
  customerList: Customer[];
  facilityList: Facility[];
  constructor(private contractService: ContractService,
              private customerService: CustomerService,
              private facilityService: FacilityService) { }

  ngOnInit(): void {
    this.getAllCustomer();
    this.getAllFacility();
    this.contractService.getAllContract().subscribe(contract => {
      this.contractList = contract;
    });
  }
  getAllCustomer() {
    this.customerService.getAllCustomer().subscribe(customer => {
      this.customerList = customer;
    });
  }
  getAllFacility() {
    this.facilityService.getAllFacility().subscribe(facility => {
      this.facilityList = facility;
    });
  }
}
