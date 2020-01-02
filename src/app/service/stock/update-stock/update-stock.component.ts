import {Component, OnInit} from '@angular/core';
import {Stock} from '../../../model/stock';
import {ActivatedRoute, Router} from '@angular/router';
import {StockService} from '../stock-service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-update-stock',
  templateUrl: './update-stock.component.html',
  styleUrls: ['./update-stock.component.css']
})
export class UpdateStockComponent implements OnInit {

  private stock: Stock;
  private stockId: number;
  private stockForm: FormGroup;
  private message: string;

  constructor(private stockService: StockService,
              private route: Router,
              private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.stockForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }


  ngOnInit() {
    // @ts-ignore
    this.stockId = this.activatedRoute.snapshot.paramMap.get('id');
    // @ts-ignore
    this.getStockById(this.stockId);
  }

  onSubmit() {
    // tslint:disable-next-line:radix
    this.stockService.updateStock(this.stockId, this.stockForm.value).subscribe(result => this.gotoStockList(),
      error => this.message = error.error.error);
  }

  getStockById(id: number) {
    this.stockService.getStockById(id).subscribe(data => this.stock = data);
  }

  gotoStockList() {
    this.route.navigate(['/stocklist']);
  }
}
