import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioHomeListCondominoPage } from './usuario-home-list-condomino.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioHomeListCondominoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioHomeListCondominoPageRoutingModule {}
