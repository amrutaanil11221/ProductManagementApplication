import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../product-form/product.module';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl="https://localhost:44377/api/Products";
  constructor(private http:HttpClient) { }

  private selectedUser:any;
  setSelecteduser(data:any){
    this.selectedUser=data;
  }
  getSelectedUser(){
    return this.selectedUser;
  }
  private isUpdateModeSubject = new BehaviorSubject<boolean>(false);
  isUpdateMode$ = this.isUpdateModeSubject.asObservable();

  setUpdatemode(isUpdateMode:boolean){
    this.isUpdateModeSubject.next(isUpdateMode);
  }


  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl);
  }
  getProduct(id: number): Observable<Product> {
    
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  addProduct(product:Product):Observable<Product>{
    return this.http.post<Product>(this.apiUrl,product);
  }

  updateProduct(id:number,data:any):Observable<Product>{
    return this.http.put<Product>(`${this.apiUrl}`, data);
  }

  deleteProduct(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
