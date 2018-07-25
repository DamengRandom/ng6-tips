import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe-demo',
  templateUrl: './custom-pipe-demo.component.html',
  styleUrls: ['./custom-pipe-demo.component.scss']
})
export class CustomPipeDemoComponent implements OnInit {
  file = {
    name: 'logo.svg',
    size: 2120109,
    type: 'image/svg'
  };
  constructor() { }

  ngOnInit() {
  }

}
