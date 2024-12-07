import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NikeBestProductComponent } from './nike-best-product.component';

describe('NikeBestProductComponent', () => {
  let component: NikeBestProductComponent;
  let fixture: ComponentFixture<NikeBestProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NikeBestProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NikeBestProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
