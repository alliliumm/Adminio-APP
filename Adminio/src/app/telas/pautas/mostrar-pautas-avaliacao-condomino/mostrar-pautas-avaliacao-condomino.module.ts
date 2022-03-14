import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarPautasAvaliacaoCondominoPageRoutingModule } from './mostrar-pautas-avaliacao-condomino-routing.module';

import { MostrarPautasAvaliacaoCondominoPage } from './mostrar-pautas-avaliacao-condomino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarPautasAvaliacaoCondominoPageRoutingModule
  ],
  declarations: [MostrarPautasAvaliacaoCondominoPage]
})
export class MostrarPautasAvaliacaoCondominoPageModule {}
