import { Component, inject } from '@angular/core';
import { ProductService } from '../product.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-featured-product',
  imports: [RouterLink,NgFor],
  templateUrl: './featured-product.component.html',
  styleUrl: './featured-product.component.css'
})
export class FeaturedProductComponent {
  data: any = []
    private _api = inject(ProductService)
    ngOnInit() {
      this._api.getAll().subscribe((res) => {
        this.data = res    
      })
    }
}
