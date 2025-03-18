import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterEvent, RouterLink } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-display',
  imports: [RouterLink,NgFor],
  templateUrl: './category-display.component.html',
  styleUrl: './category-display.component.css'
})
export class CategoryDisplayComponent {
  private _router = inject(Router)
  data: any = []
    private _api = inject(CategoryService)
    ngOnInit() {
      this._api.getAll().subscribe((res) => {
        this.data = res
      })
    }

    goToCategory(){
      this._router.navigate(['/category'])
    }
}
