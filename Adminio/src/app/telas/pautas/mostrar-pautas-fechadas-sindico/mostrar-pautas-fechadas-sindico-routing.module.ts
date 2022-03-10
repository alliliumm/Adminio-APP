import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarPautasFechadasSindicoPage } from './mostrar-pautas-fechadas-sindico.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarPautasFechadasSindicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarPautasFechadasSindicoPageRoutingModule {}
