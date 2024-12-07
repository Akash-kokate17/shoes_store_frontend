import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPriceDetailsComponent } from './cart-price-details.component';

describe('CartPriceDetailsComponent', () => {
  let component: CartPriceDetailsComponent;
  let fixture: ComponentFixture<CartPriceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartPriceDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartPriceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
