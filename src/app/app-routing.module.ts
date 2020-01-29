import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShoppingPageContainerComponent} from './shopping-page-container/shopping-page-container.component'  ;
import {CartPageComponent} from './cart-page/cart-page.component';
const routes: Routes = [
  { path: '',component: ShoppingPageContainerComponent  },
  { path: 'cart',component: CartPageComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
