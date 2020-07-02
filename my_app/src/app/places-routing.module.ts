import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacesPage } from './places.page';

const routes: Routes = [
  {
    path: '',
    component: PlacesPage,
    children: [
      {
        path: '',
        redirectTo: 'offers',
        pathMatch: 'full',
      },
      {
        path: 'offers',
        loadChildren: () =>
          import('./offers/offers.module').then((m) => m.OffersPageModule),
      },
      {
        path: 'discover',
        loadChildren: () =>
          import('./discover/discover.module').then(
            (m) => m.DiscoverPageModule
          ),
      },
      {
        path: 'about/:_id',
        loadChildren: () =>
          import('./about/about.module').then((m) => m.AboutPageModule),
      },
      {
        path: 'about',
        redirectTo: 'places',
        pathMatch: 'full',
      },
      {
        path: 'coda',
        loadChildren: () =>
          import('./coda/coda.module').then((m) => m.CodaPageModule),
      },
      {
        path: 'new-offers',
        loadChildren: () =>
          import('./new-offers/new-offers.module').then(
            (m) => m.NewOffersPageModule
          ),
      },
      {
        path: 'account',
        loadChildren: () =>
          import('./account/account.module').then((m) => m.AccountPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesPageRoutingModule {}
