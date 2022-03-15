import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComunicadosHomeCondominoPage } from './comunicados-home-condomino.page';

const routes: Routes = [
  {
    path: '',
    component: ComunicadosHomeCondominoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComunicadosHomeCondominoPageRoutingModule {}
