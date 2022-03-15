import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarComunicadosFechadasCondominoPageRoutingModule } from './mostrar-comunicados-fechadas-condomino-routing.module';

import { MostrarComunicadosFechadasCondominoPage } from './mostrar-comunicados-fechadas-condomino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarComunicadosFechadasCondominoPageRoutingModule
  ],
  declarations: [MostrarComunicadosFechadasCondominoPage]
})
export class MostrarComunicadosFechadasCondominoPageModule {}
