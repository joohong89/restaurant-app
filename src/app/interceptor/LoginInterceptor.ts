import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {LoginService} from '../service/login.service';
import {Router} from '@angular/router';
import { throwError } from 'rxjs';

@Injectable()
export class LoginInterceptor implements HttpInterceptor{

  constructor(private loginService: LoginService, private router: Router){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('intercepted request ... ');

    const jwt = this.loginService.getAccessToken();
    console.log(jwt);
    if (!jwt) {
        this.router.navigate(['']);
        return next.handle(req);
    }


    const cloned = req.clone({
      headers: req.headers.set('Authorization',
        'Bearer ' + jwt)
    });

    return next.handle(cloned);

  }
}
