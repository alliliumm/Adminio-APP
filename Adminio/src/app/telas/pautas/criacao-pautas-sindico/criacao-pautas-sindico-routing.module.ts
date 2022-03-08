import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriacaoPautasSindicoPage } from './criacao-pautas-sindico.page';

const routes: Routes = [
  {
    path: '',
    component: CriacaoPautasSindicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriacaoPautasSindicoPageRoutingModule {}
