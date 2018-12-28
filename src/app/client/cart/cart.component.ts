import { Component, OnInit } from '@angular/core';
import {Dish} from "../../class/Dish";
import index from "@angular/cli/lib/cli";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {

  constructor() { }

  orders: Dish[] = [];

  totalAmount: number = 0;

  ngOnInit() {
    this.orders = [
      new Dish(1,'Fried Rice', 'assets/img/fried-rice.jpg', {large: 10, medium: 7, small: 5}, 3, 'large', 10),
      new Dish(2,'Fried Rice', 'assets/img/fried-rice.jpg', {large: 10, medium: 7, small: 5}, 2, 'small', 5),
      new Dish(3,'Fried Rice', 'assets/img/fried-rice.jpg', {large: 10, medium: 7, small: 5}, 1, 'medium', 7),
      new Dish(4,'Fried Rice', 'assets/img/fried-rice.jpg', {large: 10, medium: 7, small: 5}, 5, 'medium', 7),
      new Dish(5,'Fried Rice', 'assets/img/fried-rice.jpg', {large: 10, medium: 7, small: 5}, 1, 'small', 5),
    ];

    this.calculateTotal();
  }

    calculateTotal(): void {
      let total = 0;

      this.orders.forEach((item,index) => {
        total += (item.quantity * item.selectedPrice);
      });

      this.totalAmount =  total;
    }

  removeItemFromOrder(index: number): void{
    this.orders.splice(index, 1);
    this.calculateTotal();
  }

}
