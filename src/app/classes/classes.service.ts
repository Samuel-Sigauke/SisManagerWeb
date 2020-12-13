import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment'
import { catchError, retry } from 'rxjs/operators'
import { Observable } from 'rxjs/internal/Observable'

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  constructor() { }
}
