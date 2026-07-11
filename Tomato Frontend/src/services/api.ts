import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Api {

  private url = "http://localhost:5003";

   constructor(private http: HttpClient) {}


  //All the get requests
  getAuth() {
      return this.http.get(this.url + "/auth/view");
  }
  getResturant(){
      return this.http.get(this.url + "/resturant/view");
  }
  getFood() {
      return this.http.get(this.url + "/food/view");
  }
  getCart(){
    return this.http.get(this.url + "/cart/getCart");
  }
  getOrder(){
    return this.http.get(this.url + "/order/view");
  }
 









}


