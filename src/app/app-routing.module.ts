import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactTracingComponent } from './pages/contact-tracing/contact-tracing.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Home' } },
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  { path: 'about', component: AboutComponent, data: { title: 'About' } },
  { path: 'contract-tracing', component: ContactTracingComponent, data: { title: 'Contact Tracing' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
