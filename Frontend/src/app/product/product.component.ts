import { Component, inject } from '@angular/core';
import { ProductService } from '../product.service';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [NgFor],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  data: any = []
    private _api = inject(ProductService)
    private _router = inject(Router)
    ngOnInit() {
      this._api.getAll().subscribe((res) => {
        this.data = res
      })
      console.log(this.data);
    }

    goToProduct(id:any){
      this._router.navigate(['product/'+id])
    }
}
