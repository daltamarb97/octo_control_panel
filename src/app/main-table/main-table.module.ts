import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainTableRoutingModule } from './main-table-routing.module';
import { OrdersComponent } from './orders/orders.component';


@NgModule({
  declarations: [OrdersComponent],
  imports: [
    CommonModule,
    MainTableRoutingModule
  ]
})
export class MainTableModule { }
