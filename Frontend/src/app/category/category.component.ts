import { Component, inject, Injector } from '@angular/core';
import { CategoryService } from '../category.service';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  imports: [NgFor],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  data: any = []
  private _api = inject(CategoryService)
  ngOnInit() {
    this._api.getAll().subscribe((res) => {
      this.data = res
    })
  }
}