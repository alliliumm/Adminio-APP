import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdicaoComunicadosSindicoPageRoutingModule } from './edicao-comunicados-sindico-routing.module';

import { EdicaoComunicadosSindicoPage } from './edicao-comunicados-sindico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EdicaoComunicadosSindicoPageRoutingModule
  ],
  declarations: [EdicaoComunicadosSindicoPage]
})
export class EdicaoComunicadosSindicoPageModule {}
