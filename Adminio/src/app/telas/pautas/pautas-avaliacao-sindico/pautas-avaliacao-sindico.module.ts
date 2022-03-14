import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PautasAvaliacaoSindicoPageRoutingModule } from './pautas-avaliacao-sindico-routing.module';

import { PautasAvaliacaoSindicoPage } from './pautas-avaliacao-sindico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PautasAvaliacaoSindicoPageRoutingModule
  ],
  declarations: [PautasAvaliacaoSindicoPage]
})
export class PautasAvaliacaoSindicoPageModule {}
