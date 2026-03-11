import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents(); // compiles components asynchronously

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();  // triggers Angular change detection
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should start with count = 0', () => {
    expect(component.count).toBe(0);
  });

  it('should increment the counter', () => {
    component.increment();
    expect(component.count).toBe(1);
  });

  it('should decrement the counter', () => {
    component.decrement();
    expect(component.count).toBe(-1);
  });

  it('should reflect count in template on increment button click', () => {
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('h2').textContent).toContain('1');
  });

});
