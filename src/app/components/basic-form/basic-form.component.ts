import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { filter } from 'rxjs/operators';

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
  }

  onSubmit(submitData) {
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
        .subscribe(value => console.table(value));
  }
}
