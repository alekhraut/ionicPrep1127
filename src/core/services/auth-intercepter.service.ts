import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import { AuthService } from './auth.service';
declare var $: any;

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  csrfToken = '';
  pendingRequests = 0;
  constructor(private injector: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authService = this.injector.get(AuthService);

    // Get the auth header from the service.
    // Clone the request to add the new header.
    this.pendingRequests++;
    req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
     req = req.clone({ headers: req.headers.set('X-Requested-With', 'XMLHttpRequest') });
    if (this.csrfToken !== '') {
      req = req.clone({ headers: req.headers.set('X-CSRF-TOKEN', this.csrfToken) });
    }
    return next.handle(req).do((event: HttpEvent<any>) => {
      this.showLoader();
      if (event instanceof HttpResponse) {
        if (event.status === 200 && event['headers'].get('X-CSRF-TOKEN')) {
          console.log('auth interceptor called')
          this.csrfToken = event['headers'].get('X-CSRF-TOKEN');
        }
        /* This condition is to handle session timeout. */
        if (event.status === 200 && event.body.errorCode) {
          throw new HttpErrorResponse({ error: event.body });
        }
      }
    }).catch(err => {
      if (err && (err.status === 401 || err.status === 403)) {
        /* throw new HttpErrorResponse({ error: err }); */
        authService.logout();
      }
      return Observable.throw(err);
    }).finally(() => {
      const timer = Observable.timer(1);
      timer.subscribe(t => {
        this.hideLoader();
      });
    });
  }

  private showLoader() {
    // $('#load').show();
  }

  private hideLoader() {
    this.pendingRequests--;
    if (this.pendingRequests <= 0) {
      // $('#load').hide();
    }
  }
}
