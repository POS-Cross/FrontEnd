import { Routes } from '@angular/router';

const Routing: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'offerRecommendation',
    loadChildren: () =>
      import('./offerRecommendation/offerRecommendation.module').then((m) => m.OfferRecommendationModule),
  },
  // {
  //   path: 'crafted/account',
  //   loadChildren: () =>
  //     import('../modules/account/account.module').then((m) => m.AccountModule),
  // },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'error/404',
  },
  {
      path: 'offerPerformance', // <= Page URL
       loadChildren: () =>
        import('./offer-Performance/offer-performance.module').then((m) => m.OfferPerformanceModule),

      // component: OfferPerformanceComponent, // <= Page component registration
  },
];

export { Routing };
