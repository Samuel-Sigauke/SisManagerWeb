import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing.module';
import { CreateStudentComponent } from './create-student/create-student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatCardModule, MatSelectModule, MatButtonModule, 
  MatNativeDateModule, MatDatepickerModule, MatIconModule, MatTableModule, MatPaginatorModule, 
  MatGridListModule, MatDialogModule } from '@angular/material';
import { ListStudentComponent } from './list-student/list-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

@NgModule({
  declarations: [CreateStudentComponent, ListStudentComponent, StudentDetailsComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
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
    MatGridListModule,
    MatDialogModule,
  ],
  exports:[]
})
export class StudentModule { }
