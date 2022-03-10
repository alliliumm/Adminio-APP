import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultadosSindicoPageRoutingModule } from './resultados-sindico-routing.module';

import { ResultadosSindicoPage } from './resultados-sindico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultadosSindicoPageRoutingModule
  ],
  declarations: [ResultadosSindicoPage]
})
export class ResultadosSindicoPageModule {}
