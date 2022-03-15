import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriacaoComunicadosSindicoPage } from './criacao-comunicados-sindico.page';

const routes: Routes = [
  {
    path: '',
    component: CriacaoComunicadosSindicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriacaoComunicadosSindicoPageRoutingModule {}
