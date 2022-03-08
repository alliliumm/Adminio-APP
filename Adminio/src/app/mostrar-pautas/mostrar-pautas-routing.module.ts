import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarPautasPage } from './mostrar-pautas.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarPautasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarPautasPageRoutingModule {}
