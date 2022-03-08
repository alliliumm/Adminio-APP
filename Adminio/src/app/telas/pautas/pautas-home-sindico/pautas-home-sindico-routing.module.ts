import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PautasHomeSindicoPage } from './pautas-home-sindico.page';

const routes: Routes = [
  {
    path: '',
    component: PautasHomeSindicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PautasHomeSindicoPageRoutingModule {}
