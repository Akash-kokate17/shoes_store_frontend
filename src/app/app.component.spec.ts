import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'angular_project_july_2024_2' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular_project_july_2024_2');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, angular_project_july_2024_2');
  });

  it('Should verify add functionality', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.add(2, 3)).toBe(5);
    expect(app.add(2, -3)).toBe(-1);
    expect(app.add(-2, 3)).toBe(1);
  })
  it('Should verify isEven functionality', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.isEven(2)).toBe('even');
    expect(app.isEven(2)).not.toBe('odd');
    expect(app.isEven(3)).toBe('odd');
    expect(app.isEven(5)).not.toBe('even');
  })
  it('Should verify cars functionality', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.cars).not.toBeUndefined();
    expect(app.cars).toBeDefined;
    expect(app.cars.length).toBe(2);
    expect(app.cars).toContain('tata');
    app.addNewCar('maruti')
    app.addNewCar('hundai')
    expect(app.cars.length).not.toBe(2);
    expect(app.cars.length).toBe(4);
    expect(app.cars).toContain('maruti');
    app.deletecar(2);
    expect(app.cars.length).not.toBe(4);
    expect(app.cars.length).toBe(3);
    expect(app.cars).toContain('tata');
    expect(app.cars).not.toContain('maruti');
  })
  it('should verify paranthesis logic', () => {
    let app = new AppComponent();
    expect(app.isValidParentheses('{[()]}')).toBe(true);
    expect(app.isValidParentheses('{[()]$')).toBe(false);
  })
});
