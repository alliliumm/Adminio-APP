import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarPautasAvaliacaoSindicoPageRoutingModule } from './mostrar-pautas-avaliacao-sindico-routing.module';

import { MostrarPautasAvaliacaoSindicoPage } from './mostrar-pautas-avaliacao-sindico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarPautasAvaliacaoSindicoPageRoutingModule
  ],
  declarations: [MostrarPautasAvaliacaoSindicoPage]
})
export class MostrarPautasAvaliacaoSindicoPageModule {}
