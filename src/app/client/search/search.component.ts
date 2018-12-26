import { Component, OnInit } from '@angular/core';
import { Dish } from '../../class/Dish';
import {FormsModule} from '@angular/forms';

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
          new Dish(1,'Fried Rice', 'assets/img/fried-rice.jpg', {large: 10, medium: 7, small: 5}),
          new Dish(2,'Fried Rice', 'assets/img/fried-rice.jpg', {large: 10, medium: 7, small: 5}),
          new Dish(3,'Fried Rice', 'assets/img/fried-rice.jpg', {large: 10, medium: 7, small: 5}),
          new Dish(4,'Fried Rice', 'assets/img/fried-rice.jpg', {large: 10, medium: 7, small: 5}),
          new Dish(5,'Fried Rice', 'assets/img/fried-rice.jpg', {large: 10, medium: 7, small: 5}),
          new Dish(6,'Fried Rice', 'assets/img/fried-rice.jpg', {large: 10, medium: 7, small: 5}),
          new Dish(7,'Fried Rice', 'assets/img/fried-rice.jpg', {large: 10, medium: 7, small: 5}),
          new Dish(8,'Fried Rice', 'assets/img/fried-rice.jpg', {large: 10, medium: 7, small: 5}),
          new Dish(9,'Fried Rice', 'assets/img/fried-rice.jpg', {large: 10, medium: 7, small: 5}),
          new Dish(10,'Fried Rice', 'assets/img/fried-rice.jpg', {large: 10, medium: 7, small: 5}),
          new Dish(11,'Fried Rice', 'assets/img/fried-rice.jpg', {large: 10, medium: 7, small: 5}),
          new Dish(12,'Fried Rice', 'assets/img/fried-rice.jpg', {large: 10, medium: 7, small: 5})
      ];
  }


}
