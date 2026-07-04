import { Routes } from '@angular/router';
import { Auth } from './auth/auth';
import { Home } from './home/home';
import { authGuard } from './Guard/auth-guard';
import { Cart } from './home/cart/cart';
import { Menu } from './home/menu/menu';
import { Checkout } from './home/cart/checkout/checkout';


export const routes: Routes = [
    {
        path: 'auth',
        component: Auth
    },

    {
        path: 'home',
        component: Home,
        canActivate: [authGuard]
    },

    {
        path: 'cart',
        component: Cart
    },

    {
        path: 'menu',
        component: Menu
    },

    {
        path: 'checkout',
        component: Checkout
    },

    {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
    }





];
