import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdidasMainComponent } from './adidas-main.component';

describe('AdidasMainComponent', () => {
  let component: AdidasMainComponent;
  let fixture: ComponentFixture<AdidasMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdidasMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdidasMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
