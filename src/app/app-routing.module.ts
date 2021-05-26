import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './blocks/guards/auth.guard';
import { FarmComponent } from './core/modules/farm/farm.component';
import { LoginComponent } from './core/modules/login/login.component';
import { SettingComponent } from './core/modules/setting/setting.component';
import { StatisticsComponent } from './core/modules/statistics/statistics.component';

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
    component: StatisticsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'settings',
    component: SettingComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'user-setting',
    loadChildren: () => import('./core/modules/user-setting/user-setting.module').then(mod => mod.UserSettingModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'plant-setting',
    loadChildren: () => import('./core/modules/plant-setting/plant-setting.module').then(mod => mod.PlantSettingModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'truss-setting',
    loadChildren: () => import('./core/modules/truss-setting/truss-setting.module').then(mod => mod.TrussSettingModule),
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
