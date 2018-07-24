import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  agreed = 0;
  disagreed = 0;
  voters = ['Qv1', 'Qv2', 'Qv3', 'Qv4'];

  constructor() { }

  ngOnInit() {
  }

  onVoted(agree: boolean) {
    agree ? this.agreed++ : this.disagreed++;
  }

  // input process: [attrName]="value"
  // then inside child component, we can call this input by property binding @Input() attrName: DataType;
}
