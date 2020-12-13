import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import { IStudents } from 'src/app/shared/models/student';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 11, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 12, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 13, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 14, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 15, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 16, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  studentData: any

  constructor(
    private router: Router,
    private studentService: StudentService
  ) { }

  @ViewChild(MatPaginator,) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.findAllStudents()
  }

  findAllStudents(){
    this.studentService.getAllStudents(0).subscribe(
      res => {
        // debugger
        // console.log(res.students);
        this.studentData = res.students;
        console.log(this.studentData);
      },
      error => {
        console.log('Fetch error', error)
      }
    )
  }

  displayedColumns: string[] = ['id', 'name', 'surname', 'dateofbirth', 'studentnumber', 'classtag', 'actions'];
  dataSource = new MatTableDataSource(this.studentData);
  
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  View(){
    this.router.navigate(['student/details'])
  }

}
