import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EdicaoComunicadosSindicoPage } from './edicao-comunicados-sindico.page';

const routes: Routes = [
  {
    path: '',
    component: EdicaoComunicadosSindicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EdicaoComunicadosSindicoPageRoutingModule {}
