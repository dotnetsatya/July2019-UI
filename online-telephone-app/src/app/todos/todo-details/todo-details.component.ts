import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss']
})
export class TodoDetailsComponent implements OnInit {

  todoId: string;
  selectedTodo: Todo;
  constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.todoId = params.get('id');
    });

    this.http.get<Todo>(`https://jsonplaceholder.typicode.com/todos/${this.todoId}`).subscribe(response => {
      this.selectedTodo = response;
    }, error => {
      console.log(error.message);
    });
  }

  onRedirectToTodods(): void {
    this.router.navigate(['/todos']);
  }

}
