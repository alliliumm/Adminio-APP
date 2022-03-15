import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroCondPageRoutingModule } from './cadastro-cond-routing.module';

import { CadastroCondPage } from './cadastro-cond.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroCondPageRoutingModule
  ],
  declarations: [CadastroCondPage]
})
export class CadastroCondPageModule {}
