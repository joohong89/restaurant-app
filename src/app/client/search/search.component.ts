import { Component, OnInit } from '@angular/core';
import { Dish } from '../../class/dish';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  dishes: Dish[];

  constructor() { }

  ngOnInit() {
      // temp hardcoded data for developement purpose
      this.dishes = [
          {name: 'Fried Rice', imageUrl: 'assets/img/fried-rice.jpg', price: 4},
          {name: 'Fried Rice', imageUrl: 'assets/img/fried-rice.jpg', price: 4},
          {name: 'Fried Rice', imageUrl: 'assets/img/fried-rice.jpg', price: 4},
          {name: 'Fried Rice', imageUrl: 'assets/img/fried-rice.jpg', price: 4},
          {name: 'Fried Rice', imageUrl: 'assets/img/fried-rice.jpg', price: 4},
          {name: 'Fried Rice', imageUrl: 'assets/img/fried-rice.jpg', price: 4},
          {name: 'Fried Rice', imageUrl: 'assets/img/fried-rice.jpg', price: 4},
          {name: 'Fried Rice', imageUrl: 'assets/img/fried-rice.jpg', price: 4},
          {name: 'Fried Rice', imageUrl: 'assets/img/fried-rice.jpg', price: 4},
          {name: 'Fried Rice', imageUrl: 'assets/img/fried-rice.jpg', price: 4},
          {name: 'Fried Rice', imageUrl: 'assets/img/fried-rice.jpg', price: 4},
          {name: 'Fried Rice', imageUrl: 'assets/img/fried-rice.jpg', price: 4},
          {name: 'Fried Rice', imageUrl: 'assets/img/fried-rice.jpg', price: 4},
          {name: 'Fried Rice', imageUrl: 'assets/img/fried-rice.jpg', price: 4},
          {name: 'Fried Rice', imageUrl: 'assets/img/fried-rice.jpg', price: 4},
          {name: 'Fried Rice', imageUrl: 'assets/img/fried-rice.jpg', price: 4},
          {name: 'Fried Rice', imageUrl: 'assets/img/fried-rice.jpg', price: 4},
          {name: 'Fried Rice', imageUrl: 'assets/img/fried-rice.jpg', price: 4},
          {name: 'Fried Rice', imageUrl: 'assets/img/fried-rice.jpg', price: 4},
          {name: 'Fried Rice', imageUrl: 'assets/img/fried-rice.jpg', price: 4},
          {name: 'Fried Rice', imageUrl: 'assets/img/fried-rice.jpg', price: 4},
          {name: 'Fried Rice', imageUrl: 'assets/img/fried-rice.jpg', price: 4},
          {name: 'Fried Rice', imageUrl: 'assets/img/fried-rice.jpg', price: 4},
          {name: 'Fried Rice', imageUrl: 'assets/img/fried-rice.jpg', price: 4},
      ];
  }

}
