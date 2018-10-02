import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablePractice01Component } from './observable-practice01.component';

describe('ObservablePractice01Component', () => {
  let component: ObservablePractice01Component;
  let fixture: ComponentFixture<ObservablePractice01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservablePractice01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservablePractice01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
