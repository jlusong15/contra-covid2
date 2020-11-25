import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactTracingComponent } from './contact-tracing.component';

describe('ContactTracingComponent', () => {
  let component: ContactTracingComponent;
  let fixture: ComponentFixture<ContactTracingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [ FormsModule, ReactiveFormsModule ],
      declarations: [ ContactTracingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactTracingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
