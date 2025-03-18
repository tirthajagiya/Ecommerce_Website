import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../product.service';
import { NgFor } from '@angular/common';
import { CartService } from '../cart.service';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-best-selling-product',
  imports: [RouterLink, NgFor, FormsModule],
  templateUrl: './best-selling-product.component.html',
  styleUrl: './best-selling-product.component.css'
})
export class BestSellingProductComponent {
  data: any = []
  private _api1 = inject(ProductService)
  private _api2 = inject(CartService)
  private _api3 = inject(UserService)
  ngOnInit() {
    this._api1.getAll().subscribe((res) => {
      this.data = res
    })
  }

  num: number = 0

  data2: any = {}
  addToCart(i: any) {
    this.data2 = {
      items: [
        {
          productId: i,
          quantity: this.num
        }
      ],
      // totalPrice:
    }
  }
}