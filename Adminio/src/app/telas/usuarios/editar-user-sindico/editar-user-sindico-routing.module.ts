import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarUserSindicoPage } from './editar-user-sindico.page';

const routes: Routes = [
  {
    path: '',
    component: EditarUserSindicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarUserSindicoPageRoutingModule {}
