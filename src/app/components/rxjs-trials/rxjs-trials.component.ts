import { Component, OnInit } from '@angular/core';
import * as Rx from 'rxjs/rx';

@Component({
  selector: 'app-rxjs-trials',
  templateUrl: './rxjs-trials.component.html',
  styleUrls: ['./rxjs-trials.component.scss']
})
export class RxjsTrialsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.rxDemo01();
  }

  rxDemo01() {
    const x = Rx.Observable.of(12, 3);
    x.subscribe(data => console.log('whats x data: ', data));
  }
}
