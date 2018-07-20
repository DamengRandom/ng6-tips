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
    { url: '/dynamic-form', content: 'Dynamic Form' },
    { url: '/resize', content: 'Resize' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
