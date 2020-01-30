import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductViewComponent} from './pages/product-view/product-view.component'  ;
import {CartViewComponent} from './pages/cart-view/cart-view.component';

const routes: Routes = [
  { path: '', component: ProductViewComponent },
  { path: 'cart', component: CartViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }