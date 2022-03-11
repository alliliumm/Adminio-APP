import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultadosCondominoPageRoutingModule } from './resultados-condomino-routing.module';

import { ResultadosCondominoPage } from './resultados-condomino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultadosCondominoPageRoutingModule
  ],
  declarations: [ResultadosCondominoPage]
})
export class ResultadosCondominoPageModule {}
