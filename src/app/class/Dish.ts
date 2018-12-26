import {DishSizePrice} from './DishSizePrice';

export class Dish {

    id: number;

    name: string;

    imageUrl: string;

    price: DishSizePrice;

    quantity: number;

    constructor(public id: number,
                public name: string,
                public imageUrl: string,
                public price: DishSizePrice,
                public quantity: number = 0) {}
}
