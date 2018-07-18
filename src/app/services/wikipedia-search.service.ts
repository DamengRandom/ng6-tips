import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class WikipediaSearchService {

  constructor(private http: HttpClient) {}

  search(term: string) {

  }
}
