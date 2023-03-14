import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {Customer} from '../../model/customer';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  constructor(private customerService: CustomerService) {
  }
  createCustomerForm: FormGroup;

  ngOnInit(): void {
    this.createCustomerForm = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.pattern(/^KH-\d{4}$/)]),
      name: new FormControl('', [Validators.required]),
      dayOfBirth: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      idCard: new FormControl('', [Validators.pattern(/\d{9}(\d{3})?/), Validators.required]),
      phoneNumber: new FormControl('', [Validators.pattern(/^([(]84[)][+]|0)9[0-1]\d{7}$/), Validators.required]),
      email: new FormControl('', [Validators.email]),
      address: new FormControl('', [Validators.required]),
      customerType: new FormControl('', [Validators.required])
    });
  }

  addCustomer() {
    return null;
  }
}
