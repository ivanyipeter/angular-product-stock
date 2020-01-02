import {Component, OnInit} from '@angular/core';
import {Stock} from '../../../model/stock';
import {StockService} from '../stock-service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  private stocks: Stock[];

  constructor(private stockService: StockService) {
  }

  ngOnInit() {
    this.stockService.getAllStock().subscribe(data => {
      this.stocks = data;
    });
  }

  deleteStockById(id: number) {
    this.stockService.deleteStockById(id).subscribe(data => this.ngOnInit());
  }

}
