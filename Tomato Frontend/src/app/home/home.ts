import { Component, inject, OnInit } from '@angular/core';
import { Api } from '../../services/api';
import { DataService } from '../data-service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  route=inject(Router);

  constructor(private api: Api){}
  ngOnInit(){

  this.api.getFood().subscribe((data)=>{
  console.log(data);
  
  });

}
  // constructor(private DataService: DataService) {}
  
  cartItems(item:string, price:number){
    alert(item + " added to cart");
      // this.DataService.addToCart(item, price);
    }
   
  homeView(){
    this.route.navigateByUrl('/home');
  }

  cartView(){
    this.route.navigateByUrl('/cart');
  }

  viewMenu(){
    this.route.navigateByUrl('/menu');
  } 
  scrollTo(element: HTMLElement) {
    element.scrollIntoView({
        behavior: 'smooth'
    });
}
    
 
  http=inject(HttpClient)
  }
  
  
  


