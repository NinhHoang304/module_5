import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>('http://localhost:3000/todos');
  }

  save(todo: Todo): Observable<Todo> {
    return this.httpClient.post<Todo>('http://localhost:3000/todos', todo);
  }

  update(id: number, todo: Todo): Observable<Todo> {
    return this.httpClient.put<Todo>('http://localhost:3000/todos/' + id, todo);
  }

  findById(id: number): Observable<Todo> {
    return this.httpClient.get<Todo>('http://localhost:3000/todos/' + id);
  }

  delete(id: number): Observable<Todo> {
    return this.httpClient.delete<Todo>('http://localhost:3000/todos/' + id);
  }
}
