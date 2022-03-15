import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComunicadosHomeSindicoPage } from './comunicados-home-sindico.page';

const routes: Routes = [
  {
    path: '',
    component: ComunicadosHomeSindicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComunicadosHomeSindicoPageRoutingModule {}
