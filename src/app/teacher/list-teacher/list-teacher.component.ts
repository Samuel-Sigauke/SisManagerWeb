import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { TeacherService } from '../teacher.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-teacher',
  templateUrl: './list-teacher.component.html',
  styleUrls: ['./list-teacher.component.css']
})
export class ListTeacherComponent implements OnInit {

  teacherData: any

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private teacherService: TeacherService,
    private router: Router
  ) { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.fetchAllTeachers();
  }

  fetchAllTeachers(){
    this.teacherService.getAllTeachers(0).subscribe(
      res => {
        this.teacherData = res.teachers;
      },
      error =>{
        console.log("Fetch error "+error);
      }
    )
  }

  displayedColumns: string[] = ['id', 'name', 'surname', 'regnumber', 'nationalid', 'classtag', 'actions'];
  dataSource = new MatTableDataSource(this.teacherData);

  View(){
    this.router.navigate(['teacher/details'])
  }

}
