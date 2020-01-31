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
 
  addItemToCart(item:any){
    if(this.ItemsIdCollection.indexOf(item.id) === -1){
      item.quantity = 1;
      this.ItemsIdCollection.push(item.id);
      this.cart.push(item);
    }else{
      this.cart[this.ItemsIdCollection.indexOf(item.id)].quantity++;
    }
    this.totalItems.next(this.cart);
  }
  removeItemFromCart(index:number){
    this.totalItems.next(this.cart);
  }
}
