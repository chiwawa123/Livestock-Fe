import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/layouts/header/header.component';
import { FooterComponent } from './Components/layouts/footer/footer.component';
import { SidebarComponent } from './Components/layouts/sidebar/sidebar.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { MainComponent } from './Components/main/main.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { NavbarComponent } from './Components/layouts/navbar/navbar.component';
import { RegisterComponent } from './Components/register/register.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { FarmerComponent } from './Components/farmer/farmer.component';
import { FarmComponent } from './Components/farm/farm.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LoginComponent,
    SignupComponent,
    MainComponent,
    DashboardComponent,
    NavbarComponent,
    RegisterComponent,
    NotFoundComponent,
    FarmerComponent,
    FarmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
