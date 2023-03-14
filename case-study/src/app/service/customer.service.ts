import {Injectable} from '@angular/core';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerList: Customer[] = [
    {
      id: 1,
      code: 'KH-0001',
      name: 'Nguyễn Thị Hào',
      dayOfBirth: '1970-11-07',
      gender: false,
      idCard: '643431213',
      phoneNumber: '0945423362',
      email: 'thihao07@gmail.com',
      address: '23 Nguyễn Hoàng, Đà Nẵng',
      customerType: 1
    },
    {
      id: 2,
      code: 'KH-0002',
      name: 'Phạm Xuân Diệu',
      dayOfBirth: '1970-11-07',
      gender: true,
      idCard: '865342123',
      phoneNumber: '0954333333',
      email: 'xuandieu92@gmail.com',
      address: 'K77/22 Thái Phiên, Quảng Trị',
      customerType: 2
    },
    {
      id: 3,
      code: 'KH-0003',
      name: 'Trương Đình Nghệ',
      dayOfBirth: '1970-11-07',
      gender: true,
      idCard: '488645199',
      phoneNumber: '0373213122',
      email: 'nghenhan2702@gmail.com',
      address: 'K323/12 Ông Ích Khiêm, Vinh',
      customerType: 3
    }
  ];

  constructor() {
  }

  getAll(): Customer[] {
    return this.customerList;
  }

  findById(id: number): Customer {
    return this.customerList.find(customer => customer.id === id);
  }
}
