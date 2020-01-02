import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {ProductListComponent} from './service/product/product-list/product-list.component';
import {StockListComponent} from './service/stock/stock-list/stock-list.component';
import {AddProductComponent} from './service/product/add-product/add-product.component';
import {AddStockComponent} from './service/stock/add-stock/add-stock.component';
import {UpdateProductComponent} from './service/product/update-product/update-product.component';
import {UpdateStockComponent} from './service/stock/update-stock/update-stock.component';
import {StockproductsComponent} from './service/stock/stockproducts/stockproducts.component';


const routes: Routes = [
  {path: 'productlist', component: ProductListComponent},
  {path: 'stocklist', component: StockListComponent},
  {path: 'createproduct', component: AddProductComponent},
  {path: 'createstock', component: AddStockComponent},
  {path: 'updateproduct/:id', component: UpdateProductComponent},
  {path: 'updatestock/:id', component: UpdateStockComponent},
  {path: 'stockproducts/:id', component: StockproductsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
