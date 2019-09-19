import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo';
import { Router } from '@angular/router';
import { BroadCastService } from '../services/broadcast.service';
@Component({
    selector: 'todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

    public todoList: Todo[] = [];
    public selectedToDo: Todo;
    private baseUrl = "https://jsonplaceholder.typicode.com/todos";
    constructor(private broadCast: BroadCastService, private http: HttpClient, private router: Router) {

    }


    ngOnInit(): void {
        this.loadTodos();
    }

    loadTodos(): void {
        this.broadCast.toggleSpinner(true);
        this.http.get<Todo[]>(this.baseUrl).subscribe(response => {
            this.todoList = response;
            this.broadCast.toggleSpinner(false);
        }, error => {
            console.log(error.message);
            this.broadCast.toggleSpinner(false);
        });

    }

    onTodoSelect(todo: Todo): void {
        this.selectedToDo = todo;
        this.router.navigate(['/todo-details', this.selectedToDo.id]);

    }

    onDeleteTodo(todo: Todo): void {
        this.http.delete(this.baseUrl + "/" + todo.id).subscribe(response => {
            this.loadTodos();
        }, error => {
            console.log(error.message);
        });

    }
}