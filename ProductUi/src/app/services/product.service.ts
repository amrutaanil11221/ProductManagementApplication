import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Product } from '../model/productModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiURL="http://localhost:3000/products";

  constructor(private http:HttpClient) { }

  //Get products
  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.apiURL);
  }

  //Get products by id
  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiURL}/${id}`);
  }

  //Add products
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiURL, product);
  }

  //Update products
  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiURL}/${product.id}`, product);
  }

  //Delete products
  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }
}
