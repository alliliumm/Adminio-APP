import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarComunicadosSindicoPageRoutingModule } from './mostrar-comunicados-sindico-routing.module';

import { MostrarComunicadosSindicoPage } from './mostrar-comunicados-sindico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarComunicadosSindicoPageRoutingModule
  ],
  declarations: [MostrarComunicadosSindicoPage]
})
export class MostrarComunicadosSindicoPageModule {}
