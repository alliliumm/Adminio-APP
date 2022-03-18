import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarUserSindicoPage } from './mostrar-user-sindico.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarUserSindicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarUserSindicoPageRoutingModule {}
