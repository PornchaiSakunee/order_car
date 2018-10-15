import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderOutPage } from './order-out';

@NgModule({
  declarations: [
    OrderOutPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderOutPage),
  ],
})
export class OrderOutPageModule {}
