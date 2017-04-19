import { Injectable } from '@angular/core';
import { TodoItem } from './todo-item';

@Injectable()
export class TodoDataService {

  constructor() { }
  todoItems: TodoItem[] = [
    {content: "Wash Car", complete: false},
    {content: "Do Laundry", complete: false},    
    ];

  addTodoItem(todoItem: TodoItem){
    this.todoItems.push(todoItem)
  }
  toggleComplete(todoItem: TodoItem){
    todoItem.complete? todoItem.complete=false: todoItem.complete=true;
  }
}





