import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherRoutingModule } from './teacher-routing.module';
import { CreateTeacherComponent } from './create-teacher/create-teacher.component';
import { ListTeacherComponent } from './list-teacher/list-teacher.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatCardModule, MatSelectModule, MatButtonModule, 
  MatDatepickerModule, MatNativeDateModule, MatIconModule, MatTableModule, MatPaginatorModule } from '@angular/material';

@NgModule({
  declarations: [CreateTeacherComponent, ListTeacherComponent],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,        
    MatNativeDateModule,  
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
  ]
})
export class TeacherModule { }
