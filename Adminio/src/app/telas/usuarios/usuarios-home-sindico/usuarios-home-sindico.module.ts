import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuariosHomeSindicoPageRoutingModule } from './usuarios-home-sindico-routing.module';

import { UsuariosHomeSindicoPage } from './usuarios-home-sindico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuariosHomeSindicoPageRoutingModule
  ],
  declarations: [UsuariosHomeSindicoPage]
})
export class UsuariosHomeSindicoPageModule {}
