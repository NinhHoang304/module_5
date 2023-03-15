import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Facility} from '../model/facility';
import {FacilityType} from '../model/facility-type';

@Injectable({
  providedIn: 'root'
})
export class FacilityTypeService {

  constructor(private httpClient: HttpClient) {
  }

  getAllFacilityType(): Observable<FacilityType[]> {
    return this.httpClient.get<FacilityType[]>('http://localhost:3000/facilityTypes');
  }

  findById(id: number): Observable<FacilityType> {
    return this.httpClient.get<FacilityType>('http://localhost:3000/facilityTypes/' + id);
  }

  save(facilityType: FacilityType): Observable<FacilityType> {
    return this.httpClient.post<FacilityType>('http://localhost:3000/facilityTypes', facilityType);
  }

  update(id: number, facilityType: FacilityType): Observable<Facility> {
    return this.httpClient.put<FacilityType>('http://localhost:3000/facilityTypes/' + id, facilityType);
  }

  delete(id: number): Observable<FacilityType> {
    return this.httpClient.delete<FacilityType>('http://localhost:3000/facilities/' + id);
  }
}
