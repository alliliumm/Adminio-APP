import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarPautasSindicoPage } from './mostrar-pautas-sindico.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarPautasSindicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarPautasSindicoPageRoutingModule {}
