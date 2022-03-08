import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssembleiaadmPage } from './assembleiaadm.page';

const routes: Routes = [
  {
    path: '',
    component: AssembleiaadmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssembleiaadmPageRoutingModule {}
