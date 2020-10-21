import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChecksPage } from './checks.page';

const routes: Routes = [
  {
    path: '',
    component: ChecksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChecksPageRoutingModule {}
