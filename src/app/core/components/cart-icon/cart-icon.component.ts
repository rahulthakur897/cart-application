import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../shared/services/product/product.service';

@Component({
  selector: 'app-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.css']
})
export class CartIconComponent implements OnInit {

  cartTotal: number =0;

  constructor(private prodService: ProductService) { }

  ngOnInit() {
    this.prodService.getCartCount().subscribe(cart => {
      this.cartTotal=0;
      cart.forEach((item) => {
        this.cartTotal += item.quantity;
      });
    });
  }

}
