import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment'
import { catchError, retry } from 'rxjs/operators'
import { Observable } from 'rxjs/internal/Observable'
import { ITeacher } from '../shared/models/teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  }

  private BASE_URL = environment.BASE_URL

  constructor(private httpClient: HttpClient) { }

  createTeacher(teacher: ITeacher): Observable <ITeacher> {
    const url = `${this.BASE_URL}/teacher/create`
    return this.httpClient.post<ITeacher>(url, teacher).pipe(
      retry(1)
    )
  }

  getAllTeachers(page: number): Observable<any> {
    const url = `${this.BASE_URL}/teacher/find/all/${page}`
    return this.httpClient.get<any>(url).pipe(
      retry(1)
    )
  }

  getStudentByRegNumber(regNumber: String): Observable<ITeacher> {
    const url = `${this.BASE_URL}/teacher/find/${regNumber}`
    return this.httpClient.get<ITeacher>(url).pipe(
      retry(1)
    )
  }

  deleteTeacher(regNumber: String): Observable<ITeacher> {
    const url = `${this.BASE_URL}/teacher/delete/${regNumber}`
    return this.httpClient.delete<ITeacher>(url).pipe(
      retry(1)
    )
  }
}
