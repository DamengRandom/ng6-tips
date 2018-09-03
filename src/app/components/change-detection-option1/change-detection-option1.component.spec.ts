import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionOption1Component } from './change-detection-option1.component';

describe('ChangeDetectionOption1Component', () => {
  let component: ChangeDetectionOption1Component;
  let fixture: ComponentFixture<ChangeDetectionOption1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeDetectionOption1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDetectionOption1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
