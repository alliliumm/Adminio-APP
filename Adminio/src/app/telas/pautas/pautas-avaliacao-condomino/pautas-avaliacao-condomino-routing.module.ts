import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PautasAvaliacaoCondominoPage } from './pautas-avaliacao-condomino.page';

const routes: Routes = [
  {
    path: '',
    component: PautasAvaliacaoCondominoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PautasAvaliacaoCondominoPageRoutingModule {}
