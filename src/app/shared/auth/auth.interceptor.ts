import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpClient, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    
    httpClient: HttpClient;

    //constructor(private authService: AuthService) {}
    constructor() {}

    intercept(req: HttpRequest<any>,
        next : HttpHandler): Observable<HttpEvent<any>>{

            const token = 'dXNlcjpwYXNzd29yZA==';

            req = req.clone({
                headers: req.headers.set('Authorization', `Basic ` + token )
            })
            return next.handle(req)

        }
}