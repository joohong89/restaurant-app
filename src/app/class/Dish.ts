import {DishSizePrice} from './DishSizePrice';

export class Dish {

  public id: number;

  public name: string;

  public imageUrl: string;

  public price: DishSizePrice;

  public quantity: number;

  public selectedSize: string;

  public selectedPrice: number;

    constructor(id: number,
                name: string,
                imageUrl: string,
                price: DishSizePrice,
                quantity: number = 0,
                selectedSize?: string,
                selectedPrice?: number) {

      this.id = id;
      this.name = name;
      this.imageUrl = imageUrl;
      this.price = price;
      this.quantity = quantity
      this.selectedSize = selectedSize;
      this.selectedPrice = selectedPrice;

    }

}
