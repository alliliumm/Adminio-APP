import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdmhomePageRoutingModule } from './admhome-routing.module';

import { AdmhomePage } from './admhome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdmhomePageRoutingModule
  ],
  declarations: [AdmhomePage]
})
export class AdmhomePageModule {}
