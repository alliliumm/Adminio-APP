import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PautasHomeCondominoPageRoutingModule } from './pautas-home-condomino-routing.module';

import { PautasHomeCondominoPage } from './pautas-home-condomino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PautasHomeCondominoPageRoutingModule
  ],
  declarations: [PautasHomeCondominoPage]
})
export class PautasHomeCondominoPageModule {}
