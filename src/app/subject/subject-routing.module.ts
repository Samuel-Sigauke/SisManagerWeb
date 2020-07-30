import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateSubjectComponent } from './create-subject/create-subject.component';
import { ListSubjectComponent } from './list-subject/list-subject.component';

const routes: Routes = [
  {path:'create', component: CreateSubjectComponent},
  {path: 'list', component: ListSubjectComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectRoutingModule { }
