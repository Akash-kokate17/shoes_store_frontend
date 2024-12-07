import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NikeMainComponent } from './nike-main.component';

describe('NikeMainComponent', () => {
  let component: NikeMainComponent;
  let fixture: ComponentFixture<NikeMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NikeMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NikeMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
