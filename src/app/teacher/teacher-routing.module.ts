import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTeacherComponent } from './create-teacher/create-teacher.component';
import { ListTeacherComponent } from './list-teacher/list-teacher.component';

const routes: Routes = [
  {
    path: 'create', component: CreateTeacherComponent,
  },
  {
    path: 'list', component: ListTeacherComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
