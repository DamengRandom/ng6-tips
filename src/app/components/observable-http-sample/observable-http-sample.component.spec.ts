import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableHttpSampleComponent } from './observable-http-sample.component';

describe('ObservableHttpSampleComponent', () => {
  let component: ObservableHttpSampleComponent;
  let fixture: ComponentFixture<ObservableHttpSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableHttpSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableHttpSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
