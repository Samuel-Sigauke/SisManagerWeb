import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectRoutingModule } from './subject-routing.module';
import { CreateSubjectComponent } from './create-subject/create-subject.component';
import { ListSubjectComponent } from './list-subject/list-subject.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatCardModule, MatSelectModule, MatButtonModule, 
  MatDatepickerModule, MatNativeDateModule, MatIconModule, MatTableModule, MatPaginatorModule } from '@angular/material';
  import { NgxMatFileInputModule } from '@angular-material-components/file-input';

@NgModule({
  declarations: [CreateSubjectComponent, ListSubjectComponent],
  imports: [
    CommonModule,
    SubjectRoutingModule,
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
    NgxMatFileInputModule,
  ],
  exports:[]
})
export class SubjectModule { }
