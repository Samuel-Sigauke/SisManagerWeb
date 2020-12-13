import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TeacherService } from '../teacher.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-teacher',
  templateUrl: './create-teacher.component.html',
  styleUrls: ['./create-teacher.component.css']
})
export class CreateTeacherComponent implements OnInit {

  teacherForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private teacherService: TeacherService,
    private router: Router) { }

  ngOnInit() {

    this.teacherForm = this.fb.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      regnumber: ['', [Validators.required]],
      nationalid: ['', [Validators.required]],
      classtag: ['', [Validators.required]],

    })
  }

  onSave(teacher) {
    console.log(teacher);
    this.teacherService.createTeacher(teacher).subscribe(
      res => {
        alert("Teacher created Successfully")
        this.router.navigate(['teacher/list'])
      }
    )
  }

  onClear(teacher){
    this.teacherForm.reset();
  }

}
