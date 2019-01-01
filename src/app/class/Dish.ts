export class Dish {

  public _id: number;

  public name: string;

  public imageUrl: string;

  public large: number;

  public medium: number

  public small: number

  public quantity: number;

  public selectedSize: string;

  public selectedPrice: number;

  public status: string;

    constructor(id: number,
                name: string,
                imageUrl: string,
                large: number,
                medium: number,
                small: number,
                quantity: number = 0,
                selectedSize?: string,
                selectedPrice?: number) {

      this._id = id;
      this.name = name;
      this.imageUrl = imageUrl;
      this.large = large;
      this.medium = medium;
      this.small = small;
      this.quantity = quantity
      this.selectedSize = selectedSize;
      this.selectedPrice = selectedPrice;

    }

}
