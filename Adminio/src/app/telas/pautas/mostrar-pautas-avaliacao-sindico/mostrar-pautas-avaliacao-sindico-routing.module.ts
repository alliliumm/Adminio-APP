import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarPautasAvaliacaoSindicoPage } from './mostrar-pautas-avaliacao-sindico.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarPautasAvaliacaoSindicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarPautasAvaliacaoSindicoPageRoutingModule {}
