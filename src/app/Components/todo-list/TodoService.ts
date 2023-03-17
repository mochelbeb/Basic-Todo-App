import { Injectable } from '@angular/core';
import { Task } from './todo-list.component';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private tasks: Task[] = [];

  constructor() {
    this.loadTasks();
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task): void {
    this.tasks.push(task);
    this.saveTasks();
  }

  updateTask(task: Task): void {
    const index = this.tasks.findIndex(t => t.id === task.id);
    if (index !== -1) {
      this.tasks[index] = task;
    }
    this.saveTasks()
  }

  deleteTask(task: Task): void {
    const index = this.tasks.findIndex(t => t.id === task.id);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
    this.saveTasks();
  }
  private saveTasks(): void{
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
  private loadTasks(): void{
    const tasksString = localStorage.getItem('tasks');
    if (tasksString !== null) {
      this.tasks = JSON.parse(tasksString);
    }
  }
}
