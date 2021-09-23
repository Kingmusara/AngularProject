import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { TodosComponent } from './components/todos/todos.component';

const routes: Routes = [
      {path:"", pathMatch:"full",component:TodosComponent},
      {path:"todos" , component:TodosComponent},
      {path:"todos/category/:userId",component:TodosComponent},
      {path: "todos/add" , component:TodoAddComponent}
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
