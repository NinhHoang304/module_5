import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerList: Customer[] = [];
  idDelete: number;
  nameDelete: string;

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
      alert('delete success');
      this.router.navigateByUrl('/customer');
    });
  }
}
