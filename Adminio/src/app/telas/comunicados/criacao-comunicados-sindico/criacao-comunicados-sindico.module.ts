import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriacaoComunicadosSindicoPageRoutingModule } from './criacao-comunicados-sindico-routing.module';

import { CriacaoComunicadosSindicoPage } from './criacao-comunicados-sindico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriacaoComunicadosSindicoPageRoutingModule
  ],
  declarations: [CriacaoComunicadosSindicoPage]
})
export class CriacaoComunicadosSindicoPageModule {}
