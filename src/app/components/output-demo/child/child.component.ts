import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  didVote = false;
  @Input() name: string;
  @Output() voted = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  voter(agree: boolean) {
    this.voted.emit(agree);
    this.didVote = true;
  }
  // output process:
  // in child component:
  // @Output() attrName = new EventEmitter<DataType>();
  // attrName.emit(theValue) // theValue means the data which need to be passed to parent component
  // in parent component template:
  // (attrName)="recivedValuePassedFunc($event)"
}
