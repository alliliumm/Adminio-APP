import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdicaoStatusSindicoPageRoutingModule } from './edicao-status-sindico-routing.module';

import { EdicaoStatusSindicoPage } from './edicao-status-sindico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EdicaoStatusSindicoPageRoutingModule
  ],
  declarations: [EdicaoStatusSindicoPage]
})
export class EdicaoStatusSindicoPageModule {}
