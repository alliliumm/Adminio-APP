import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PautasFechadasHomeCondominoPage } from './pautas-fechadas-home-condomino.page';

const routes: Routes = [
  {
    path: '',
    component: PautasFechadasHomeCondominoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PautasFechadasHomeCondominoPageRoutingModule {}
