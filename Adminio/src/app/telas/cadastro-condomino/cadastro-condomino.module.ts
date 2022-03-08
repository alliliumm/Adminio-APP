import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroCondominoPageRoutingModule } from './cadastro-condomino-routing.module';

import { CadastroCondominoPage } from './cadastro-condomino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroCondominoPageRoutingModule
  ],
  declarations: [CadastroCondominoPage]
})
export class CadastroCondominoPageModule {}
