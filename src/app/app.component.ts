import { Component } from '@angular/core';
import {LoginService} from './service/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'enterprise-system';

  constructor(private loginService: LoginService, private router: Router) {}

  onActivate(): void {
    const token = this.loginService.getAccessToken();

    if(!token) {
      this.router.navigate(['']);
    }
  }
}
