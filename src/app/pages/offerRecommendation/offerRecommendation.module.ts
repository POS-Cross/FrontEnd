


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DropdownMenusModule, WidgetsModule } from '../../_metronic/partials';
import { OfferRecommendation } from './offerRecommendation.component';

import { InlineSVGModule } from 'ng-inline-svg';

import {RecommondationCriteriaComponent} from "./forms/recommondationCriteria/recommondationCriteria.component"
import { ItemRecommedationComponent } from './forms/itemRecommedation/itemRecommedation.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OfferRecommendation,
    ItemRecommedationComponent,
    RecommondationCriteriaComponent,
  ],
  imports: [
    CommonModule,
    InlineSVGModule,
    DropdownMenusModule,
    WidgetsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: OfferRecommendation,
      },
      {
        path: 'items',
        component: ItemRecommedationComponent
      },
    ]),
  ],
})
export class OfferRecommendationModule {}
