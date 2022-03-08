import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriacaoPautasSindicoPageRoutingModule } from './criacao-pautas-sindico-routing.module';

import { CriacaoPautasSindicoPage } from './criacao-pautas-sindico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriacaoPautasSindicoPageRoutingModule
  ],
  declarations: [CriacaoPautasSindicoPage]
})
export class CriacaoPautasSindicoPageModule {}
