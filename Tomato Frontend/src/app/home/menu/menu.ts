import { Component, inject } from '@angular/core';
import { DataService } from '../../data-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {

   route=inject(Router);
  constructor(private DataService: DataService) {}
  
  cartItems(item:string, price:number){
    alert(item + " added to cart");
      this.DataService.addToCart(item, price);
    }
}
