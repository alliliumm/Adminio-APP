import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EdicaoStatusSindicoPage } from './edicao-status-sindico.page';

const routes: Routes = [
  {
    path: '',
    component: EdicaoStatusSindicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EdicaoStatusSindicoPageRoutingModule {}
