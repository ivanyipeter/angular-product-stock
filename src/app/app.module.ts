import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {ProductListComponent} from './service/product/product-list/product-list.component';
import {StockListComponent} from './service/stock/stock-list/stock-list.component';
import {AddProductComponent} from './service/product/add-product/add-product.component';
import {AddStockComponent} from './service/stock/add-stock/add-stock.component';
import {UpdateProductComponent} from './service/product/update-product/update-product.component';
import {UpdateStockComponent} from './service/stock/update-stock/update-stock.component';
import {StockproductsComponent} from './service/stock/stockproducts/stockproducts.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    StockListComponent,
    AddProductComponent,
    AddStockComponent,
    UpdateProductComponent,
    UpdateStockComponent,
    StockproductsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}
