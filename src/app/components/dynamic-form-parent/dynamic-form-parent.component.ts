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
      type: 'text',
      validators: {
        required: true
      }
    },
    lastname: {
      label: 'lastName',
      value: 'Dameng',
      type: 'text',
      validators: {
        required: true
      }
    },
    age: {
      label: 'age',
      value: 29,
      type: 'number',
      validators: {
        min: 18
      }
    },
    gender: {
      label: 'gender',
      value: 'F',
      type: 'radio',
      options: [
        { label: 'Male', value: 'M' },
        { label: 'Female', value: 'F' },
        { label: 'Unsure', value: 'N' },
      ]
    },
    city: {
      label: 'city',
      value: 'SYD',
      type: 'select',
      options: [
        { label: 'Select one please', value: '' },
        { label: 'Sydeny', value: 'SYD' },
        { label: 'JiNan', value: 'JAN' }
      ]
    }
  };
  constructor() { }

  ngOnInit() {
  }

}
