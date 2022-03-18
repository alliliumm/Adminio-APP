import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarUserCondominoPage } from './editar-user-condomino.page';

const routes: Routes = [
  {
    path: '',
    component: EditarUserCondominoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarUserCondominoPageRoutingModule {}
