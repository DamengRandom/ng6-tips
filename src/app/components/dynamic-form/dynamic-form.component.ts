import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})

export class DynamicFormComponent implements OnInit {
  form: FormGroup;
  numOfCodes = 6;
  @Input() formFieldObject;

  fields = [];

  constructor() { }

  ngOnInit() {
    const outputObject = {};
    for (const prop of Object.keys(this.formFieldObject)) { // Object.keys means extracting all the object hash keys
      outputObject[prop] = new FormControl(this.formFieldObject[prop].value, this.mapValidator(this.formFieldObject[prop].validators));
      this.fields.push({
        key: prop,
        label: this.formFieldObject[prop].label,
        options: this.formFieldObject[prop].options,
        value: this.formFieldObject[prop].value,
        type: this.formFieldObject[prop].type
      });
    }
    console.log(this.fields);
    this.form = new FormGroup(outputObject);
  }

  mapValidator(validators) {
    if (validators) {
      return Object.keys(validators).map(validatorType => {
        if (validatorType === 'required') {
          return Validators.required;
        } else if (validatorType === 'min') {
          return Validators.min(validators[validatorType]);
        }
      });
    }
  }
}
