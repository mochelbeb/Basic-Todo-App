import { Component, OnInit } from '@angular/core';
import { TodoService } from './TodoService';

export interface Task {
  id:number;
  description: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit{
  tasks: Task[] = [];
  public newTaskDescription: string = "";
  constructor(private todoService: TodoService){ }
  
  ngOnInit(): void {
      this.getTasks();
  }
  getTasks(){
    this.tasks = this.todoService.getTasks();
  }

  addTask(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.todoService.addTask({id : this.tasks.length, description: name, completed : false } as Task);
    this.getTasks();
    this.newTaskDescription = ""
  }

  toggleComplete(task: Task): void {
    task.completed = !task.completed;
    this.todoService.updateTask(task);
    this.getTasks();
  }

  deleteTask(task: Task): void {
    this.todoService.deleteTask(task);
    this.getTasks();
  }
 
 
 
 
  // newTaskDescription:string = ""
  // tasks: Task[] = [
  //   {id:'1', description: 'Task 1', completed: false },
  //   {id:'2', description: 'Task 2', completed: false },
  //   {id:'3', description: 'Task 3', completed: true },
  // ];
  // completedTasks: Task[] = this.getCompletedTasks();

  // onTaskCompleted(task: Task) {
  //   task.completed = true;
  // }
  // addTask():void {
  //   this.tasks.push({
  //     id : this.tasks.length.toString(),
  //     description: this.newTaskDescription,
  //     completed: false,
  //   })
  // }
  // getCompletedTasks(){
  //   return this.tasks.filter((task)=> task.completed)
  // }
}
