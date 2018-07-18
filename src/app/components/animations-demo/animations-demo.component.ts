import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-animations-demo',
  templateUrl: './animations-demo.component.html',
  styleUrls: ['./animations-demo.component.scss'],
  animations: [
    trigger('signal', [
      state('void', style({
        'background-color': 'yellow',
        'transform': 'translateY(-100%)'
      })),
      state('go', style({
        'background-color': 'green',
        'height': '100px'
      })),
      state('stop', style({
        'background-color': 'red',
        'height': '120px'
      })),
      transition ('void => *', animate('1500ms', keyframes([
        style({'transform': 'scale(0)'}),
        style({'transform': 'scale(.5)'}),
        style({'transform': 'scale(1)'}),
      ]))),
      transition ('* => void', animate('1500ms', keyframes([
        style({'transform': 'scale(1)'}),
        style({'transform': 'scale(.5)'}),
        style({'transform': 'scale(0)'}),
      ]))),
      transition ('* <=> *', animate('500ms 300ms ease-out'))
    ])
  ]
})
export class AnimationsDemoComponent implements OnInit {
  public signal;
  public isToggled = false;
  constructor() { }

  ngOnInit() {
  }

  onGoClick() {
    return this.signal = 'go';
  }

  onStopClick() {
    return this.signal = 'stop';
  }

  toggleShowHide() {
    return this.isToggled = !this.isToggled;
  }
}
