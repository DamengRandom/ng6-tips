import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// components
import { AnimationsDemoComponent } from '../../components/animations-demo/animations-demo.component';
import { BasicFormComponent } from '../../components/basic-form/basic-form.component';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { DynamicFormParentComponent } from '../../components/dynamic-form-parent/dynamic-form-parent.component';
import { ResizerParentComponent } from '../../components/resizer-parent/resizer-parent.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'animations', component: AnimationsDemoComponent },
  { path: 'basic-form', component: BasicFormComponent },
  { path: 'dynamic-form', component: DynamicFormParentComponent },
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
