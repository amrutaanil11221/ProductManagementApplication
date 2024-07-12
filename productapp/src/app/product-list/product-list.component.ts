import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Product } from '../product-form/product.module';
import { ProductService } from '../service/product.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'price', 'quantity', 'actions'];
  dataSource = new MatTableDataSource<Product>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private productService: ProductService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadProducts();
    
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  loadProducts() {
    this.productService.getProducts().subscribe(products => {
      this.dataSource.data = products;
    });
  }

  editProduct(product: Product) {
    //debugger;
    this.productService.getProduct(product.id).subscribe(res => {
      this.dataSource.data = [res];
      this.productService.setSelecteduser(product);
      this.productService.setUpdatemode(true);
      this.router.navigate(['add-product']);
    }, error => {
      console.error('Error fetching product:', error);
    });
  }
  

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.loadProducts();
      this.toastr.warning('Product deleted successfully');
    });
  }
}
