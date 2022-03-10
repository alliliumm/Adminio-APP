import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarPautasFechadasCondominoPageRoutingModule } from './mostrar-pautas-fechadas-condomino-routing.module';

import { MostrarPautasFechadasCondominoPage } from './mostrar-pautas-fechadas-condomino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarPautasFechadasCondominoPageRoutingModule
  ],
  declarations: [MostrarPautasFechadasCondominoPage]
})
export class MostrarPautasFechadasCondominoPageModule {}
