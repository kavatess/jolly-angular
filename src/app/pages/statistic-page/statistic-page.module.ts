import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticPageComponent } from './statistic-page.component';



@NgModule({
  declarations: [StatisticPageComponent],
  imports: [
    CommonModule
  ],
  exports: [StatisticPageComponent]
})
export class StatisticPageModule { }
