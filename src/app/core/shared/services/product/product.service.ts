import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  modalType:string;
  ItemsIdCollection=[];
  cart = [];
  totalItems = new BehaviorSubject<any[]>([]);
  getModal = new Subject<string>();
  totalItemsCount = new BehaviorSubject<number>(0);


  constructor(private http: HttpClient) { }

  getProductDetails(){
    return this.http.get("https://api.myjson.com/bins/qzuzi");
  }

  setModal(modalType:string){
    this.getModal.next(modalType);
  }
  
  getCartCount(){
    return this.totalItems.asObservable();
  }
 
  addItemToCart(item:any, type:string){
    if(this.ItemsIdCollection.indexOf(item.id) === -1){
      item.quantity = 1;
      this.ItemsIdCollection.push(item.id);
      this.cart.push(item);
    }else{
      if(type === 'inc'){
        this.cart[this.ItemsIdCollection.indexOf(item.id)].quantity += 1;
      } else {
        if(this.cart[this.ItemsIdCollection.indexOf(item.id)].quantity > 1){
          this.cart[this.ItemsIdCollection.indexOf(item.id)].quantity -= 1;
        }else{
          this.cart[this.ItemsIdCollection.indexOf(item.id)].quantity = 1;
        }
      }   
    }
    this.getItemCount(this.cart);
    this.totalItems.next(this.cart);
  }

  getItemCount(cart){
    let totalCount:number = 0;
    cart.forEach((item) => {
        totalCount += item.quantity;
    });
    this.totalItemsCount.next(totalCount);
  }

  removeItemFromCart(index:number){
    this.getItemCount(this.cart);
    this.totalItems.next(this.cart);
  }
}
