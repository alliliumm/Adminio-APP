import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarPautasSindicoPageRoutingModule } from './mostrar-pautas-sindico-routing.module';

import { MostrarPautasSindicoPage } from './mostrar-pautas-sindico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarPautasSindicoPageRoutingModule
  ],
  declarations: [MostrarPautasSindicoPage]
})
export class MostrarPautasSindicoPageModule {}
