import { Component, OnInit } from '@angular/core';

// services
import { SamplesApiDemoService } from '../../services/samples-api-demo.service';

@Component({
  selector: 'app-observable-http-sample',
  templateUrl: './observable-http-sample.component.html',
  styleUrls: ['./observable-http-sample.component.scss'],
  providers: [SamplesApiDemoService]
})
export class ObservableHttpSampleComponent implements OnInit {
  public errorMessage: String;
  public fotos = [];
  public originalFetch = [];
  public scrollFetch = [];
  public newFetchsSize = 100;
  public isFinished = false;

  constructor(private samplesApiDemoService: SamplesApiDemoService) {}

  ngOnInit() {
    this.getSampleData();
  }

  getSampleData() {
    this.samplesApiDemoService.getSamples()
      .subscribe(
        data => {
          this.originalFetch = data;
          this.fotos = data.slice(0, 20);
          console.log('data: ', this.originalFetch, this.fotos);
        },
        error => {
          this.errorMessage = error;
          console.log('Error: ', error);
        }
      );
  }

  onScrollDown() {
    console.log('scrolled down!!');
    if (this.fotos.length < this.originalFetch.length) {
      const currentLength = this.fotos.length;
      for (let i = currentLength; i < currentLength + this.newFetchsSize; i++) {
        this.fotos.push(this.originalFetch[i]);
      }
    }
  }
}
