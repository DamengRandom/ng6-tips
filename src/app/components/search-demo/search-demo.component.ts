import { Component, OnInit } from '@angular/core';
import { WikipediaSearchService } from '../../services/wikipedia-search.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-search-demo',
  templateUrl: './search-demo.component.html',
  styleUrls: ['./search-demo.component.scss'],
  providers: [WikipediaSearchService]
})
export class SearchDemoComponent implements OnInit {
  results: any;
  searchTerm$ = new Subject<String>();
  constructor(private wikipediaSearchService: WikipediaSearchService) {}

  ngOnInit() {
    this.wikipediaSearchService.search(this.searchTerm$)
      .subscribe(returns => {
        console.log('results: ', returns['results']);
        this.results = returns['results'];
      });
  }
}
