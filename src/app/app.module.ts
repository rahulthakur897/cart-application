import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Ng5SliderModule } from 'ng5-slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

import { ModalComponent } from './shared/modal/modal.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { CartIconComponent } from './components/cart-icon/cart-icon.component';
import { SortComponent } from './components/sort/sort.component';
import { FilterComponent } from './components/filter/filter.component';

import { SortByPipe } from './shared/pipes/sortBy/sort-by.pipe';
import { ShoppingPageContainerComponent } from './shopping-page-container/shopping-page-container.component';
import { CartPageComponent } from './cart-page/cart-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    ShoppingListComponent,
    ModalComponent,
    SortByPipe,
    SearchComponent,
    CartIconComponent,
    SortComponent,
    FilterComponent,
    FooterComponent,
    ShoppingPageContainerComponent,
    CartPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng5SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[FilterComponent]
})
export class AppModule { }
