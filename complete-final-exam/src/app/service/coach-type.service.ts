import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CoachType} from '../model/coach-type';

@Injectable({
  providedIn: 'root'
})
export class CoachTypeService {

  constructor(private httpClient: HttpClient) {
  }

  getAllCoachType(): Observable<CoachType[]> {
    return this.httpClient.get<CoachType[]>('http://localhost:8080/api/coachType');
  }
}
