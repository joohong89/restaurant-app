import { Component, OnInit } from '@angular/core';
import {CartService} from '../../service/cart.service';
import {Subscription} from 'rxjs';
import {LoginService} from '../../service/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  private _subscription: Subscription;

  constructor(private cartService: CartService, private loginService: LoginService) { }

  resource = [];

  total = 0;

  ngOnInit() {
      this._subscription = this.cartService.orderChange.subscribe(total => this.total = total);
      //this.getMenuItem();
  }

  ngOnDestroy() {
      this._subscription.unsubscribe();
  }

  logout(): void {
    this.loginService.logout();
  }


  // getMenuItem(): void {
  //   console.log('sdfasdfa');
  //   this.loginService.menuItem.subscribe(res => {
  //     console.log('Resource : ' + res);
  //     this.resource = res;
  //   });
  // }
}
