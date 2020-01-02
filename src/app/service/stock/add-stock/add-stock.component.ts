import {Component, OnInit} from '@angular/core';
import {StockService} from '../stock-service';
import {Router, RouterModule} from '@angular/router';
import {Stock} from '../../../model/stock';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {

  private stock: Stock = new Stock();
  private stockForm: FormGroup;
  private message: Error;

  constructor(private stockService: StockService,
              private router: Router,
              private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.stockForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  onSubmit() {
    this.stockService.createStock(this.stockForm.value).subscribe(result => this.gotoProductList(),
      error => this.message = error.error.error);
  }

  gotoProductList() {
    this.router.navigate(['/stocklist']);
  }

}
