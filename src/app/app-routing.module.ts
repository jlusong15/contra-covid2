import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContraCovidComponent } from './contra-covid/contra-covid.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contra-covid', component: ContraCovidComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
