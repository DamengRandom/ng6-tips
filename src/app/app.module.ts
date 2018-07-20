import { AppRoutingModule } from './route/app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicFormComponent } from './components/basic-form/basic-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { BackButtonComponent } from './shared/back-button/back-button.component';
import { DynamicFormParentComponent } from './components/dynamic-form-parent/dynamic-form-parent.component';
import { ResizerComponent } from './components/resizer/resizer.component';
import { ResizerParentComponent } from './components/resizer-parent/resizer-parent.component';
import { SearchDemoComponent } from './components/search-demo/search-demo.component';
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
    SearchDemoComponent
    AnimationsDemoComponent,
    MissionControlComponent,
    AstronautComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot(),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    BackButtonComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
