import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComunicadosFechadasHomeSindicoPageRoutingModule } from './comunicados-fechadas-home-sindico-routing.module';

import { ComunicadosFechadasHomeSindicoPage } from './comunicados-fechadas-home-sindico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComunicadosFechadasHomeSindicoPageRoutingModule
  ],
  declarations: [ComunicadosFechadasHomeSindicoPage]
})
export class ComunicadosFechadasHomeSindicoPageModule {}
