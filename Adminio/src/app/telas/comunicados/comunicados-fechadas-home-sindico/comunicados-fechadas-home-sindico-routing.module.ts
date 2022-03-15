import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComunicadosFechadasHomeSindicoPage } from './comunicados-fechadas-home-sindico.page';

const routes: Routes = [
  {
    path: '',
    component: ComunicadosFechadasHomeSindicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComunicadosFechadasHomeSindicoPageRoutingModule {}
