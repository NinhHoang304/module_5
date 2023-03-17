import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {CustomerTypeService} from '../../service/customer-type.service';
import {Customer} from '../../model/customer';
import {CustomerType} from '../../model/customer-type';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerList: Customer[];
  customerTypeList: CustomerType[];
  page = 0;

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService) {
  }

  ngOnInit(): void {
    this.getAllCustomer();
    this.getAllCustomerType();
  }

  getAllCustomer() {
    this.customerService.getAll().subscribe(customerList => {
      this.customerList = customerList;
    });
  }
  getAllCustomerType() {
    this.customerTypeService.getAll().subscribe(customerTypeList => {
      this.customerTypeList = customerTypeList;
    });
  }
}
