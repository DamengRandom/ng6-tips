import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablePracticeTwoComponent } from './observable-practice-two.component';

describe('ObservablePracticeTwoComponent', () => {
  let component: ObservablePracticeTwoComponent;
  let fixture: ComponentFixture<ObservablePracticeTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservablePracticeTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservablePracticeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
