import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../shared/services/product/product.service';	

@Component({
  selector: 'product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  productDetails: any = [];
  filters: any = {
    name: null,
    orderBy: false,
    minPrice: 10,
    maxPrice: 1000
  };
  
  constructor(private prodService:ProductService) { }

  ngOnInit() {
    this.prodService.getProductDetails().subscribe(prods => {
      this.productDetails = prods;
      this.toggleSort({name: 'price', orderBy: false, minPrice: 10, maxPrice: 1000});
    });  
  }

  openModal(){
    this.prodService.setModal('Filter');
  }

  toggleSort(filter: any) {
    this.filters.name = filter.name;
    this.filters.orderBy = filter.orderBy;
    this.filters.minPrice = filter.minPrice ? filter.minPrice : this.filters.minPrice;
    this.filters.maxPrice = filter.maxPrice ? filter.maxPrice : this.filters.maxPrice;
  }
}