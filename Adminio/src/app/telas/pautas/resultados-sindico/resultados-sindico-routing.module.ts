import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultadosSindicoPage } from './resultados-sindico.page';

const routes: Routes = [
  {
    path: '',
    component: ResultadosSindicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultadosSindicoPageRoutingModule {}
