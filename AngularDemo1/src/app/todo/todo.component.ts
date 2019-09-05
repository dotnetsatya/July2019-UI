import { Component } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
    selector: 'todo-list',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class TodoComponent {
    title: string = "Todo List";
    todoList: Todo[] = [];
    newTodo: Todo = new Todo();

    constructor() {

    }

    addTodo(): void {
        this.todoList.push(this.newTodo);
        this.newTodo = new Todo();

    }
}