import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {LoginService} from "../service/login.service";
import {Router} from "@angular/router";
import { throwError } from 'rxjs';

@Injectable()
export class LoginInterceptor implements HttpInterceptor{

  constructor(private loginService: LoginService, private router: Router){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    console.log("intercepted request ... ");

    const jwt = this.loginService.getAccessToken();


    // Clone the request to add the new header.
    const authReq = req.clone({ headers: req.headers.set("headerName", "headerValue")});


    if(!jwt){
        this.router.navigate(['']);
        return throwError("User is not logged in. Redirecting to Login Page.");
      }

    //send the newly created request
    return next.handle(req);
  }
}