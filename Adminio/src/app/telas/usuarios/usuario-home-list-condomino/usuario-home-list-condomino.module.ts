import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioHomeListCondominoPageRoutingModule } from './usuario-home-list-condomino-routing.module';

import { UsuarioHomeListCondominoPage } from './usuario-home-list-condomino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioHomeListCondominoPageRoutingModule
  ],
  declarations: [UsuarioHomeListCondominoPage]
})
export class UsuarioHomeListCondominoPageModule {}
