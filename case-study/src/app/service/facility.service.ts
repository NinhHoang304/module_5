import {Injectable} from '@angular/core';
import {Facility} from '../model/facility';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  constructor(private httpClient: HttpClient) {
  }

  getAllFacility(): Observable<Facility[]> {
    return this.httpClient.get<Facility[]>('http://localhost:3000/facilities');
  }

  findById(id: number): Observable<Facility> {
    return this.httpClient.get<Facility>('http://localhost:3000/facilities/' + id);
  }

  save(facility: Facility): Observable<Facility> {
    return this.httpClient.post<Facility>('http://localhost:3000/facilities', facility);
  }

  update(id: number, facility: Facility): Observable<Facility> {
    return this.httpClient.put<Facility>('http://localhost:3000/facilities/' + id, facility);
  }

  delete(id: number): Observable<Facility> {
    return this.httpClient.delete<Facility>('http://localhost:3000/facilities/' + id);
  }
}
