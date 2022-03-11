import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PautasAvalicacaoSindicoPageRoutingModule } from './pautas-avalicacao-sindico-routing.module';

import { PautasAvalicacaoSindicoPage } from './pautas-avalicacao-sindico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PautasAvalicacaoSindicoPageRoutingModule
  ],
  declarations: [PautasAvalicacaoSindicoPage]
})
export class PautasAvalicacaoSindicoPageModule {}
