import { Component, inject } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-product',
  imports: [],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css'
})
export class SingleProductComponent {
  data: any = []
      private _api = inject(ProductService)
      private _router = inject(Router)
      private _activatedRoute = inject(ActivatedRoute)
      ngOnInit() {
        const id = this._activatedRoute.snapshot.params["id"];
        this._api.getByid(id).subscribe((res) => {
          this.data = res
          console.log(this.data);
          
        })
        console.log(this.data);
      }
}
