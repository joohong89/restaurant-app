import { Injectable } from '@angular/core';
import {Dish} from '../class/Dish';
import {Observable, of, Subject} from 'rxjs';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  orders: Dish[] = [];

  orderChange: Subject<number> = new Subject<number>();

  constructor(private http: HttpClient) { }

  updateCartOrders(dish: Dish): void {
    this.orders.push(dish);
    this.orderChange.next(this.orders.length);
  }

  removeCartOrder(): void {
    this.orderChange.next(this.orders.length);
  }

  getCartOrders(): Dish[] {
    return this.orders;
  }

  submitOrders(req): void {
    this.http.post(`${environment.server}order/orderSubmit`, req).subscribe( res => {
      console.log(res);
    });
  }

}
