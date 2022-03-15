import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarComunicadosCondominoPageRoutingModule } from './mostrar-comunicados-condomino-routing.module';

import { MostrarComunicadosCondominoPage } from './mostrar-comunicados-condomino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarComunicadosCondominoPageRoutingModule
  ],
  declarations: [MostrarComunicadosCondominoPage]
})
export class MostrarComunicadosCondominoPageModule {}
