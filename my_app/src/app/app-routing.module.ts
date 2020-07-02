import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import {
  PreloadAllModules,
  RouterModule,
  Routes,
  CanLoad,
} from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((m) => m.AuthPageModule),
  },
  {
    path: 'places',
    loadChildren: () =>
      import('./places/places.module').then((m) => m.PlacesPageModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'booking',
    loadChildren: () =>
      import('./booking/booking.module').then((m) => m.BookingPageModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'index',
    loadChildren: () =>
      import('./starting-page/starting-page.module').then(
        (m) => m.StartingPagePageModule
      ),
  },
  {
    path: 'test',
    loadChildren: () =>
      import('./test/test/test.module').then((m) => m.TestPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
