import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Stock} from '../../model/stock';
import {Observable} from 'rxjs';
import {Product} from '../../model/product';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private readonly stockUrl: string;

  constructor(private http: HttpClient) {
    this.stockUrl = 'http://localhost:8080/admin/stock/';
  }

  public getStockById(id: number): Observable<any> {
    return this.http.get(this.stockUrl.concat(id.toString()));
  }

  public getAllStock(): Observable<Stock[]> {
    return this.http.get<Stock[]>(this.stockUrl);
  }

  public deleteStockById(id: number): Observable<any> {
    return this.http.delete(this.stockUrl.concat(id.toString()));
  }

  public createStock(stock: Stock): Observable<Stock> {
    return this.http.post<Stock>(this.stockUrl, stock);
  }

  public updateStock(id: number, stock: Stock): Observable<any> {
    return this.http.patch<Stock>(this.stockUrl.concat(id.toString()), stock);
  }

  public getProductsByStockId(id: number): Observable<any> {
    return this.http.get<Product[]>(this.stockUrl.concat(id.toString()).concat('/products'));
  }

}
