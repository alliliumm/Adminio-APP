import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PautasAvaliacaoSindicoPage } from './pautas-avaliacao-sindico.page';

const routes: Routes = [
  {
    path: '',
    component: PautasAvaliacaoSindicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PautasAvaliacaoSindicoPageRoutingModule {}
