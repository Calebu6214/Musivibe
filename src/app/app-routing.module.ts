import { AboutpageComponent } from './components/aboutpage/aboutpage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProfileComponent } from './components/profile/profile.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegisterComponent },
  {path: 'about' , component:AboutpageComponent},
  {path: 'contact' , component:ContactComponent},
  {path: 'profile' , component:ProfileComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
