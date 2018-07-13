import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resizer-parent',
  templateUrl: './resizer-parent.component.html',
  styleUrls: ['./resizer-parent.component.scss']
})
export class ResizerParentComponent implements OnInit {
  sizerValue = 0;
  writterContent = 'start ..';

  constructor() { }

  ngOnInit() {
  }

}
