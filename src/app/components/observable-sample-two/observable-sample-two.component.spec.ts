import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableSampleTwoComponent } from './observable-sample-two.component';

describe('ObservableSampleTwoComponent', () => {
  let component: ObservableSampleTwoComponent;
  let fixture: ComponentFixture<ObservableSampleTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableSampleTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableSampleTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
