import { Component, OnInit,OnDestroy,Input,EventEmitter,Output } from '@angular/core';
import {ProductService} from '../services/product/product.service';
import { Subscription }   from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
 modalName:string;
 subscription: Subscription;
 filters= {
  name: null,
  orderBy: false,
  price: {
    min: 0,
    max: 0
  }
 };
  @Output() sortItem = new EventEmitter<{name:string, orderBy:boolean, minValue:number, maxValue:number}>();
  
  constructor(private prodService:ProductService) {
    this.subscription = prodService.getModal.subscribe((value) => { 
      this.modalName = value; 
    });
   }

  ngOnInit() {
  }

  sortFilter(name:string, orderBy:boolean, minValue:number, maxValue:number) {
    this.sortItem.emit({name, orderBy, minValue, maxValue});
  }

  getMinMaxPrice(minValue:number, maxValue:number){
    console.log(minValue, maxValue)
  }
  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }  
}