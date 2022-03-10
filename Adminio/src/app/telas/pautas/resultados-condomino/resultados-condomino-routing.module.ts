import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultadosCondominoPage } from './resultados-condomino.page';

const routes: Routes = [
  {
    path: '',
    component: ResultadosCondominoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultadosCondominoPageRoutingModule {}
