import { Component, OnInit } from '@angular/core';
import {Task, TodoListComponent } from '../todo-list/todo-list.component';
import { TodoService } from '../todo-list/TodoService';

@Component({
  selector: 'app-completed-page',
  templateUrl: './completed-page.component.html',
  styleUrls: ['./completed-page.component.css']
})
export class CompletedPageComponent implements OnInit{
  Completedtasks: Task[] = [];
  isCompleted: boolean = true;

  constructor(private todoService: TodoService){ }
  ngOnInit(): void {
      this.getCompletedTasks();
  }
  getCompletedTasks(){
    this.Completedtasks = this.todoService.getTasks().filter((task)=> task.completed);
  }
  deleteTask(task: Task): void {
    this.todoService.deleteTask(task);
    this.getCompletedTasks();
  }

}
