import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerList: Customer[] = [];
  idDelete: number;
  nameDelete: string;
  page = 0;

  constructor(private customerService: CustomerService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.customerService.getAllCustomer().subscribe(customerList => {
      this.customerList = customerList;
    });
  }

  getInfoDelete(id: number, name: string) {
    this.idDelete = id;
    this.nameDelete = name;
  }

  deleteCustomer() {
    this.customerService.delete(this.idDelete).subscribe(() => {
      Swal.fire({
        title: 'Success!',
        text: 'Do you want to continue',
        icon: 'success',
        confirmButtonText: 'Ok'
      });
      this.ngOnInit();
    });
  }

  searchByName(name: string) {
    this.customerService.searchCustomer(name).subscribe(customer => {
      this.customerList = customer;
    });
  }
}
