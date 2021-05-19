import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FarmComponent } from './core/modules/farm/farm.component';
import { PlantSettingComponent } from './core/modules/plant-setting/plant-setting.component';
import { SettingComponent } from './core/modules/setting/setting.component';
import { StatisticsComponent } from './core/modules/statistics/statistics.component';
import { TrussSettingComponent } from './core/modules/truss-setting/truss-setting.component';

const routes: Routes = [
  { path: '', component: FarmComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'settings', component: SettingComponent },
  { path: 'plant-setting', component: PlantSettingComponent },
  { path: 'truss-setting', component: TrussSettingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
