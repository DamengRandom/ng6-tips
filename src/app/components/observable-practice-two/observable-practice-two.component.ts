import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

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
    this.getCombinedAPIData();
  }

  insdeObservableFn() {
    this.randPass = Math.random().toString(36).slice(2);
    return this.randPass;
  }

  getObservableOutputs() {
    // this.observableDemo.subscribe(res => console.log('response: ', res));
    this.subjObserver.subscribe(res => console.log('thread/service A: ', res));
    this.subjObserver.subscribe(res => console.log('thread/service B: ', res));
    this.observableDemo.subscribe(this.subjObserver); // Observable wrapped in a subject, causing shared execution
  }

  getCombinedAPIData() {
    const apiData01$ = Observable.ajax('https://jsonplaceholder.typicode.com/albums').pipe(
      map(res => res.response.slice(0, 3))
    );

    const apiData02$ = Observable.ajax('https://jsonplaceholder.typicode.com/posts').pipe(
      map(res => res.response.slice(0, 3))
    );

    return Observable.combineLatest(apiData01$, apiData02$)
      .subscribe(res => {
        console.log('combined response: ', res);
      }, err => {
        console.log('Error occurred: ', err);
      });
  }
}
