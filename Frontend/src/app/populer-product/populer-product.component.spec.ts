import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulerProductComponent } from './populer-product.component';

describe('PopulerProductComponent', () => {
  let component: PopulerProductComponent;
  let fixture: ComponentFixture<PopulerProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopulerProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopulerProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
