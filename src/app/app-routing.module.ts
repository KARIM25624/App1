import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {path:'', redirectTo: 'app-home', pathMatch:'full'},
  {path:'app-about',component:AboutComponent, title:'AboutPage'},
  {path:'app-home',component:HomeComponent},
  {path:'app-contact',component:ContactComponent, title:'ContactPage'},
  {path:'app-portfolio',component:PortfolioComponent, title:'portfolioPage'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled'} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
