import { Component, OnInit } from '@angular/core';
import {ProductService} from '../shared/services/product/product.service';

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit {
  
  productDetails: any = [];
  filters: any = {
    name: null,
    orderBy: false,
    price: {
      min: 10,
      max: 1000
    }
  };
  asc:boolean=true;
  
  constructor(private prodService:ProductService) { }

  ngOnInit() {
    this.prodService.getProductDetails().subscribe(prods => {
      this.productDetails = prods;
      this.toggleSort({name: 'price', orderBy: false,min:10,max:1000});
    });  
  }

  openModal(){
    this.prodService.setModal('Filter');
  }

  toggleSort(obj:any) {
    this.filters.name = obj.name?obj.name:this.filters.name;
    this.filters.orderBy = (obj.orderBy!==undefined)?obj.orderBy:this.filters.orderBy;
    this.filters.price.min = obj.min?obj.min:this.filters.price.min;
    this.filters.price.max = obj.max?obj.max:this.filters.price.max;
  }
}