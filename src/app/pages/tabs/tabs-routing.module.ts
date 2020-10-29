import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';
import { AvatarPageModule } from '../avatar/avatar.module';

const routes: Routes = [
  {
      path: '',
      redirectTo: '/tabs/account',
      pathMatch: 'full'

  },
  {
    path: '',
    component: TabsPage,
    children: [

      {
        path:'account',
        loadChildren: () => import('../avatar/avatar.module').then(m => m.AvatarPageModule)
      },

      {
        path:'contacts',
        loadChildren: () => import('../lista/lista.module').then(m => m.ListaPageModule)
      },

      {
        path:'setting',
        loadChildren: () => import('../infinit/infinit.module').then(m => m.InfinitPageModule)
      },

    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
