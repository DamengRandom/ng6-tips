import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit, AfterViewInit {
  name: String = '';
  password: String = '';
  genders = ['Male', 'Female'];

  @ViewChild('formRef') form; // controlling the form DOM //

  constructor() { }

  ngOnInit() {
    console.log('form data? ', this.form);
  }

  onSubmit(submitData) {
    console.log('Is form valid?', this.form.form.valid);
    console.log('Submitted: ', submitData);
  }

  ngAfterViewInit() {
    // this.form.valueChanges
    //   .subscribe(v => console.table(v));
    // this.form.statusChanges
    //   .subscribe(v => console.log(v));

    // Using RXJS Observable to combine and display an object result
    combineLatest(
      this.form.valueChanges,
      this.form.statusChanges, (status, value) => ({status, value}))
        // .pipe(filter(({ status }) => status === 'VALID'))
        // .pipe(
        //   map(value => console.table(value))
        // );
        .subscribe(value => console.table(value));
  }
}
