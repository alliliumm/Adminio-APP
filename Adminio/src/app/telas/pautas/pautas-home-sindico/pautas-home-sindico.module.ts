import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PautasHomeSindicoPageRoutingModule } from './pautas-home-sindico-routing.module';

import { PautasHomeSindicoPage } from './pautas-home-sindico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PautasHomeSindicoPageRoutingModule
  ],
  declarations: [PautasHomeSindicoPage]
})
export class PautasHomeSindicoPageModule {}
