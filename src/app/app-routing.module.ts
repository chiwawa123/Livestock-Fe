import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Components/main/main.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { FarmerComponent } from './Components/farmer/farmer.component';
import { FarmComponent } from './Components/farm/farm.component';
import { AfterLoginService } from './Guards/after-login.service';
import { BeforeLoginService } from './Guards/before-login.service';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,canActivate:[AfterLoginService],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate:[AfterLoginService]
      },
      {
        path: 'farmer',
        component: FarmerComponent,canActivate:[AfterLoginService]
      },
      {
        path: 'farm',
        component: FarmComponent,canActivate:[AfterLoginService]
      },
      {
        path: '',
        redirectTo: 'login',pathMatch:'full'
      },
    ],
  },

  { path: 'login', component: LoginComponent},
  { path: 'register', component: SignupComponent },

  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'prefix',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
