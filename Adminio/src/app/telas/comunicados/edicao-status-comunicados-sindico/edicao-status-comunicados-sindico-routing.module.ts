import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EdicaoStatusComunicadosSindicoPage } from './edicao-status-comunicados-sindico.page';

const routes: Routes = [
  {
    path: '',
    component: EdicaoStatusComunicadosSindicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EdicaoStatusComunicadosSindicoPageRoutingModule {}
