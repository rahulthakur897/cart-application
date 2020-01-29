import { Component, OnInit } from '@angular/core';
import {ProductService} from '../shared/services/product/product.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cartItem:any[];
  constructor(private prodService:ProductService) { }

  ngOnInit() {
    this.cartItem=this.prodService.cart;

  }

}
