import { Component,  Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

export interface Code {
  code: string;
}

@Component({
  selector: 'app-dynamic-inputs',
  templateUrl: './dynamic-inputs.component.html',
  styleUrls: ['./dynamic-inputs.component.scss']
})

export class DynamicInputsComponent implements OnInit {
  codes: Code[];
  public codeForm: FormGroup;
  @Input() numOfCodes;
  formattedCode: string;

  constructor(private _fb: FormBuilder) {}

  ngOnInit() {
    this.codeForm = this._fb.group({
      codes: this._fb.array([
        this.initCode()
      ])
    });
    this.getCode(this.numOfCodes);
  }

  initCode() { // initial code value
    return this._fb.group({
        code: ['', Validators.required]
    });
  }

  getCode(numOfCodes) {
    const control = <FormArray>this.codeForm.controls['codes'];
    const blocks = numOfCodes - control.length;
    for (let i = 1; i <= blocks; i++) {
      control.push(this.initCode());
    }
  }

  submitData() {
    const codeArray = this.codeForm.value.codes;
    const formattedCode = codeArray.map(function (a) {
      console.log(a.code);
      return a.code;
    });
    this.formattedCode = formattedCode.join('');
    console.log('what the final data? ', this.formattedCode);
  }
}
