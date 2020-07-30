import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.studentForm = this.fb.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      // dob: this.DOB,
      studentNumber: ['', [Validators.required]],
      class: ['', [Validators.required]],
    });
  }

  onSave(student) {
    console.log(student);
  }

  onClear(student){
    this.studentForm.reset();
  }

}
