import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Facility} from '../model/facility';
import {RentType} from '../model/rent-type';

@Injectable({
  providedIn: 'root'
})
export class RentTypeService {

  constructor(private httpClient: HttpClient) {
  }

  getAllRentType(): Observable<RentType[]> {
    return this.httpClient.get<RentType[]>('http://localhost:3000/rentTypes');
  }

  findById(id: number): Observable<RentType> {
    return this.httpClient.get<RentType>('http://localhost:3000/rentTypes/' + id);
  }

  save(rentType: RentType): Observable<RentType> {
    return this.httpClient.post<RentType>('http://localhost:3000/rentTypes', rentType);
  }

  update(id: number, rentType: RentType): Observable<RentType> {
    return this.httpClient.put<RentType>('http://localhost:3000/rentTypes/' + id, rentType);
  }

  delete(id: number): Observable<RentType> {
    return this.httpClient.delete<RentType>('http://localhost:3000/rentTypes/' + id);
  }
}
