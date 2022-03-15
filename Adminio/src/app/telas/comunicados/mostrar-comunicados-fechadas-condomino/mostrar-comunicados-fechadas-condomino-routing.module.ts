import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarComunicadosFechadasCondominoPage } from './mostrar-comunicados-fechadas-condomino.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarComunicadosFechadasCondominoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarComunicadosFechadasCondominoPageRoutingModule {}
