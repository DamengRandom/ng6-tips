import { Component, OnInit } from '@angular/core';
import { Observable, of } from '../../../../node_modules/rxjs';
import { ajax } from 'rxjs/ajax';
import { map, catchError } from '../../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-observable-sample-one',
  templateUrl: './observable-sample-one.component.html',
  styleUrls: ['./observable-sample-one.component.scss']
})
export class ObservableSampleOneComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // const locations = new Observable((observer) => {
    //   const { next, error } = observer;
    //   let watchId;

    //   if ('geolocation' in navigator) {
    //     watchId = navigator.geolocation.watchPosition(next, error);
    //   } else {
    //     error('Geolocation is not available ..');
    //   }

    //   return {
    //     unsubscribe() {
    //       navigator.geolocation.clearWatch(watchId);
    //     }
    //   };
    // });

    // const locationSubscription = locations.subscribe({
    //   next (position) {
    //     console.log('Position: ', position);
    //   },
    //   error (err) {
    //     console.log('Error: ', err);
    //   }
    // });

    // setTimeout(() => {
    //   console.log(locationSubscription);
    //   locationSubscription.unsubscribe();
    // }, 0);



    // example 1
    // observable that emits 3 values
    const myObservable = Observable.of(1, 2, 3);

    const myObserver = {
      next(x) { console.log('observer x: ', x); },
      error(err) { console.log('error: ', err); },
      complete() { console.log('Completed observeable process'); }
    };

    myObservable.subscribe(myObserver);



    // example 2:
    // trials:
    function value1() {
      return 123;
    }
    function value2() {
      return 546;
    }
    function value3() {
      return 678;
    }

    function cb(cbx) {
      return cbx;
    }

    // create observable constructor example
    function sequenceSubscriber(observer) {
      const array = [value1(), value2(), value3()];
      array.forEach((el) => {
        observer.next(cb(el));
      });

      observer.complete();
      return {
        unsubscribe() {}
      };
    }

    const sequence = new Observable(sequenceSubscriber);

    sequence.subscribe({
      next(num: any) {
        console.log('num: ', num);
      },
      complete() {
        console.log('Completed');
      }
    });



    // example 3: custom from event observble function
    function formEvent(target, eventName) {
      return new Observable((observer) => {
        const handler = (e) => observer.next(e);

        target.addEventListener(eventName, handler);

        return () => {
          target.removeEventListener(eventName, handler);
        };
      });
    }

    // custom from event observble function implementation
    const KEY_ESC = 27;
    const targetInputDOM = document.getElementById('name') as HTMLInputElement;
    const subscription = formEvent(targetInputDOM, 'keydown').subscribe((e: KeyboardEvent) => {
      if (e.keyCode === KEY_ESC) {
        targetInputDOM.value = '';
      }
    });


    // example 5: ajax observable
    const mockData = ajax('https://jsonplaceholder.typicode.com/posts/10');
    // const formattedData = mockData.pipe(
    //   map((res) => {
    //     if (!res.response) {
    //       console.log('run here? ');
    //       throw new Error('no data returned ..');
    //     }
    //     console.log('return? ', res.response);
    //     return res.response;
    //   }),
    //   catchError(err => of(err))
    // );

    // formattedData.subscribe({
    mockData.subscribe({
      next(data) {
        console.log('data: ', data);
      },
      error(err) {
        console.log('err: ', err);
      }
    });
    // const mockData = ajax('https://jsonplaceholder.typicode.com/todos/');
    // mockData.subscribe((data) => console.log('ajax observable data: ', data.response));


    // example 6: search switchMap() demo



    // tiny callback example: when user clicks cbFunc DOM element, then trigger the callback function cbExample
    document.getElementById('cbFunc').addEventListener('click', this.cbExample);
  }

  cbExample() {
    console.log('called?');
    document.getElementById('cbDemo').innerHTML = 'wahahhaa';
  }
}
