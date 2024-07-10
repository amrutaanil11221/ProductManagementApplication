import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/model/productModel';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  products:Product[]=[];
  selectedProduct:Product | null = null;

  constructor(private productService:ProductService){}

  ngOnInit(): void {
    this.loadProducts();
  }

  //Get All Products 
  loadProducts(){
    this.productService.getProducts().subscribe((resp)=>{
      this.products=resp;
    });
  }

  //Add new products
  addProduct(product:Product){
    this.productService.addProduct(product).subscribe(newProduct =>{
      this.products.push(newProduct);
    });
  }

  // Edit product by id
  editProduct(product: Product): void {
    this.selectedProduct = { ...product };
  }

  updateProduct(product: Product): void {
    this.productService.updateProduct(product).subscribe(updatedProduct => {
      const index = this.products.findIndex(p => p.id === updatedProduct.id);
      this.products[index] = updatedProduct;
      this.selectedProduct = null;
    });
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter(product => product.id !== id);
    });
  }




}
