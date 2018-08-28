import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadingDemoRoutingModule } from './lazy-loading-demo-routing.module';
import { LazyParentComponent } from './lazy-parent/lazy-parent.component';
import { LazyChildComponent } from './lazy-child/lazy-child.component';

@NgModule({
  imports: [
    CommonModule,
    LazyLoadingDemoRoutingModule
  ],
  declarations: [LazyParentComponent, LazyChildComponent]
})
export class LazyLoadingDemoModule { }
