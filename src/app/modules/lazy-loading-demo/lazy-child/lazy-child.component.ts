import { Component, Input, OnChanges, SimpleChange, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lazy-child',
  templateUrl: './lazy-child.component.html',
  styleUrls: ['./lazy-child.component.scss']
})
export class LazyChildComponent implements OnChanges {
  @Input() major: number;
  @Input() minor: number;
  @Input() textSize: any;
  @Output() changedSize = new EventEmitter();
  changeLog: string[] = [];

  constructor() {
    console.log('textSize:', this.textSize);
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    const log: string[] = [];
    console.log('changes: ', changes);
    for (const propName of Object.keys(changes)) {
      const changedProp = changes[propName];
      const to = JSON.stringify(changedProp.currentValue);
      if (changedProp.isFirstChange()) {
        log.push(`Initial value ${propName} set ${to} `);
      } else {
        const from = JSON.stringify(changedProp.previousValue);
        log.push(`Value has been changed ${from} set ${to} `);
      }
    }
    this.changeLog.push(log.join(', '));
  }
  // onOnchanges just use for input property changes detection only !!!!

  // output demo
  updateTextSize() {
    this.changedSize.emit(this.textSize / 2);
    console.log('clicked? ');
  }
}
