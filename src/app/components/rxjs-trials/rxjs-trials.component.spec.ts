import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsTrialsComponent } from './rxjs-trials.component';

describe('RxjsTrialsComponent', () => {
  let component: RxjsTrialsComponent;
  let fixture: ComponentFixture<RxjsTrialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsTrialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsTrialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
