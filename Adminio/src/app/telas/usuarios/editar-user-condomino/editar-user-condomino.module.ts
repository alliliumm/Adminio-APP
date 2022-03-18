import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarUserCondominoPageRoutingModule } from './editar-user-condomino-routing.module';

import { EditarUserCondominoPage } from './editar-user-condomino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarUserCondominoPageRoutingModule
  ],
  declarations: [EditarUserCondominoPage]
})
export class EditarUserCondominoPageModule {}
