import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarComunicadosSindicoPage } from './mostrar-comunicados-sindico.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarComunicadosSindicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarComunicadosSindicoPageRoutingModule {}
