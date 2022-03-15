import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComunicadosHomeCondominoPageRoutingModule } from './comunicados-home-condomino-routing.module';

import { ComunicadosHomeCondominoPage } from './comunicados-home-condomino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComunicadosHomeCondominoPageRoutingModule
  ],
  declarations: [ComunicadosHomeCondominoPage]
})
export class ComunicadosHomeCondominoPageModule {}
