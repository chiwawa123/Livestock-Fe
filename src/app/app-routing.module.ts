import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Components/main/main.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { FarmerComponent } from './Components/farmer/farmer.component';
import { FarmComponent } from './Components/farm/farm.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'farmer',
        component: FarmerComponent,
      },
      {
        path: 'farm',
        component: FarmComponent,
      },
      {
        path: '',
        redirectTo: 'dashboard',pathMatch:'full'
      },
    ],
  },

  { path: 'login', component: LoginComponent },
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
