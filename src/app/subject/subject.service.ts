import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment'
import { catchError, retry } from 'rxjs/operators'
import { Observable } from 'rxjs/internal/Observable'
import { ISubject } from '../shared/models/subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  }

  private BASE_URL = environment.BASE_URL

  constructor(private httpClient: HttpClient) { }

  createSubject(subject: ISubject): Observable <ISubject> {
    const url = `${this.BASE_URL}/subject/create`
    return this.httpClient.post<ISubject>(url, subject).pipe(
      retry(1)
    )
  }

  getAllStudents(page: number): Observable<any> {
    const url = `${this.BASE_URL}/subject/find/all/${page}`
    return this.httpClient.get<any>(url).pipe(
      retry(1)
    )
  }

  getSubjectByName(subjectName: String): Observable<ISubject> {
    const url = `${this.BASE_URL}/subject/find/name/${subjectName}`
    return this.httpClient.get<ISubject>(url).pipe(
      retry(1)
    )
  }

  getSubjectByCode(subjectCode: String): Observable<ISubject> {
    const url = `${this.BASE_URL}/student/delete/${subjectCode}`
    return this.httpClient.get<ISubject>(url).pipe(
      retry(1)
    )
  }
}
