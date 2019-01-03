import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {environment} from '../../environments/environment';
import {catchError} from 'rxjs/operators';
import {Dish} from '../class/Dish';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http: HttpClient, private router: Router) { }

  login(logInInfo): Observable<any> {
    return this.http.post<any>(environment.server + 'login/authenticate', logInInfo).pipe(
      catchError(this.handleError<Dish[]>('login()', []))
    );
  }

  getAccessToken(): string {
    return localStorage.getItem('jwt');
  }

  setAccessToken(token: string): void{
    localStorage.setItem('jwt', token);
  }


  logout(): void {
    localStorage.removeItem('jwt');
    this.router.navigate(['']);
  }



  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
