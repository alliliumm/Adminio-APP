import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarComunicadosFechadasSindicoPage } from './mostrar-comunicados-fechadas-sindico.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarComunicadosFechadasSindicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarComunicadosFechadasSindicoPageRoutingModule {}
