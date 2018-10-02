import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-observable-practice-two',
  templateUrl: './observable-practice-two.component.html',
  styleUrls: ['./observable-practice-two.component.scss']
})

export class ObservablePracticeTwoComponent implements OnInit {
  randPass = 'No Password Yet';
  subjObserver = new Subject();

  observableDemo = Observable.create(res => {
    res.next(this.insdeObservableFn());
  });

  constructor() {}

  ngOnInit() {
    this.getObservableOutputs();
  }

  insdeObservableFn() {
    this.randPass = Math.random().toString(36).slice(2);
    return this.randPass;
  }

  getObservableOutputs() {
    this.observableDemo.subscribe(res => console.log('response: ', res));
  }
}
