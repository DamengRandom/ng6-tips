import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../route/app-routing/app-routing.module';
import { CommonModule } from '@angular/common';
import { BackButtonComponent } from './back-button/back-button.component';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    BackButtonComponent
  ],
  exports: [
    BackButtonComponent
  ],
  declarations: [BackButtonComponent]
})

export class SharedModule { }
