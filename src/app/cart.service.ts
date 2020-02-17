import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  //array of products 
  items = [];

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

  constructor() {}

}