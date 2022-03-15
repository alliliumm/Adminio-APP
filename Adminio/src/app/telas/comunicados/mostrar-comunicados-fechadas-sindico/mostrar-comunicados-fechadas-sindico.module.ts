import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarComunicadosFechadasSindicoPageRoutingModule } from './mostrar-comunicados-fechadas-sindico-routing.module';

import { MostrarComunicadosFechadasSindicoPage } from './mostrar-comunicados-fechadas-sindico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarComunicadosFechadasSindicoPageRoutingModule
  ],
  declarations: [MostrarComunicadosFechadasSindicoPage]
})
export class MostrarComunicadosFechadasSindicoPageModule {}
