import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComunicadosFechadasHomeCondominoPageRoutingModule } from './comunicados-fechadas-home-condomino-routing.module';

import { ComunicadosFechadasHomeCondominoPage } from './comunicados-fechadas-home-condomino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComunicadosFechadasHomeCondominoPageRoutingModule
  ],
  declarations: [ComunicadosFechadasHomeCondominoPage]
})
export class ComunicadosFechadasHomeCondominoPageModule {}
