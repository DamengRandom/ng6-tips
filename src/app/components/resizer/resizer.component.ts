import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-resizer',
  templateUrl: './resizer.component.html',
  styleUrls: ['./resizer.component.scss']
})
export class ResizerComponent implements OnInit {
  // @Input() size: number | string;
  // @Output() sizeChange = new EventEmitter<number>();

  // constructor() { }

  writterContent = '';
  @Output() writterChange = new EventEmitter();

  ngOnInit() {
  }

  // sizerValue = 0;

  // get sizer() {
  //   return this.sizerValue;
  // }

  // @Output() sizerChange = new EventEmitter();

  // @Input()

  // set sizer(val) {
  //   this.sizerValue = val;
  //   this.sizerChange.emit(this.sizerValue);
  // }

  // increment() {
  //   this.sizer++;
  // }

  // decrement() {
  //   this.sizer--;
  // }



  // dec() {
  //   this.resize(-1);
  // }

  // inc() {
  //   this.resize(1);
  // }

  // resize(delta: number) {
  //   this.size = +this.size + delta;
  //   this.sizeChange.emit(this.size);
  // }

  @Input()
  get writter() {
    return this.writterContent;
  }
  set writter(writterVal) {
    this.writterContent = writterVal;
    this.writterChange.emit(this.writterContent);
  }

  startWriting() {
    // this.writter += this.writter;
    const text = document.getElementById('text').innerHTML;
    this.writter = text;
    console.log('updates? ', this.writter);
  }
}
