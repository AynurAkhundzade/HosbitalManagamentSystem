import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router, private dialog: MatDialog, private toastr:ToastrService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token');
    if (token) {
      request = request.clone({
        headers: request.headers
          .set('Authorization', `Bearer ${token}`)
          .set('Access-Control-Allow-Origin', '*')
          .set('Access-Control-Allow-Methods', 'Get, Post, Delete, Put'),
      });
      return next.handle(request).pipe(
        catchError((err) => {
          if (err.status === 401 || err.status === 403) {
         // this.toastr.error('melumatlari duzgun daxil edin ve ya register olmamisinzsa register olun')
          }
          throw err;
        })
      );
    }

    return next.handle(request);
  }
}

// export class UnAuthorizedInterceptor implements HttpInterceptor {
//   constructor(private router: Router,
//     private refreshtoken: LoginService,
//     private dialog: MatDialog,
//     // private getLanguageService: GetLanguageContentService,
//     // private alertService: AlertService
//   ) { }

//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     request = request.clone({
//       headers: request.headers
//         .set('Authorization', `Bearer ${localStorage.getItem('Linkuptoken')}`)
//         // .set('Accept-Language', ` ${localStorage.getItem('language')}`)
//         .set('Access-Control-Allow-Origin', '*')
//         .set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT')
//     });
//     return next.handle(request).pipe(
//       catchError(err => {
//         if (err.status === 401 || err.status === 403) {
//           //navigate /delete cookies or whatever
//           Swal.fire("Unauthorized", "Sayta daxil olun!", "error").then(() => this.router.navigateByUrl(`/`));
//           // if you've caught / handled the error, you don't want to rethrow it unless you also want downstream consumers to have to handle it as well.
//           return of(err.message); // or EMPTY may be appropriate here
//         }
//         throw err;
//       })
//     );
//   }
// }
