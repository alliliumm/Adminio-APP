import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeCondominoPage } from './home-condomino.page';

const routes: Routes = [
  {
    path: '',
    component: HomeCondominoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeCondominoPageRoutingModule {}
