import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiscoverPage } from './discover.page';

const routes: Routes = [
  {
    path: '',
   component:DiscoverPage,
   children: [
     {
       path:':_id',
       loadChildren: ( ) => import('../offer-details/offer-details.module').then(m => m.OfferDetailsPageModule)
     },
     
   ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiscoverPageRoutingModule {}
