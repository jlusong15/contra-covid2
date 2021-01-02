import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutComponent } from './pages/about/about.component';
import { ContactTracingComponent } from './pages/contact-tracing/contact-tracing.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';

import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { HealthStatusComponent } from './components/health-status/health-status.component';
import { PreviewDetailsComponent } from './components/preview-details/preview-details.component';
import { SuccessNotifComponent } from './components/success-notif/success-notif.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactTracingComponent,
    ContactDetailsComponent,
    HomeComponent,
    NavigationComponent,
    FooterComponent,
    HealthStatusComponent,
    PreviewDetailsComponent,
    SuccessNotifComponent,
    RegisterComponent,
    RegistrationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
