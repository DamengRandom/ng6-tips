import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-observable-sample-two',
  templateUrl: './observable-sample-two.component.html',
  styleUrls: ['./observable-sample-two.component.scss']
})
export class ObservableSampleTwoComponent implements OnInit {

  baseUrl: String = `https://api.cdnjs.com/libraries?search=`;
  searchTerm$ = new Subject<String>();
  results: any;

  constructor(public http: HttpClient) {}

  ngOnInit() {
    this.runChangeDetected(); // even ngOnInit only initial the function once,
    // but we are using subject which can make saerchBox() function triggers again and again
    // when searchTerm$.next($event.target.value) run again and again
  }

  runChangeDetected() {
    this.searchBox(this.searchTerm$).subscribe(
      data => {
        console.log('data: ', data['results']);
        this.results = data['results'];
      },
      error => {
        console.error('Error: ', error);
      }
    );
  }

  searchBox(terms: Observable<String>) {
    return terms.debounceTime(100)
            .distinctUntilChanged()
            .switchMap(term => this.searchEntries(term));
  }

  searchEntries(term) {
    return this.http.get(this.baseUrl + term);
  }
}
