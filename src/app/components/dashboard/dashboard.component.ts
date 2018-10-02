import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  navs = [
    { url: '/animations', content: 'Animations' },
    { url: '/basic-form', content: 'Basic Form' },
    { url: '/change-detection-option1', content: 'Change Detection Option One' },
    { url: '/customers-demo', content: 'Lazy Load Route' },
    { url: '/custom-pipe-demo', content: 'Custom Pipe Demo' },
    { url: '/dynamic-form', content: 'Dynamic Form' },
    { url: '/input-bind-demo', content: 'Input Bind Demo' },
    { url: '/mission', content: 'Mission' },
    { url: '/obsr-http-sample', content: 'Http Observable Sample' },
    { url: '/obsr-sample', content: 'Observable Sample One' },
    { url: '/obsr-sample-two', content: 'Observable Sample Two' },
    { url: '/obs-prac01', content: 'Observable Practice 01' },
    { url: '/output-demo', content: 'Output Demo' },
    { url: '/progress-bar-demo', content: 'Progress Bar Demo' },
    { url: '/resize', content: 'Resize' },
    { url: '/rxjs-trial', content: 'Rxjs Trial' },
    { url: '/search-demo', content: 'Search Component Demo' },
    { url: '/lazy-loading-demo', content: 'Lazy Loading Demo' },
    { url: '/vanilla-demo', content: 'Vanilla JS Accordion Demo' }
  ];
  
  constructor() { }

  ngOnInit() {
  }
}
