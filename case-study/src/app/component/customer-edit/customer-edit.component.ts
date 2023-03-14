import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Customer} from '../../model/customer';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute) {
  }
  editCustomerForm: FormGroup;
  customer: Customer;
  id: number;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
    });
    this.customer = this.customerService.findById(this.id);
    this.editCustomerForm = new FormGroup({
      code: new FormControl(this.customer.code, [Validators.required, Validators.pattern(/^KH-\d{4}$/)]),
      name: new FormControl(this.customer.name, [Validators.required]),
      dayOfBirth: new FormControl(this.customer.dayOfBirth, [Validators.required]),
      gender: new FormControl(this.customer.gender, [Validators.required]),
      idCard: new FormControl(this.customer.idCard, [Validators.pattern(/\d{9}(\d{3})?/), Validators.required]),
      phoneNumber: new FormControl(this.customer.phoneNumber, [Validators.pattern(/^([(]84[)][+]|0)9[0-1]\d{7}$/), Validators.required]),
      email: new FormControl(this.customer.email, [Validators.email]),
      address: new FormControl(this.customer.address, [Validators.required]),
      customerType: new FormControl(this.customer.customerType, [Validators.required])
    });
  }

  updateCustomer() {
    return null;
  }
}
