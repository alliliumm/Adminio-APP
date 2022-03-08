import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroCondominoPage } from './cadastro-condomino.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroCondominoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroCondominoPageRoutingModule {}
