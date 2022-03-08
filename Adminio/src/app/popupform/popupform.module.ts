import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopupformPageRoutingModule } from './popupform-routing.module';

import { PopupformPage } from './popupform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopupformPageRoutingModule
  ],
  declarations: [PopupformPage]
})
export class PopupformPageModule {}
