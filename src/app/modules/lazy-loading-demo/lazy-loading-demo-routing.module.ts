import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { LazyParentComponent } from './lazy-parent/lazy-parent.component';

const routes: Routes = [
  { path: '', component: LazyParentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LazyLoadingDemoRoutingModule { }
