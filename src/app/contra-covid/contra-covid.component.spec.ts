import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContraCovidComponent } from './contra-covid.component';

describe('ContraCovidComponent', () => {
  let component: ContraCovidComponent;
  let fixture: ComponentFixture<ContraCovidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContraCovidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContraCovidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
