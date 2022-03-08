import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultpagePage } from './resultpage.page';

const routes: Routes = [
  {
    path: '',
    component: ResultpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultpagePageRoutingModule {}
