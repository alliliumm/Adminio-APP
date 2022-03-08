import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssembleiaadmPageRoutingModule } from './assembleiaadm-routing.module';

import { AssembleiaadmPage } from './assembleiaadm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssembleiaadmPageRoutingModule
  ],
  declarations: [AssembleiaadmPage]
})
export class AssembleiaadmPageModule {}
