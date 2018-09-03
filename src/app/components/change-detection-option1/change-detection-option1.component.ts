import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-change-detection-option1',
  templateUrl: './change-detection-option1.component.html',
  styleUrls: ['./change-detection-option1.component.scss']
})
export class ChangeDetectionOption1Component implements OnInit {
  // data = { counter: 0 };
  _counter = 0;
  data$ = new BehaviorSubject({ counter: 0 });

  constructor() {}

  ngOnInit() {}

  counterIncrement() {
    // this.data.counter++; // update counter property which insides data object
    // this.data = { counter: ++this.data.counter };
    this.data$.next({ counter: ++this._counter });
  }
}
