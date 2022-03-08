import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarPautasCondominoPageRoutingModule } from './mostrar-pautas-condomino-routing.module';

import { MostrarPautasCondominoPage } from './mostrar-pautas-condomino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarPautasCondominoPageRoutingModule
  ],
  declarations: [MostrarPautasCondominoPage]
})
export class MostrarPautasCondominoPageModule {}
