import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// components
import { BasicFormComponent } from '../../components/basic-form/basic-form.component';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { DynamicFormComponent } from '../../components/dynamic-form/dynamic-form.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'basic-form', component: BasicFormComponent },
  { path: 'dynamic-form', component: DynamicFormComponent }
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
