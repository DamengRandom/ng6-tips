import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResizerParentComponent } from './resizer-parent.component';

describe('ResizerParentComponent', () => {
  let component: ResizerParentComponent;
  let fixture: ComponentFixture<ResizerParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResizerParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResizerParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
