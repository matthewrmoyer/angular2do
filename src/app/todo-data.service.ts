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
    var itemToAdd = new TodoItem(todoItem);
    this.todoItems.push(itemToAdd);
    delete todoItem.content;
  }
  toggleComplete(todoItem: TodoItem){
    todoItem.complete? todoItem.complete=false: todoItem.complete=true;
  }
}





