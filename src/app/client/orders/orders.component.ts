import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../service/order.service';
import {Order} from '../../class/Order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.sass']
})
export class OrdersComponent implements OnInit {

  orders: Order[];
  grandTotal = 0;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getOrder().subscribe(item => {
      this.orders = item;

      this.orders.forEach(val => {
        this.grandTotal += val.total;
      });
    });
  }

}
