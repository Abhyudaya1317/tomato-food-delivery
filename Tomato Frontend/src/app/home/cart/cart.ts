import { Component, inject } from '@angular/core';
import { DataService } from '../../data-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  route=inject(Router);
  constructor(public DataService: DataService) {}

   deleteItem(index: number) {
      this.DataService.cartList.splice(index, 1);
  }
  
  checkout() {
    if (this.DataService.cartList.length === 0) {
      alert("Your cart is empty. Please add items to the cart before checking out.");
    } else {
      this.route.navigateByUrl('/checkout');
      this.DataService.cartList = [];

    }
  
}
}
