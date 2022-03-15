import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroCondPage } from './cadastro-cond.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroCondPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroCondPageRoutingModule {}
