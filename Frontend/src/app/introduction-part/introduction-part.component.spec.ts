import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionPartComponent } from './introduction-part.component';

describe('IntroductionPartComponent', () => {
  let component: IntroductionPartComponent;
  let fixture: ComponentFixture<IntroductionPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroductionPartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroductionPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
