import { Component } from '@angular/core';

@Component({
  selector: 'app-lazy-parent',
  templateUrl: './lazy-parent.component.html',
  styleUrls: ['./lazy-parent.component.scss']
})
export class LazyParentComponent {
  textSize;
  receivedSize;
  major = 1;
  minor = 0;

  constructor() {
    this.getTextSize();
  }

  newMinor() {
    this.minor++;
  }

  newMajor() {
    this.major++;
    this.minor = 0;
  }

  getTextSize() {
    this.textSize = 16;
    console.log('this.textSize: ', this.textSize);
    return this.textSize;
  }

  // received update text size value
  receivedUpdatedSize(size) {
    this.receivedSize = size;
    console.log('new value is: ', size);
  }
}
