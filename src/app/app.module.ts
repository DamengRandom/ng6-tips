import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './route/app-routing/app-routing.module';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

import { AppComponent } from './app.component';
import { BasicFormComponent } from './components/basic-form/basic-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { BackButtonComponent } from './shared/back-button/back-button.component';
import { DynamicFormParentComponent } from './components/dynamic-form-parent/dynamic-form-parent.component';
import { ResizerComponent } from './components/resizer/resizer.component';
import { ResizerParentComponent } from './components/resizer-parent/resizer-parent.component';
import { BasicCustomComponent,
  CustomDirective,
  CustomDirectiveComponent,
  OnlineOfflineService,
  OnOffLineDirective,
  ThreeDirective,
  TrackDirective,
  TrackingService } from './components/custom-directive/custom-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicCustomComponent,
    BasicFormComponent,
    CustomDirectiveComponent,
    CustomDirective,
    DashboardComponent,
    DynamicFormComponent,
    BackButtonComponent,
    DynamicFormParentComponent,
    OnOffLineDirective,
    ResizerComponent,
    ResizerParentComponent,
    ThreeDirective,
    TrackDirective
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule
  ],
  providers: [OnlineOfflineService, TrackingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
