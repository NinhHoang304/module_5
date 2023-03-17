import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {CustomerTypeService} from '../../service/customer-type.service';
import Swal from 'sweetalert2';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../../model/customer-type';
import {Customer} from '../../model/customer';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router) {
  }

  customerForm: FormGroup;
  customerList: Customer[];
  customerTypeList: CustomerType[];

  ngOnInit(): void {
    this.getAllCustomerType();
    this.customerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      idCard: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email]),
      address: new FormControl('', [Validators.required]),
      customerType: new FormControl('', [Validators.required]),
    });
  }

  getAllCustomer() {
    this.customerService.getAll().subscribe(customer => {
      this.customerList = customer;
      this.router.navigateByUrl('/customer');
    });
  }

  getAllCustomerType() {
    this.customerTypeService.getAll().subscribe(customerType => {
      this.customerTypeList = customerType;
    });
  }

  addCustomer() {
    this.customerService.save(this.customerForm.value).subscribe(() => {
      Swal.fire({
        title: 'Success!',
        icon: 'success',
        confirmButtonText: 'Ok'
      });
      this.getAllCustomer();
    });
  }
}
