import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactTracingComponent } from './pages/contact-tracing/contact-tracing.component';
import { AboutComponent } from './pages/about/about.component';


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contact-tracing', component: ContactTracingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
