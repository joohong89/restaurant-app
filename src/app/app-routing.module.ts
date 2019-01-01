import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './client/search/search.component';
import {CartComponent} from "./client/cart/cart.component";
import {OrdersComponent} from './client/orders/orders.component';

const routes: Routes = [
  {path: 'client/view', component: SearchComponent},
  {path: 'client/cart', component: CartComponent},
  {path: 'client/orders', component: OrdersComponent}
];

@NgModule({
  imports: [RouterModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
