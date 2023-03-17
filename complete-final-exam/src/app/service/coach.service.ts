import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Coach} from '../model/coach';

@Injectable({
  providedIn: 'root'
})
export class CoachService {

  constructor(private httpClient: HttpClient) {
  }

  getAllCoach(): Observable<{ content: Coach[] }> {
    return this.httpClient.get<{ content: Coach[] }>('http://localhost:8080/api/coach');
  }
}
