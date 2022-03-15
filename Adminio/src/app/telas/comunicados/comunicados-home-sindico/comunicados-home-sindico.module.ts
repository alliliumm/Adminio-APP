import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComunicadosHomeSindicoPageRoutingModule } from './comunicados-home-sindico-routing.module';

import { ComunicadosHomeSindicoPage } from './comunicados-home-sindico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComunicadosHomeSindicoPageRoutingModule
  ],
  declarations: [ComunicadosHomeSindicoPage]
})
export class ComunicadosHomeSindicoPageModule {}
