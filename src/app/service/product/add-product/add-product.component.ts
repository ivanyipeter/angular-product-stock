import {Component, OnInit} from '@angular/core';
import {ProductService} from '../product-service';
import {Product} from '../../../model/product';
import {Router} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {StockService} from '../../stock/stock-service';
import {Stock} from '../../../model/stock';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  private product: Product;
  private productForm: FormGroup;
  private message: string;
  private stocks: Stock[];

  constructor(private productService: ProductService,
              private stockService: StockService,
              private router: Router,
              private formBuilder: FormBuilder) {
    this.product = new Product();
    this.createForm();
  }

  createForm() {
    this.message = null;
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      count: ['', [Validators.required, Validators.pattern('^\\+?[1-9]\\d*$')]],
      stockId: [''],
      // stockName: ['']
    });
  }

  ngOnInit() {
   this.getAllStocks();
  }

  onSubmit() {
    this.productService.createProduct(this.productForm.value).subscribe(result => this.gotoProductList(),
      error => this.message = error.error.error);
  }

  getAllStocks() {
    this.stockService.getAllStock().subscribe(data => {
      this.stocks = data;
    });
  }

  gotoProductList() {
    this.router.navigate(['/productlist']);
  }


}
