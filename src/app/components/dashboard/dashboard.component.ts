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
    { url: '/customers-demo', content: 'Lazy Load Route' },
    { url: '/custom-pipe-demo', content: 'Custom Pipe Demo' },
    { url: '/dynamic-form', content: 'Dynamic Form' },
    { url: '/mission', content: 'Mission' },
    { url: '/output-demo', content: 'Output Demo' },
    { url: '/resize', content: 'Resize' },
    { url: '/rxjs-trial', content: 'Rxjs Trial' },
    { url: '/search-demo', content: 'Search Component Demo' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
