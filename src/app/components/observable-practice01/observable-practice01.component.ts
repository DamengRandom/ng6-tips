import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-practice01',
  templateUrl: './observable-practice01.component.html',
  styleUrls: ['./observable-practice01.component.scss']
})
export class ObservablePractice01Component implements OnInit {
  @ViewChild('generateButton') button;  // buttonDOM = document.querySelector('.generate-button');
  @ViewChild('passwordContent') p; // passwordDOM = document.querySelector('.generate-content');

  constructor(private el: ElementRef) { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this.randomPassword();
  }

  randomPassword() {
    Observable.fromEvent(this.button.nativeElement, 'click')
      .bufferCount(3) // it means we need to click 3 times and trigger the subscribe function to run properly
      .subscribe(_ => {
        this.p.nativeElement.innerHTML = Math.random().toString(36).slice(2);
      });
  } 
}
