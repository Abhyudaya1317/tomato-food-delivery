import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {

   cartList: any[] = [];

    addToCart(item: string, price: number) {
        console.log(item, price);
        this.cartList.push({
            product: item,
            mrp: price
        });
            console.log(this.cartList);

    }
}

