import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarPautasCondominoPage } from './mostrar-pautas-condomino.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarPautasCondominoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarPautasCondominoPageRoutingModule {}
