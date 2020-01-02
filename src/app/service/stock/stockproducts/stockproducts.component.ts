import {Component, OnInit} from '@angular/core';
import {Product} from '../../../model/product';
import {StockService} from '../stock-service';
import {ActivatedRoute} from '@angular/router';
import {Stock} from '../../../model/stock';

@Component({
  selector: 'app-stockproducts',
  templateUrl: './stockproducts.component.html',
  styleUrls: ['./stockproducts.component.css']
})
export class StockproductsComponent implements OnInit {

  private products: Product[];
  stock: Stock = new Stock();
  private stockId: number;
  private stockName: string;

  constructor(private stockService: StockService,
              private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    // @ts-ignore
    this.stockId = this.activatedRoute.snapshot.paramMap.get('id');
    this.stockService.getProductsByStockId(this.stockId).subscribe(data => {
      this.products = data;
    });
  }

}
