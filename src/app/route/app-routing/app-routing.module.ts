import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// components
import { AnimationsDemoComponent } from '../../components/animations-demo/animations-demo.component';
import { BasicFormComponent } from '../../components/basic-form/basic-form.component';
import { ChangeDetectionOption1Component } from '../../components/change-detection-option1/change-detection-option1.component';
import { CustomPipeDemoComponent } from '../../components/custom-pipe-demo/custom-pipe-demo.component';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { DynamicFormParentComponent } from '../../components/dynamic-form-parent/dynamic-form-parent.component';
import { DynamicInputsComponent } from '../../components/dynamic-inputs/dynamic-inputs.component';
import { InputBindingDemoOneComponent } from '../../components/input-binding-demo-one/input-binding-demo-one.component';
import { MissionControlComponent } from '../../components/mission-control/mission-control.component';
import { ObservableHttpSampleComponent } from '../../components/observable-http-sample/observable-http-sample.component';
import { ObservableSampleOneComponent } from '../../components/observable-sample-one/observable-sample-one.component';
import { ObservableSampleTwoComponent } from '../../components/observable-sample-two/observable-sample-two.component';
import { OutputDemoComponent } from '../../components/output-demo/output-demo.component';
import { ProgressBarDemoComponent } from '../../components/progress-bar-demo/progress-bar-demo.component';
import { ResizerParentComponent } from '../../components/resizer-parent/resizer-parent.component';
import { RxjsTrialsComponent } from '../../components/rxjs-trials/rxjs-trials.component';
import { SearchDemoComponent } from '../../components/search-demo/search-demo.component';
import { VanillaDemoComponent } from '../../components/vanilla-demo/vanilla-demo.component';
import { ObservablePractice01Component } from '../../components/observable-practice01/observable-practice01.component';
import { ObservablePracticeTwoComponent } from '../../components/observable-practice-two/observable-practice-two.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'animations', component: AnimationsDemoComponent },
  { path: 'basic-form', component: BasicFormComponent },
  { path: 'change-detection-option1', component: ChangeDetectionOption1Component },
  { path: 'input-bind-demo', component: InputBindingDemoOneComponent },
  { path: 'customers-demo', loadChildren: '../../../app/modules/customers-lazy-load/customers-lazy-load.module#CustomersLazyLoadModule' },
  { path: 'lazy-loading-demo', loadChildren: '../../../app/modules/lazy-loading-demo/lazy-loading-demo.module#LazyLoadingDemoModule' },
  { path: 'custom-pipe-demo', component: CustomPipeDemoComponent },
  { path: 'dynamic-form', component: DynamicFormParentComponent },
  { path: 'dynamic-inputs', component: DynamicInputsComponent },
  { path: 'search-demo', component: SearchDemoComponent },
  { path: 'mission', component: MissionControlComponent },
  { path: 'obsr-http-sample', component: ObservableHttpSampleComponent },
  { path: 'obsr-sample', component: ObservableSampleOneComponent },
  { path: 'obsr-sample-two', component: ObservableSampleTwoComponent },
  { path: 'obs-prac01', component: ObservablePractice01Component },
  { path: 'obs-prac02', component: ObservablePracticeTwoComponent },
  { path: 'output-demo', component: OutputDemoComponent },
  { path: 'progress-bar-demo', component: ProgressBarDemoComponent },
  { path: 'resize', component: ResizerParentComponent },
  { path: 'rxjs-trial', component: RxjsTrialsComponent },
  { path: 'vanilla-demo', component: VanillaDemoComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class AppRoutingModule { }
