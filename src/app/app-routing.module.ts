import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './users/register/register.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './users/login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HotelComponent } from './hotels/hotel/hotel.component';


const routes: Routes = [
  {path:'' , redirectTo:'/home',pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
  { path:'hotel' , component:HotelComponent},
  { path:'home' , component:HomeComponent},
  { path:'signup' , component:RegisterComponent},
  { path:'signin' , component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }