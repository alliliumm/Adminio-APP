import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroSinPage } from './cadastro-sin.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroSinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroSinPageRoutingModule {}
