import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-subject',
  templateUrl: './create-subject.component.html',
  styleUrls: ['./create-subject.component.css']
})
export class CreateSubjectComponent implements OnInit {

  subjectForm: FormGroup

  constructor( private fb: FormBuilder ) { }

  ngOnInit() {
    this.subjectForm = this.fb.group({
      name: ['', [Validators.required]],
      code: ['', [Validators.required]],
      description: ['', [Validators.required]],
      file: ['', [Validators.required]]
    })
  }

  onSave(subject) {
    console.log(subject);
  }

  onClear(student){
    this.subjectForm.reset();
  }

}
