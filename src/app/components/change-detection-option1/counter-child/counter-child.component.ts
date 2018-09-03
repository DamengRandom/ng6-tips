import { Component, Input, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-counter-child',
  templateUrl: './counter-child.component.html',
  styleUrls: ['./counter-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterChildComponent implements OnInit {
  // @Input() data; // only data (reference) changed, not data.counter (property) changed
  @Input() data: Observable<any>;
  _data;
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.data.subscribe(res => {
      this._data = res.counter;
      this.cd.markForCheck();
    });
  }
}
