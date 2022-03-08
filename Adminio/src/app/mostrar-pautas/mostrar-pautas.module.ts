import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarPautasPageRoutingModule } from './mostrar-pautas-routing.module';

import { MostrarPautasPage } from './mostrar-pautas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarPautasPageRoutingModule
  ],
  declarations: [MostrarPautasPage]
})
export class MostrarPautasPageModule {}
