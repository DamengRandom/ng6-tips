import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vanilla-demo',
  templateUrl: './vanilla-demo.component.html',
  styleUrls: ['./vanilla-demo.component.scss']
})
export class VanillaDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.listener();
  }

  listener() {
    document.addEventListener('click', (event: any) => {
      // console.log('event: ', event);
      // only run if its an accordion toggle
      if (!event.target.classList.contains('accordion-toggle')) {
        return ;
      }

      // get content dom
      const content = document.querySelector(event.target.hash);

      if (!content) {
        return ;
      }

      event.preventDefault(); // prevent when trigger event, redirect to other route paths

      // console.log('content: ', content);
      // content.classList.toggle('active'); // simple toggle class to show or hide accordion dom

      const accordions = document.querySelectorAll('.accordion');

      for (let i = 0; i < accordions.length; i++) {
        accordions[i].classList.remove('active');
      }

      content.classList.add('active');
    }, false);
  }
}
