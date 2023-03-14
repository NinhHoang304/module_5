import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {TodoService} from '../service/todo.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  todoForm: FormGroup;
  id: number;
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.todoService.findById(this.id).subscribe(todo => {
        this.todoForm = new FormGroup({
          id: new FormControl(todo.id),
          content: new FormControl(todo.content),
          complete: new FormControl(todo.complete)
        });
      });
    });
  }

  updateTodo() {
    this.todoService.update(this.id, this.todoForm.value).subscribe(() => {
      this.router.navigateByUrl('/todo');
    });
  }
}
