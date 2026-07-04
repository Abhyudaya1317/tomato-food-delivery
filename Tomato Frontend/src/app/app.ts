import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Auth } from "./auth/auth";
import { Home } from './home/home';
import { Cart } from './home/cart/cart';
import { Menu } from './home/menu/menu';
import { Checkout } from './home/cart/checkout/checkout';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Auth, Home, Cart, Menu,Checkout],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Tomato');
}
