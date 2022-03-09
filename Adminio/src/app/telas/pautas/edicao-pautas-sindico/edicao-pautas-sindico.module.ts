import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdicaoPautasSindicoPageRoutingModule } from './edicao-pautas-sindico-routing.module';

import { EdicaoPautasSindicoPage } from './edicao-pautas-sindico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EdicaoPautasSindicoPageRoutingModule
  ],
  declarations: [EdicaoPautasSindicoPage]
})
export class EdicaoPautasSindicoPageModule {}
