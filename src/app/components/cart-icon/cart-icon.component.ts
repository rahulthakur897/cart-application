import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../shared/services/product/product.service';

@Component({
  selector: 'app-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.css']
})
export class CartIconComponent implements OnInit {

  cartTotal: number;

  constructor(private prodService: ProductService) { }

  ngOnInit() {
  	this.prodService.getCartCount().subscribe(cart => {
      this.cartTotal = cart.length;
    });
  }

}
