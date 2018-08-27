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
  private errorMessage: String;
  fotos = [];
  constructor(private samplesApiDemoService: SamplesApiDemoService) {}

  ngOnInit() {
    this.getSampleData();
  }

  getSampleData() {
    this.samplesApiDemoService.getSamples()
      .subscribe(
        data => {
          this.fotos = data;
          console.log('data: ', this.fotos);
        },
        error => {
          this.errorMessage = error;
          console.log('Error: ', error);
        }
      );
  }

  onScrollDown(ev) {
    console.log('scrolled down!!', ev);
  }
}
