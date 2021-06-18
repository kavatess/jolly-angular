import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './statistics.component';
import { SelectModule } from 'src/app/shared/components/select/select.module';
import { PageLayoutModule } from 'src/app/shared/components/page-layout/page-layout.module';
import { RouterModule, Routes } from '@angular/router';
import { NavBarModule } from 'src/app/shared/components/nav-bar/nav-bar.module';
import { FormModule } from 'src/app/shared/components/form/form.module';
import { ChartModule } from 'src/app/shared/components/chart/chart.module';

const STATISTICS_ROUTE: Routes = [
  {
    path: '',
    component: StatisticsComponent
  }
]

@NgModule({
  declarations: [
    StatisticsComponent,
  ],
  imports: [
    CommonModule,
    ChartModule,
    PageLayoutModule,
    NavBarModule,
    FormModule,
    SelectModule,
    RouterModule.forChild(STATISTICS_ROUTE)
  ]
})
export class StatisticsModule { }
