import { Component, OnInit } from '@angular/core';
import {Dish} from '../../class/Dish';
import index from '@angular/cli/lib/cli';
import {CartService} from '../../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { }

  orders: Dish[] = [];

  totalAmount = 0;

  ngOnInit() {
    this.orders = this.cartService.getCartOrders();
    this.calculateTotal();
  }

    calculateTotal(): void {
      let total = 0;

      this.orders.forEach((item, index) => {
        total += (item.quantity * item.selectedPrice);
      });

      this.totalAmount =  total;
    }

  removeItemFromOrder(index: number): void {
    this.orders.splice(index, 1);
    this.calculateTotal();
    this.cartService.removeCartOrder();
  }

  submitOrders(): void {

    const reqbody = [];

    this.orders.forEach(value => {
      reqbody.push({
        dishId: value._id,
        name: value.name,
        quantity: value.quantity,
        size: value.selectedSize,
        price: value.selectedPrice,
      });
    });

    this.cartService.submitOrders(reqbody);
  }

}
