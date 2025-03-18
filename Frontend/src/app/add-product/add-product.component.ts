import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  imports: [ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  private _fb = inject(FormBuilder)
  private _router = inject(Router)

  productForm: FormGroup = this._fb.group({
    productName: [''],
    category: [''],
    description: [''],
    price: [''],
    discount: [''],
    stock: [''],
    images: ['']
  })

  private _api = inject(ProductService)
    formSubmit() {
      console.log(this.productForm.value);
      this._api.insert(this.productForm.value).subscribe((res) => {
      })
      this._router.navigate(['/'])
    }
  
    cancel() {
      this._router.navigate(['/'])
    }
}
