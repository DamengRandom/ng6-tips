import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-progress-bar-demo',
  templateUrl: './progress-bar-demo.component.html',
  styleUrls: ['./progress-bar-demo.component.scss']
})
export class ProgressBarDemoComponent implements OnInit, OnDestroy {

  constructor(@Inject(DOCUMENT) public documentObj: any) {
    console.log('whats el? ', documentObj);
  }

  ngOnInit() {
    window.addEventListener('scroll', this.barProgress, true);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.barProgress, true);
  }

  barProgress() {
    const winScroll = this.documentObj.body.scrollTop || this.documentObj.documentElement.scrollTop;
    const height = this.documentObj.documentElement.scrollHeight - this.documentObj.documentElement.clientHeight;
    const scrolled = (winScroll / height ) * 100;
    document.getElementById('progressBar').style.width = scrolled + '%';
  }
}
