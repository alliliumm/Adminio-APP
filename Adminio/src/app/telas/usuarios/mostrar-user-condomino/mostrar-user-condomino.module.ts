import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarUserCondominoPageRoutingModule } from './mostrar-user-condomino-routing.module';

import { MostrarUserCondominoPage } from './mostrar-user-condomino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarUserCondominoPageRoutingModule
  ],
  declarations: [MostrarUserCondominoPage]
})
export class MostrarUserCondominoPageModule {}
