import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// components
import { AnimationsDemoComponent } from '../../components/animations-demo/animations-demo.component';
import { BasicFormComponent } from '../../components/basic-form/basic-form.component';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { DynamicFormParentComponent } from '../../components/dynamic-form-parent/dynamic-form-parent.component';
import { MissionControlComponent } from '../../components/mission-control/mission-control.component';
import { ResizerParentComponent } from '../../components/resizer-parent/resizer-parent.component';
import { SearchDemoComponent } from '../../components/search-demo/search-demo.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'animations', component: AnimationsDemoComponent },
  { path: 'basic-form', component: BasicFormComponent },
  { path: 'customers-demo', loadChildren: '../../../app/modules/customers-lazy-load/customers-lazy-load.module#CustomersLazyLoadModule' },
  { path: 'dynamic-form', component: DynamicFormParentComponent },
  { path: 'search-demo', component: SearchDemoComponent },
  { path: 'mission', component: MissionControlComponent },
  { path: 'resize', component: ResizerParentComponent }
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
