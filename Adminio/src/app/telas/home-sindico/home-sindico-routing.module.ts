import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeSindicoPage } from './home-sindico.page';

const routes: Routes = [
  {
    path: '',
    component: HomeSindicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeSindicoPageRoutingModule {}
