import { Component } from '@angular/core';

@Component({
  selector: 'app-lazy-parent',
  templateUrl: './lazy-parent.component.html',
  styleUrls: ['./lazy-parent.component.scss']
})
export class LazyParentComponent {
  major = 1;
  minor = 0;

  newMinor() {
    this.minor++;
  }

  newMajor() {
    this.major++;
    this.minor = 0;
  }
}
