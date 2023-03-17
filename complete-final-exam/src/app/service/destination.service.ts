import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Destination} from '../model/destination';


@Injectable({
  providedIn: 'root'
})
export class DestinationService {

  constructor(private httpClient: HttpClient) {
  }

  getAllDestination(): Observable<Destination[]> {
    return this.httpClient.get<Destination[]>('http://localhost:8080/api/destination');
  }
}
