import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuariosHomeSindicoPage } from './usuarios-home-sindico.page';

const routes: Routes = [
  {
    path: '',
    component: UsuariosHomeSindicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosHomeSindicoPageRoutingModule {}
