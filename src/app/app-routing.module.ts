import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { FarmComponent } from './modules/farm/farm.component';
import { LoginComponent } from './modules/login/login.component';
import { SettingComponent } from './modules/setting/setting.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', pathMatch: 'full', redirectTo: 'farm' },
  {
    path: 'farm',
    component: FarmComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'statistics',
    loadChildren: () => import('./modules/statistics/statistics.module').then(mod => mod.StatisticsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'settings',
    component: SettingComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user-setting',
    loadChildren: () => import('./modules/user-setting/user-setting.module').then(mod => mod.UserSettingModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'plant-setting',
    loadChildren: () => import('./modules/plant-setting/plant-setting.module').then(mod => mod.PlantSettingModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'truss-setting',
    loadChildren: () => import('./modules/truss-setting/truss-setting.module').then(mod => mod.TrussSettingModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
