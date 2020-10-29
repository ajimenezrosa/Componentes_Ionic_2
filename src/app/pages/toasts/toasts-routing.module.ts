import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToastsPage } from './toasts.page';

const routes: Routes = [
  {
    path: '',
    component: ToastsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToastsPageRoutingModule {}
