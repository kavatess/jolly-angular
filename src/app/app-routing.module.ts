import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FarmPageComponent } from './pages/farm-page/farm-page.component';
import { SettingPageComponent } from './pages/setting-page/setting-page.component';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component';

const routes: Routes = [
  { path: '', component: FarmPageComponent },
  { path: 'statistics', component: StatisticPageComponent },
  { path: 'settings', component: SettingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
