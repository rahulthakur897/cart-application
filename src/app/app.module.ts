import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Ng5SliderModule } from 'ng5-slider';
import { StoreModule } from '@ngrx/store';

import { reducers, metaReducers } from './reducers';
import { AppRoutingModule } from './core/app-routing.module';
import { AppComponent } from './core/app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { SearchComponent } from './core/components/search/search.component';
import { CartIconComponent } from './core/components/cart-icon/cart-icon.component';
import { SortComponent } from './core/components/sort/sort.component';
import { ProductComponent } from './core/components/product/product.component';
import { FilterComponent } from './core/components/filter/filter.component';
import { ModalComponent } from './core/components/modal/modal.component';

import { SortByPipe } from './core/shared/pipes/sortBy/sort-by.pipe';
import { ProductViewComponent } from './core/pages/product-view/product-view.component';
import { CartViewComponent } from './core/pages/cart-view/cart-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    ModalComponent,
    SortByPipe,
    SearchComponent,
    CartIconComponent,
    SortComponent,
    FilterComponent,
    FooterComponent,
    ProductViewComponent,
    CartViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng5SliderModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[FilterComponent]
})
export class AppModule { }
