import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PautasFechadasHomeSindicoPage } from './pautas-fechadas-home-sindico.page';

const routes: Routes = [
  {
    path: '',
    component: PautasFechadasHomeSindicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PautasFechadasHomeSindicoPageRoutingModule {}
