import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarUserSindicoPageRoutingModule } from './editar-user-sindico-routing.module';

import { EditarUserSindicoPage } from './editar-user-sindico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarUserSindicoPageRoutingModule
  ],
  declarations: [EditarUserSindicoPage]
})
export class EditarUserSindicoPageModule {}
