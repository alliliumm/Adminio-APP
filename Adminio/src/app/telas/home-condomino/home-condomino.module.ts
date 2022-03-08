import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeCondominoPageRoutingModule } from './home-condomino-routing.module';

import { HomeCondominoPage } from './home-condomino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeCondominoPageRoutingModule
  ],
  declarations: [HomeCondominoPage]
})
export class HomeCondominoPageModule {}
