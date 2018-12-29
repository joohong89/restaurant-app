import { Injectable } from '@angular/core';
import {Dish} from '../class/Dish';
import {Observable, of, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  orders: Dish[] = [];

  orderChange: Subject<number> = new Subject<number>();

  constructor() { }

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

}
