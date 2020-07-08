import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private auth: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const authRequest = request.clone({
      setHeaders: {
        'Authorization': 'Bearer ' + this.auth.getToken()
      }
    })

    return next.handle(authRequest).pipe(
      catchError((err, source) => {
        if (!(err instanceof HttpErrorResponse)) {
          return throwError(err)
        }
        // https://www.learnrxjs.io/learn-rxjs/operators/error_handling/retrywhen

        if (err.status === 401) {
          setTimeout(() => this.auth.authorization(), 1000)


          //  refresh token, pipe
          // request.clone({
          //   setHeaders: {
          //     'Authorization': 'Bearer ' + new Token)
          //   }
          // })
        }

        return throwError(new Error(err.error.error.message))
      })
    )
  }
}

// // Chain of responsibility
// res = A.get(req)
//       A.next = B
//       B.next = C
//       C.next = Server
