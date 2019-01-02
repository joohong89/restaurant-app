import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  username: string;

  password: string;

  constructor(private logInService: LoginService) { }

  ngOnInit() {
  }

  login(): void {
    this.logInService.login({
      username: this.username,
      password: this.password
    }).subscribe(res => {
      console.log(res);
    });
  }
}
