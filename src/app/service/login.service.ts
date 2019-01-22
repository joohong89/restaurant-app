import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of, Subject} from 'rxjs';
import {environment} from '../../environments/environment';
import {catchError} from 'rxjs/operators';
import {Dish} from '../class/Dish';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http: HttpClient, private router: Router) { }

  menuItem: Subject<[]> = new Subject<[]>();

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

  setUsername(username: string): void{
    localStorage.setItem('username', username);
  }

  getUsername(): string{
    return localStorage.getItem('username');
  }

  setAccessResource(resource: string[]): void{


    const json  = JSON.stringify(resource);

    localStorage.setItem('resource', json);
    console.log('resource changed');
  }

  getAccessResource(): string[] {
    const json = localStorage.getItem('resource');;
    if (!json || json === 'undefined') {
      return [];
    }
    return JSON.parse(json);
  }

  logout(): void {
    localStorage.removeItem('jwt');
    localStorage.removeItem('resource');
    localStorage.removeItem('username');
    this.menuItem.next([]);
    this.router.navigate(['']);
  }

  // getMenuItem(): void {
  //   this.http.post(environment.server + 'login/getMenuItem', '').subscribe(res => {
  //       this.menuItem.next(res);
  //   });
  // }

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
