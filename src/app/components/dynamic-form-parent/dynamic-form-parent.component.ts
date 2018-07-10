import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-form-parent',
  templateUrl: './dynamic-form-parent.component.html',
  styleUrls: ['./dynamic-form-parent.component.scss']
})
export class DynamicFormParentComponent implements OnInit {
  formFieldObject = {
    firstName: {
      label: 'firstName',
      value: 'Chou',
      type: 'text'
    },
    lastname: {
      label: 'lastName',
      value: 'Dameng',
      type: 'text'
    },
    age: {
      label: 'age',
      value: 29,
      type: 'number'
    }
  };
  constructor() { }

  ngOnInit() {
  }

}
