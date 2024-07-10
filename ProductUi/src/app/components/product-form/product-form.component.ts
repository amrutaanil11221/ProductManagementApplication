import { Component,EventEmitter,Input,OnChanges,Output,SimpleChange, SimpleChanges} from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Product } from 'src/app/model/productModel';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {

  @Input() product: Product | null = null;
  @Output() productAdded = new EventEmitter<Product>();
  @Output() productUpdated = new EventEmitter<Product>();
  productForm: FormGroup;

  constructor(private fb:FormBuilder){
    this.productForm = this.fb.group({
      id:[],
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      quantity: ['', [Validators.required, Validators.min(1)]]
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['product'] && this.product) {
      this.productForm.patchValue(this.product);
    }
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const product: Product = this.productForm.value;
      if (product.id) {
        this.productUpdated.emit(product);
      } else {
        this.productAdded.emit(product);
      }
      this.productForm.reset({ id: 0 });
    }
  }
  
}
