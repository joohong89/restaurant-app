import { Component, OnInit } from '@angular/core';
import {CartService} from '../../service/cart.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  private _subscription: Subscription;

  constructor(private cartService: CartService) { }

  total: number = 0;

  ngOnInit() {
      this._subscription = this.cartService.orderChange.subscribe(total => this.total = total);
  }

  ngOnDestroy() {
      this._subscription.unsubscribe();
  }
}
