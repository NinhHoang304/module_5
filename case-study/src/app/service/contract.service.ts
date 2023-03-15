import {Injectable} from '@angular/core';
import {Contract} from '../model/contract';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  constructor(private httpClient: HttpClient) {
  }

  getAllContract(): Observable<Contract[]> {
    return this.httpClient.get<Contract[]>('http://localhost:3000/contracts');
  }

  findById(id: number): Observable<Contract> {
    return this.httpClient.get<Contract>('http://localhost:3000/contracts/' + id);
  }

  save(contract: Contract): Observable<Contract> {
    return this.httpClient.post<Contract>('http://localhost:3000/contracts', contract);
  }

  update(id: number, contract: Contract): Observable<Contract> {
    return this.httpClient.put<Contract>('http://localhost:3000/contracts/' + id, contract);
  }

  delete(id: number): Observable<Contract> {
    return this.httpClient.delete<Contract>('http://localhost:3000/contracts/' + id);
  }
}
