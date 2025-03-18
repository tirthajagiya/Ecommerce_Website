import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-add-category',
  imports: [ReactiveFormsModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {
  private _fb = inject(FormBuilder)
  private _router = inject(Router)

  categoryForm: FormGroup = this._fb.group({
    categoryName: [''],
    description: [''],
    image: ['']
  })

  private _api = inject(CategoryService)
  formSubmit() {
    console.log(this.categoryForm.value);
    this._api.insert(this.categoryForm.value).subscribe((res) => {
    })
    this._router.navigate(['/'])
  }

  cancel() {
    this._router.navigate(['/'])
  }

}
