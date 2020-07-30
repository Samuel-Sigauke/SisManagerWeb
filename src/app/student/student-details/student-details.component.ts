import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  marksForm: FormGroup
  testNumber: string;
  mark: number;
  dialogRef: any;

  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.marksForm = this.fb.group({
      subject: ['', [Validators.required]],
      mark: ['', [Validators.required]],
    });
  }

  openDialog(newMark:any): void {
    this.dialogRef = this.dialog.open(newMark, {
      width: '20%',
      data: {testNumber: this.testNumber, mark: this.mark}
    });

    this.dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.mark = result;
    });
  }

  onSave(marks) {
    console.log(marks);
    this.onClose(marks);
  }

  onClose(marks) {
    this.marksForm.reset()
    this.dialogRef.close();
  }

}
