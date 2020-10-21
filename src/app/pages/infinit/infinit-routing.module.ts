import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfinitPage } from './infinit.page';

const routes: Routes = [
  {
    path: '',
    component: InfinitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfinitPageRoutingModule {}
