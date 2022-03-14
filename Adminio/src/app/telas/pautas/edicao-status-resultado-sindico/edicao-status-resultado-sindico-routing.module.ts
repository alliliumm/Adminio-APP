import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EdicaoStatusResultadoSindicoPage } from './edicao-status-resultado-sindico.page';

const routes: Routes = [
  {
    path: '',
    component: EdicaoStatusResultadoSindicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EdicaoStatusResultadoSindicoPageRoutingModule {}
