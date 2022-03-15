import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComunicadosFechadasHomeCondominoPage } from './comunicados-fechadas-home-condomino.page';

const routes: Routes = [
  {
    path: '',
    component: ComunicadosFechadasHomeCondominoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComunicadosFechadasHomeCondominoPageRoutingModule {}
