import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormParentComponent } from './dynamic-form-parent.component';

describe('DynamicFormParentComponent', () => {
  let component: DynamicFormParentComponent;
  let fixture: ComponentFixture<DynamicFormParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
