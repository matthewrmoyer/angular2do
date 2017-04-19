import { Component, OnInit } from '@angular/core';
import { TodoItem } from "app/todo-item";
import { TodoDataService } from "app/todo-data.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor(private todoDataService: TodoDataService) { }

  toggleComplete(todoItem){
    this.todoDataService.toggleComplete(todoItem)
  }

  todoItems = this.todoDataService.todoItems;
  ngOnInit() {
    console.log(this.todoItems)
  }
}
