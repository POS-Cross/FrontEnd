import { OfferPerformanceComponent } from './offer-performance.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WidgetsModule } from '../../_metronic/partials';
import { DashboardComponent } from '../dashboard/dashboard.component';

@NgModule({
  declarations: [OfferPerformanceComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: OfferPerformanceComponent,
      },
      {
        path: 'offer',
        component: DashboardComponent,
      },
    ]),
    WidgetsModule,
  ],
})
export class OfferPerformanceModule {}
