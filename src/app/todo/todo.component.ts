import { Component } from '@angular/core';
import { TodoItem } from "app/todo-item";
import { TodoDataService } from "app/todo-data.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})

export class TodoComponent {

  public newTodoItem: TodoItem;
  public todoItems: TodoItem[];
  
  constructor(private todoDataService: TodoDataService) { 
    this.newTodoItem = new TodoItem();
    this.todoItems = this.todoDataService.todoItems;
  }

 public toggleComplete(todoItem): void{
    this.todoDataService.toggleComplete(todoItem)
  }
  
  public addTodoItem(todoItem): void{
    this.todoDataService.addTodoItem(todoItem)
  }
}
