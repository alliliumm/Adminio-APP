import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarComunicadosCondominoPage } from './mostrar-comunicados-condomino.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarComunicadosCondominoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarComunicadosCondominoPageRoutingModule {}
