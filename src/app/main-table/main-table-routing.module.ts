import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';

const TableRoutes: Routes = [
  {
    path: '',
    component: OrdersComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(TableRoutes)],
  exports: [RouterModule]
})
export class MainTableRoutingModule { }
