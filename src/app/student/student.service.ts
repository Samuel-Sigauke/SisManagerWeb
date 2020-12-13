import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment'
import { catchError, retry } from 'rxjs/operators'
import { Observable } from 'rxjs/internal/Observable'
import { IStudent } from '../shared/models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  }

  private BASE_URL = environment.BASE_URL

  constructor(private httpClient: HttpClient) { }

  createStudent(student: IStudent): Observable <IStudent> {
    const url = `${this.BASE_URL}/student/create`
    return this.httpClient.post<IStudent>(url, student).pipe(
      retry(1)
    )
  }

  getAllStudents(page: number): Observable<any> {
    const url = `${this.BASE_URL}/student/students/all/${page}`
    return this.httpClient.get<any>(url).pipe(
      retry(1)
    )
  }

  getStudentByStudentNumber(studentNumber: String): Observable<IStudent> {
    const url = `${this.BASE_URL}/student/students/${studentNumber}`
    return this.httpClient.get<IStudent>(url).pipe(
      retry(1)
    )
  }

  deleteStudent(studentNumber: String): Observable<IStudent> {
    const url = `${this.BASE_URL}/student/delete/${studentNumber}`
    return this.httpClient.delete<IStudent>(url).pipe(
      retry(1)
    )
  }
}
