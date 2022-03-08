import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroSinPageRoutingModule } from './cadastro-sin-routing.module';

import { CadastroSinPage } from './cadastro-sin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroSinPageRoutingModule
  ],
  declarations: [CadastroSinPage]
})
export class CadastroSinPageModule {}
