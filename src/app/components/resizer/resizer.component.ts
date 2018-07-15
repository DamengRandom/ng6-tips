import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-resizer',
  templateUrl: './resizer.component.html',
  styleUrls: ['./resizer.component.scss']
})
export class ResizerComponent implements OnInit {
  writterContent: String = '';

  @Output() writterChange = new EventEmitter();

  @Input()
  get writter() {
    return this.writterContent;
  }
  set writter(writterVal) {
    this.writterContent = writterVal;
    this.writterChange.emit(this.writterContent);
  }

  ngOnInit() {
  }

  startWriting() {
    // this.writter += this.writter;
    const text = document.getElementById('text').innerHTML;
    this.writter = text;
    console.log('updates? ', this.writter);
  }
}
