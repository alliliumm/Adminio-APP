import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdicaoStatusResultadoSindicoPageRoutingModule } from './edicao-status-resultado-sindico-routing.module';

import { EdicaoStatusResultadoSindicoPage } from './edicao-status-resultado-sindico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EdicaoStatusResultadoSindicoPageRoutingModule
  ],
  declarations: [EdicaoStatusResultadoSindicoPage]
})
export class EdicaoStatusResultadoSindicoPageModule {}
