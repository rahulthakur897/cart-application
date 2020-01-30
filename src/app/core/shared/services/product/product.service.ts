import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  modalType:string;
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
 
  addItemToCart(item){
    this.cart.push(item);
    this.totalItems.next(this.cart);
  }
}
