import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssembleiaPage } from './assembleia.page';

const routes: Routes = [
  {
    path: '',
    component: AssembleiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssembleiaPageRoutingModule {}
