import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable({
  providedIn: 'root'
})
export class WikipediaSearchService {
  baseUrl: String = `https://api.cdnjs.com/libraries?search=`;

  constructor(private http: HttpClient) {}

  search(terms: Observable<String>) {
    console.log('terms: ', terms);
    return terms.debounceTime(100)
            .distinctUntilChanged()
            .switchMap(term => this.searchEntries(term));
  }

  searchEntries(term) {
    return this.http.get(this.baseUrl + term);
  }
}
