import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../service/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  username: string;

  password: string;

  constructor(private logInService: LoginService, private router: Router ) { }

  ngOnInit() {
  }

  login(): void {
    this.logInService.login({
      username: this.username,
      password: this.password
    }).subscribe(res => {
      this.logInService.setAccessToken(res.token);
      this.logInService.setUsername(res.user.username);
      // console.log('loggin in : ' + res);
      // //this.logInService.setAccessResource(res.user.resources);
      // this.logInService.getMenuItem();
      // window.location.href = '/client/view';
      this.router.navigate(['client/view']);
    }, err => {
      console.log(err);
    });
  }

}
