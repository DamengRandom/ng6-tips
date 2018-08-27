import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableSampleOneComponent } from './observable-sample-one.component';

describe('ObservableSampleOneComponent', () => {
  let component: ObservableSampleOneComponent;
  let fixture: ComponentFixture<ObservableSampleOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableSampleOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableSampleOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
