import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersLazyLoadRoutingModule } from './customers-lazy-load-routing.module';
import { CustomersListComponent } from './customers-list/customers-list.component';
// import { BackButtonComponent } from '../../shared/back-button/back-button.component';

@NgModule({
  imports: [
    // BackButtonComponent,
    CommonModule,
    CustomersLazyLoadRoutingModule
  ],
  exports: [
    // BackButtonComponent,
  ],
  declarations: [CustomersListComponent]
})
export class CustomersLazyLoadModule { }
