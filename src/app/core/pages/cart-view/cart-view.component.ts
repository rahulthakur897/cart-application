import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../shared/services/product/product.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})

export class CartViewComponent implements OnInit {
  
  cartItems: any[];
  payablePrice: number = 0;
  discountPrice: number = 0;
  totalPrice: number = 0;
  copiedCartItems: string;
  itemCount: number = 0;
  
  constructor(private prodService: ProductService) { }

  ngOnInit() {
    this.cartItems = this.prodService.cart;
    this.cartItems.forEach((item) => {
      item.quantity = 1;
    });
    this.itemCount = this.cartItems.length;
    this.copiedCartItems = JSON.stringify(this.cartItems);
    this.calculateTotal(this.cartItems);
  }

  calculateTotal(cart){
    this.payablePrice = 0;
    this.discountPrice = 0;
    this.totalPrice = 0;
    cart.forEach( (item) => {
      this.payablePrice += item.price;
      this.discountPrice += ((item.price * item.discount)/100);
    });
    this.totalPrice = this.payablePrice - this.discountPrice;
  }

  addToCart(type, item){
    if(item.quantity >= 1){
      if(type === 'inc'){
        item.quantity++;
        this.itemCount += 1;
      } else {
        item.quantity--;
        if(item.quantity == 0) item.quantity = 1;
        else this.itemCount -= 1;
      }
      this.updateCart(item);
    }
  }

  updateCart(item){
    let newArr: any[] = JSON.parse(this.copiedCartItems).map( (val) => {
      if(val.name === item.name){
        val.quantity = item.quantity;
        val.price = val.price*item.quantity;
      }
      return val;
    });
    this.calculateTotal(newArr);
  }

  removeItemFromCart(index){
    this.cartItems.splice(index, 1);
    this.calculateTotal(this.cartItems);
  }
}