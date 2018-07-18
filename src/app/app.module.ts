import { AppRoutingModule } from './route/app-routing/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicFormComponent } from './components/basic-form/basic-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { BackButtonComponent } from './shared/back-button/back-button.component';
import { DynamicFormParentComponent } from './components/dynamic-form-parent/dynamic-form-parent.component';
import { ResizerComponent } from './components/resizer/resizer.component';
import { ResizerParentComponent } from './components/resizer-parent/resizer-parent.component';
import { AnimationsDemoComponent } from './components/animations-demo/animations-demo.component';
import { MissionControlComponent } from './components/mission-control/mission-control.component';
import { AstronautComponent } from './components/astronaut/astronaut.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicFormComponent,
    DashboardComponent,
    DynamicFormComponent,
    BackButtonComponent,
    DynamicFormParentComponent,
    ResizerComponent,
    ResizerParentComponent,
    AnimationsDemoComponent,
    MissionControlComponent,
    AstronautComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
