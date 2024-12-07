import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestAdidasShoesComponent } from './best-adidas-shoes.component';

describe('BestAdidasShoesComponent', () => {
  let component: BestAdidasShoesComponent;
  let fixture: ComponentFixture<BestAdidasShoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestAdidasShoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestAdidasShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
