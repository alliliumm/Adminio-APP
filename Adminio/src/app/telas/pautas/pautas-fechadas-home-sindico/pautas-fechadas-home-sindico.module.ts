import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PautasFechadasHomeSindicoPageRoutingModule } from './pautas-fechadas-home-sindico-routing.module';

import { PautasFechadasHomeSindicoPage } from './pautas-fechadas-home-sindico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PautasFechadasHomeSindicoPageRoutingModule
  ],
  declarations: [PautasFechadasHomeSindicoPage]
})
export class PautasFechadasHomeSindicoPageModule {}
