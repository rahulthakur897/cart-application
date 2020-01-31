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
  cartTotal: number;
  
  constructor(private prodService: ProductService) { }

  ngOnInit() {
    this.cartItems = this.prodService.cart;
    this.prodService.totalItemsCount.subscribe(count => {
      this.cartTotal = count;
    });
    this.calculateTotal(this.cartItems);
  }

  calculateTotal(cart:any){
    this.payablePrice = 0;
    this.discountPrice = 0;
    this.totalPrice = 0;
    cart.forEach( (item:any) => {
      this.payablePrice += item.price * item.quantity;
      this.discountPrice += ((item.price * item.quantity * item.discount)/100);
    });
    this.totalPrice = this.payablePrice - this.discountPrice;
  }

  addToCart(type:string, item:any){
    console.log('inmethod',item.quantity)
    if(item.quantity >= 1) {
      this.cartItems.forEach( (val) => {
        if(val.id === item.id){
          val.quantity = item.quantity;
        }
      });
      this.prodService.addItemToCart(item, type);
      this.calculateTotal(this.cartItems);
    }
  }

  removeItemFromCart(index: number){
    this.cartItems.splice(index, 1);
    this.prodService.ItemsIdCollection.splice(index, 1);
    this.prodService.removeItemFromCart(index);
    this.calculateTotal(this.cartItems);
  }
}