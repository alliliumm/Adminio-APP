import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EdicaoPautasSindicoPage } from './edicao-pautas-sindico.page';

const routes: Routes = [
  {
    path: '',
    component: EdicaoPautasSindicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EdicaoPautasSindicoPageRoutingModule {}
