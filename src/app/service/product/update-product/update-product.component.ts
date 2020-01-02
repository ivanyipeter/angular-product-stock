import {Component, OnInit} from '@angular/core';
import {ProductService} from '../product-service';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../../../model/product';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  private product: Product;
  private productId: number;
  private productForm: FormGroup;
  private message: string;

  constructor(private productService: ProductService,
              private route: Router,
              private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      count: ['', [Validators.required, Validators.pattern('^\\+?[1-9]\\d*$')]],
      stockId: ['', [Validators.required, Validators.pattern('^\\+?[1-9]\\d*$')]]
    });
  }

  ngOnInit() {
    // @ts-ignore
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    // tslint:disable-next-line:radix
    this.getProductById(this.productId);
  }

  getProductById(id: number) {
    this.productService.getProductById(id).subscribe(data => this.product = data);
  }

  onSubmit() {
    // tslint:disable-next-line:radix
    this.productService.updateProduct(this.productId, this.productForm.value).subscribe(result => this.gotoProductList(),
      error => this.message = error.error.error);
  }

  gotoProductList() {
    this.route.navigate(['/productlist']);
  }
}
