import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  //array of products 
  items = [];

  constructor(private http: HttpClient) {}

  //add a product 
  addToCart(product) {
    this.items.push(product);
  }

  //get all products
  getItems() {
    return this.items;
  }

  //delete all products
  clearCart() {
    this.items = [];
    return this.items;
  }


  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

}