import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// components
import { BasicFormComponent } from '../../components/basic-form/basic-form.component';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { DynamicFormParentComponent } from '../../components/dynamic-form-parent/dynamic-form-parent.component';
import { ResizerParentComponent } from '../../components/resizer-parent/resizer-parent.component';
import { SearchDemoComponent } from '../../components/search-demo/search-demo.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'basic-form', component: BasicFormComponent },
  { path: 'dynamic-form', component: DynamicFormParentComponent },
  { path: 'resize', component: ResizerParentComponent },
  { path: 'search-demo', component: SearchDemoComponent }
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
