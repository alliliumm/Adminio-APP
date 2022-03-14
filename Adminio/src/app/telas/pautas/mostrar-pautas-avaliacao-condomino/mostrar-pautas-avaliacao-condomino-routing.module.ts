import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarPautasAvaliacaoCondominoPage } from './mostrar-pautas-avaliacao-condomino.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarPautasAvaliacaoCondominoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarPautasAvaliacaoCondominoPageRoutingModule {}
