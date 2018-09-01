import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VanillaDemoComponent } from './vanilla-demo.component';

describe('VanillaDemoComponent', () => {
  let component: VanillaDemoComponent;
  let fixture: ComponentFixture<VanillaDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VanillaDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VanillaDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
