import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) {
  }
  getAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>('http://localhost:3000/customers');
  }
  findById(id: string): Observable<Customer> {
    return this.httpClient.get<Customer>('http://localhost:3000/customers/' + id);
  }
  save(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>('http://localhost:3000/customers', customer);
  }
  update(id: string, customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>('http://localhost:3000/customers/' + id, customer);
  }
  delete(id: string): Observable<Customer> {
    return this.httpClient.delete<Customer>('http://localhost:3000/customers/' + id);
  }
}
