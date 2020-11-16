import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContraCovidComponent } from './contra-covid/contra-covid.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Home' } },
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  { path: 'about', component: AboutComponent, data: { title: 'About' } },
  { path: 'contract-tracing', component: ContraCovidComponent, data: { title: 'Contact Tracing' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
