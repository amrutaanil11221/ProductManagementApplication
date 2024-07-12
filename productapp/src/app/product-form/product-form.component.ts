import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from './product.module';
import { ProductService } from '../service/product.service';
@Component({
  selector: 'app-contact-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit{

  productForm!:FormGroup;
  productId:number | null = null;
  isUpdateMode:boolean = false;

  constructor(
    private fb:FormBuilder,
    private ProductService:ProductService,
    private toastr:ToastrService,
    private route:ActivatedRoute,
    private router:Router
  ){
    this.productForm= this.fb.group({
      id:['',Validators.required],
      name:['',Validators.required],
      price:['',Validators.required],
      quantity:['',Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadContact();
    const selectedUser = this.ProductService.getSelectedUser();
    if(selectedUser){
      this.productForm.patchValue({
        id:selectedUser.id,
        name:selectedUser.name,
        price:selectedUser.price,
        quantity:selectedUser.quantity,
      })
    }
    this.ProductService.isUpdateMode$.subscribe((isUpdateMode)=>{
      this.isUpdateMode = isUpdateMode;
      if(isUpdateMode){
        if(this.isUpdateMode){
          //this.updateDetails();
        }
        else{
          this.addDetails();
        }
      }
    });

    // this.route.paramMap.subscribe(params => {
    //   const id = params.get('id');
    //   if (id) {
    //     this.productId = +id;
    //     this.loadContact();
    //   }
    // });
  }

  loadContact(): void {
    this.ProductService.getProducts().subscribe(product => {
      console.log(product)
      this.productForm.patchValue(product);
    });
  }

  
  onSubmit(){
 
    if(this.isUpdateMode){
      this.updateDetails();
      //this.router.navigate(['/products']);
    
    }
    else{
      this.addDetails();
    }
  }

  addDetails(){
    if(this.productForm.valid){
      this.ProductService.addProduct(this.productForm.value).subscribe(()=>{
        this.toastr.success('Product Added Successfully','Success!');
        this.router.navigate(['/products']);
        // this.productForm.reset();
        // window.location.href = "/products";
      });
    }
    else{
      this.toastr.error("Please enter Valid data!!");
    }
  }


  updateprdct:any ={
    id:0,
    name:'',
    price:'',
    quantity:''
  }
  updateDetails(){
    if(this.productForm.valid){
      this.ProductService.updateProduct(this.updateprdct.id, this.productForm.value).subscribe(res=>{
        this.toastr.success('Product Updated Successfully','Success!');
        setTimeout(function() {
          window.location.href = "/products";
        }, 1000);
        
       
      });
    }
  }


 
}



