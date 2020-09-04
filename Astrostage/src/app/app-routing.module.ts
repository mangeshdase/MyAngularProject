import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HoroscopeComponent } from './horoscope/horoscope.component';
import { AstrologyComponent } from './astrology/astrology.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const routes: Routes = [
  { path : 'signup', component : SignupComponent },
  { path : 'login', component :  LoginComponent },
  { path : 'home', component : HomeComponent, children :[
    { path : '', component : HoroscopeComponent },
    { path :'aboutus', component : AboutusComponent },
    { path :'contactus', component : ContactusComponent },
    { path :'horoscope', component : HoroscopeComponent },
    { path :'astrology', component : AstrologyComponent},
  ],
},
{ path : '', redirectTo: '/signup', pathMatch:'full' },
{ path : '**', component : PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
