import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoComponent } from './logo/logo.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [{path:"", component:LogoComponent}, {path:"home", component:HomeComponent}, {path:"about", component:AboutComponent}, {path:"contact", component:ContactComponent}, {path:"login", component:LoginComponent}, {path:"**", component: NotFoundComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
