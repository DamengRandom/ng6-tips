import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBindingDemoOneComponent } from './input-binding-demo-one.component';

describe('InputBindingDemoOneComponent', () => {
  let component: InputBindingDemoOneComponent;
  let fixture: ComponentFixture<InputBindingDemoOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputBindingDemoOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputBindingDemoOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
