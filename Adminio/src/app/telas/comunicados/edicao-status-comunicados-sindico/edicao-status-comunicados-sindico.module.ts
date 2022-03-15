import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdicaoStatusComunicadosSindicoPageRoutingModule } from './edicao-status-comunicados-sindico-routing.module';

import { EdicaoStatusComunicadosSindicoPage } from './edicao-status-comunicados-sindico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EdicaoStatusComunicadosSindicoPageRoutingModule
  ],
  declarations: [EdicaoStatusComunicadosSindicoPage]
})
export class EdicaoStatusComunicadosSindicoPageModule {}
