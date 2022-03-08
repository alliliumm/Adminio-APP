import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultpagePageRoutingModule } from './resultpage-routing.module';

import { ResultpagePage } from './resultpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultpagePageRoutingModule
  ],
  declarations: [ResultpagePage]
})
export class ResultpagePageModule {}
