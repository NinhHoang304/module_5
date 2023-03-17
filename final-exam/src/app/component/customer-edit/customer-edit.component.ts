import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {CustomerTypeService} from '../../service/customer-type.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Customer} from '../../model/customer';
import {CustomerType} from '../../model/customer-type';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  customerForm: FormGroup;
  customer: Customer;
  customerTypeList: CustomerType[];
  customerList: Customer[];
  id?: string;

  ngOnInit(): void {
    this.customerTypeService.getAll().subscribe(customerTypeList => {
      this.customerTypeList = customerTypeList;
    });
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      this.getCustomerDetail(this.id);
    });
  }

  getCustomerDetail(id) {
    this.customerService.findById(id).subscribe(item => {
      this.customerForm = new FormGroup({
        id: new FormControl(item.id, [Validators.required]),
        name: new FormControl(item.name, [Validators.required]),
        dateOfBirth: new FormControl(item.dateOfBirth, [Validators.required]),
        gender: new FormControl(item.gender, [Validators.required]),
        idCard: new FormControl(item.idCard, [Validators.required]),
        phoneNumber: new FormControl(item.phoneNumber, [Validators.required]),
        email: new FormControl(item.email, [Validators.email]),
        address: new FormControl(item.address, [Validators.required]),
        customerType: new FormControl(this.customerTypeList.find(a => a.id == item.customerType.id), [Validators.required])
      });
      // dùng để copy các giá trị từ customer sang customerForm
      // this.customerForm.patchValue(customer);
    });
  }

  getAllCustomer() {
    this.customerService.getAll().subscribe(customerList => {
      this.customerList = customerList;
    });
    this.router.navigateByUrl('/customer');
  }

  // getAllCustomerType() {
  //   this.customerTypeService.getAll().subscribe(customerTypeList => {
  //     this.customerTypeList = customerTypeList;
  //   });
  // }

  updateCustomer() {
    this.customerService.update(this.id, this.customerForm.value).subscribe(() => {
      Swal.fire({
        title: 'Update Success!',
        icon: 'success',
        confirmButtonText: 'Ok',
      });
      this.getAllCustomer();
    });
  }
}
