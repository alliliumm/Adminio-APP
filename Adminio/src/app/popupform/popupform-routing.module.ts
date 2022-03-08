import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopupformPage } from './popupform.page';

const routes: Routes = [
  {
    path: '',
    component: PopupformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopupformPageRoutingModule {}
