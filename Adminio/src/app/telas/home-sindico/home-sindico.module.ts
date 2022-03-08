import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeSindicoPageRoutingModule } from './home-sindico-routing.module';

import { HomeSindicoPage } from './home-sindico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeSindicoPageRoutingModule
  ],
  declarations: [HomeSindicoPage]
})
export class HomeSindicoPageModule {}
