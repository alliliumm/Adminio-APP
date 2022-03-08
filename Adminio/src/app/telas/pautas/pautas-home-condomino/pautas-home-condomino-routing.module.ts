import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PautasHomeCondominoPage } from './pautas-home-condomino.page';

const routes: Routes = [
  {
    path: '',
    component: PautasHomeCondominoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PautasHomeCondominoPageRoutingModule {}
