import {Injectable} from '@angular/core';
import {Customer} from '../model/customer';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private httpClient: HttpClient) {
  }

  getAllCustomer(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>('http://localhost:3000/customers');
  }

  findById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>('http://localhost:3000/customers/' + id);
  }

  save(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>('http://localhost:3000/customers', customer);
  }

  update(id: number, customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>('http://localhost:3000/customers/' + id, customer);
  }

  delete(id: number): Observable<Customer> {
    return this.httpClient.delete<Customer>('http://localhost:3000/customers/' + id);
  }
}
