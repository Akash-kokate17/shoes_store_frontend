import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PumaMainComponent } from './puma-main.component';

describe('PumaMainComponent', () => {
  let component: PumaMainComponent;
  let fixture: ComponentFixture<PumaMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PumaMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PumaMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
