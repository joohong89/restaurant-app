import { Component, OnInit } from '@angular/core';
import { Dish } from '../../class/Dish';
import {CartService} from '../../service/cart.service';
import {HttpClientModule} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {DishService} from '../../service/dish.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  dishes: Dish[];

  constructor(private cartService: CartService, private dishService: DishService) { }

  ngOnInit() {

    this.dishService.getAllDish().subscribe(dishes => this.dishes = dishes);

  }

  updateCart(dish: Dish, large: boolean, medium: boolean, small: boolean): void{
   // const selectedPrice = Number(price);

    if (dish.quantity < 1) {
      console.log('Error');
      return;
    }

    if (large && !medium && !small) {
      dish.selectedSize = 'Large';
      dish.selectedPrice = dish.large;
    } else if (!large && medium && !small) {
      dish.selectedSize = 'Medium';
      dish.selectedPrice = dish.medium;
    } else if (!large && !medium && small) {
      dish.selectedSize = 'Small';
      dish.selectedPrice = dish.small;
    } else {
      console.log("Error");
      return;
    }


    this.cartService.updateCartOrders({...dish});

    dish.quantity = 0;
    dish.selectedPrice = dish.large;
  }

  getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }
}
