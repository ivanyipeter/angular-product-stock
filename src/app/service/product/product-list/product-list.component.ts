import {Component, OnInit, Input} from '@angular/core';
import {Product} from '../../../model/product';
import {ProductService} from '../product-service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  private products: Product[];
  private product: Product;

  constructor(private productService: ProductService,
              private router: Router) {
  }

  ngOnInit() {
    this.getAllProducts();
     }

  deleteProduct(id: number) {
    this.productService.deleteProductById(id).subscribe(data => this.getAllProducts());
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe(data => {this.products = data; });
  }
}
