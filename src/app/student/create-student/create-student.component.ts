import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  
  studentForm: FormGroup;
  DOB: Date
  // hideRequiredControl = new FormControl(false);
  // floatLabelControl = new FormControl('auto');

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private router: Router
    ) { }

  ngOnInit() {
    this.studentForm = this.fb.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      dateofbirth: ['', [Validators.required]],
      studentnumber: ['', [Validators.required]],
      classtag: ['', [Validators.required]],
    });
  }

  onSave(student) {
    this.studentService.createStudent(student).subscribe(
      res => {
        alert("Student created Successfully")
        this.router.navigate(['student/list'])
      }
    )
  }

  onClear(student){
    this.studentForm.reset();
  }

}
