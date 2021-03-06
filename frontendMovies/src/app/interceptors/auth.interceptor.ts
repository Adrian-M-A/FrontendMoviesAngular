import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}
  // An interceptor for being available to access to certain domains in the backend
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('authToken');
    const cRequest = request.clone({
      setHeaders: {
        authorization: token
      }
    });
    return token ? next.handle(cRequest) : next.handle(request);
  }
}
