import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PautasAvaliacaoCondominoPageRoutingModule } from './pautas-avaliacao-condomino-routing.module';

import { PautasAvaliacaoCondominoPage } from './pautas-avaliacao-condomino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PautasAvaliacaoCondominoPageRoutingModule
  ],
  declarations: [PautasAvaliacaoCondominoPage]
})
export class PautasAvaliacaoCondominoPageModule {}
