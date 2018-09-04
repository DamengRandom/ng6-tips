import { AppRoutingModule } from './route/app-routing/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgxMasonryModule } from 'ngx-masonry';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AnimationsDemoComponent } from './components/animations-demo/animations-demo.component';
import { AppComponent } from './app.component';
import { AstronautComponent } from './components/astronaut/astronaut.component';
import { BasicFormComponent } from './components/basic-form/basic-form.component';
import { ChildComponent } from './components/output-demo/child/child.component';
import { CustomPipeDemoComponent } from './components/custom-pipe-demo/custom-pipe-demo.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { BackButtonComponent } from './shared/back-button/back-button.component';
import { DynamicFormParentComponent } from './components/dynamic-form-parent/dynamic-form-parent.component';
import { MissionControlComponent } from './components/mission-control/mission-control.component';
import { ObservableSampleOneComponent } from './components/observable-sample-one/observable-sample-one.component';
import { ObservableSampleTwoComponent } from './components/observable-sample-two/observable-sample-two.component';
import { ObservableHttpSampleComponent } from './components/observable-http-sample/observable-http-sample.component';
import { OutputDemoComponent } from './components/output-demo/output-demo.component';
import { ParentComponent } from './components/output-demo/parent/parent.component';
import { ResizerComponent } from './components/resizer/resizer.component';
import { ResizerParentComponent } from './components/resizer-parent/resizer-parent.component';
import { RxjsTrialsComponent } from './components/rxjs-trials/rxjs-trials.component';
import { SearchDemoComponent } from './components/search-demo/search-demo.component';

// pipe
import { FileSizePipe } from './shared/pipes/file-size.pipe';
import { VanillaDemoComponent } from './components/vanilla-demo/vanilla-demo.component';
import { ChangeDetectionOption1Component } from './components/change-detection-option1/change-detection-option1.component';
import { CounterChildComponent } from './components/change-detection-option1/counter-child/counter-child.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AnimationsDemoComponent,
    AppComponent,
    AstronautComponent,
    BasicFormComponent,
    ChildComponent,
    CustomPipeDemoComponent,
    DashboardComponent,
    DynamicFormComponent,
    BackButtonComponent,
    DynamicFormParentComponent,
    FileSizePipe,
    MissionControlComponent,
    ObservableSampleOneComponent,
    ObservableSampleTwoComponent,
    ObservableHttpSampleComponent,
    OutputDemoComponent,
    ParentComponent,
    ResizerComponent,
    ResizerParentComponent,
    RxjsTrialsComponent,
    SearchDemoComponent,
    VanillaDemoComponent,
    ChangeDetectionOption1Component,
    CounterChildComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot(),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxMasonryModule,
    InfiniteScrollModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  exports: [
    BackButtonComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
