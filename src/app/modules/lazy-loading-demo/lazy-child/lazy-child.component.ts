import { Component, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-lazy-child',
  templateUrl: './lazy-child.component.html',
  styleUrls: ['./lazy-child.component.scss']
})
export class LazyChildComponent implements OnChanges {
  @Input() major: number;
  @Input() minor: number;
  changeLog: string[] = [];

  constructor() { }

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
  // onOnchanges just use for input property chnages detection only !!!!
}
