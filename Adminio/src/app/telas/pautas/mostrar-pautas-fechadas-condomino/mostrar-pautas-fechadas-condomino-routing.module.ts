import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarPautasFechadasCondominoPage } from './mostrar-pautas-fechadas-condomino.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarPautasFechadasCondominoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarPautasFechadasCondominoPageRoutingModule {}
