import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './Components/todo-list/todo-list.component';
import { CompletedPageComponent } from './Components/completed-page/completed-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'Basic-Todo-App/todo', pathMatch: 'full' },
  { path: 'Basic-Todo-App/todo', component: TodoListComponent },
  { path: 'Basic-Todo-App/completed' , component: CompletedPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
