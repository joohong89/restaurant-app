import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [SearchComponent, CartComponent],
  imports: [
    CommonModule, RouterModule, FormsModule
  ]
})
export class ClientModule { }
