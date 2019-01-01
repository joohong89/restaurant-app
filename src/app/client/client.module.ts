import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  declarations: [SearchComponent, CartComponent, OrdersComponent],
  imports: [
    CommonModule, RouterModule, FormsModule
  ]
})
export class ClientModule { }
