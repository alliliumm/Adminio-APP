import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssembleiaPageRoutingModule } from './assembleia-routing.module';

import { AssembleiaPage } from './assembleia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssembleiaPageRoutingModule
  ],
  declarations: [AssembleiaPage]
})
export class AssembleiaPageModule {}
