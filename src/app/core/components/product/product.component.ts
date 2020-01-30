import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import {ProductService} from '../../shared/services/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class ProductComponent implements OnInit {
	
  @Input() item: any={};
  
  constructor(private prodService:ProductService) { }

  ngOnInit() { }

  addToCart(item){
  	this.prodService.addItemToCart(item);
  }
}