import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-observable-practice01',
  templateUrl: './observable-practice01.component.html',
  styleUrls: ['./observable-practice01.component.scss']
})

export class ObservablePractice01Component implements OnInit, AfterViewInit {
  @ViewChild('generateButton') generateButton;  // buttonDOM = document.querySelector('.generate-button');
  @ViewChild('passwordContent') passwordContent; // passwordDOM = document.querySelector('.generate-content');
  @ViewChild('ajaxTrigger') ajaxTrigger;
  @ViewChild('inputID') inputID;
  @ViewChild('selectResource') selectResource;
  API_ENDPOINT = `https://jsonplaceholder.typicode.com/albums`;
  returns: any;
  v2Returns: any;
  comboReturns: any;

  constructor(private el: ElementRef) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.randomPassword();
    this.ajaxCallObservableVersion2();
    this.getCombinedAPIReturns();
  }

  randomPassword() {
    Observable.fromEvent(this.generateButton.nativeElement, 'click')
      .bufferCount(3) // it means we need to click 3 times and trigger the subscribe function to run properly
      .subscribe(_ => {
        this.passwordContent.nativeElement.innerHTML = Math.random().toString(36).slice(2);
      });
  }

  ajaxCallObservable() {
    Observable.ajax(this.API_ENDPOINT)
      .subscribe(res => {
        this.returns = res.response.slice(0, 3);
        console.log(res.response);
      }, (err) => {
        console.log('Error: ', err);
      });
  }

  ajaxCallObservableVersion2() {
    Observable.fromEvent(this.ajaxTrigger.nativeElement, 'click') // fromEvent means addEventListener
      .switchMap(_ => {
        return this.getDataByUserID(this.API_ENDPOINT);
      })
      .subscribe(res => {
        this.v2Returns = res.response;
        console.log(this.v2Returns);
      }, err => {
        console.log('Error: ', err);
      });
  }

  getDataByUserID(url) {
    const userId = Math.round(Math.random() * 10);
    console.log('here? ', url, `${url}?userId=${userId}`);
    return Observable.ajax(`${url}?userId=${userId}`);
  }

  getCombinedAPIReturns() {
    const userId$ = Observable.fromEvent(this.inputID.nativeElement, 'keyup')
      .pipe(
        map((e: any) => e.target.value)
      );

    const resource$ = Observable.fromEvent(this.selectResource.nativeElement, 'change')
      .pipe(
        map((e: any) => e.target.value)
      );

    Observable.combineLatest(userId$, resource$)
      .switchMap(res => {
        console.log('wahst res? ', res);
        return this.getFinalData(res);
      })
      .subscribe(
        res => {
          this.comboReturns = res.response;
          console.log('final response: ', res.response);
        },
        err => {
          console.log(err);
        }
      );
  }

  getFinalData(res) {
    return Observable.ajax(`https://jsonplaceholder.typicode.com/${res[1]}?userId=${res[0]}`);
  }
}
