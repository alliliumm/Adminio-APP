import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PautasFechadasHomeCondominoPageRoutingModule } from './pautas-fechadas-home-condomino-routing.module';

import { PautasFechadasHomeCondominoPage } from './pautas-fechadas-home-condomino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PautasFechadasHomeCondominoPageRoutingModule
  ],
  declarations: [PautasFechadasHomeCondominoPage]
})
export class PautasFechadasHomeCondominoPageModule {}
