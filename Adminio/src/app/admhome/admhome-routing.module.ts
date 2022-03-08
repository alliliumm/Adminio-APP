import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmhomePage } from './admhome.page';

const routes: Routes = [
  {
    path: '',
    component: AdmhomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmhomePageRoutingModule {}
