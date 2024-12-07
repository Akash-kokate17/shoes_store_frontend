import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PumaBestProductsComponent } from './puma-best-products.component';

describe('PumaBestProductsComponent', () => {
  let component: PumaBestProductsComponent;
  let fixture: ComponentFixture<PumaBestProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PumaBestProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PumaBestProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
