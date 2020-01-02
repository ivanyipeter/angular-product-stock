import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Product} from '../../model/product';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl: string;

  constructor(private http: HttpClient) {
    this.productUrl = 'http://localhost:8080/admin/product/';
  }

  public getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl);
  }

  public deleteProductById(id: number): Observable<any> {
    return this.http.delete(this.productUrl.concat(id.toString()));
  }

  public createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.productUrl, product);
  }

  public getProductById(id: number): Observable<any> {
    return this.http.get(this.productUrl.concat(id.toString()));
  }

  public updateProduct(id: number, product: Product): Observable<any> {
    return this.http.put(this.productUrl.concat(id.toString()).concat('/update'), product);
  }

}
