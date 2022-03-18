import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarUserSindicoPageRoutingModule } from './mostrar-user-sindico-routing.module';

import { MostrarUserSindicoPage } from './mostrar-user-sindico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarUserSindicoPageRoutingModule
  ],
  declarations: [MostrarUserSindicoPage]
})
export class MostrarUserSindicoPageModule {}
