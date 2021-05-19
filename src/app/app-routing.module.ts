import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './blocks/guards/auth.guard';
import { FarmComponent } from './core/modules/farm/farm.component';
import { LoginComponent } from './core/modules/login/login.component';
import { PlantSettingComponent } from './core/modules/plant-setting/plant-setting.component';
import { SettingComponent } from './core/modules/setting/setting.component';
import { StatisticsComponent } from './core/modules/statistics/statistics.component';
import { TrussSettingComponent } from './core/modules/truss-setting/truss-setting.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', pathMatch: 'full', redirectTo: 'farm' },
  { path: 'farm', component: FarmComponent, canActivate: [AuthGuard] },
  { path: 'statistics', component: StatisticsComponent, canActivate: [AuthGuard] },
  { path: 'settings', component: SettingComponent, canActivate: [AuthGuard] },
  { path: 'plant-setting', component: PlantSettingComponent, canActivate: [AuthGuard] },
  { path: 'truss-setting', component: TrussSettingComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
