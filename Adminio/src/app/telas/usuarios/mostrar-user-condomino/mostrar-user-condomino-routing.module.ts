import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarUserCondominoPage } from './mostrar-user-condomino.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarUserCondominoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarUserCondominoPageRoutingModule {}
