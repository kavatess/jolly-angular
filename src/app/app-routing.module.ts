import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FarmComponent } from './core/modules/farm/farm.component';
import { SettingComponent } from './core/modules/setting/setting.component';
import { StatisticsComponent } from './core/modules/statistics/statistics.component';

const routes: Routes = [
  { path: '', component: FarmComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'settings', component: SettingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
