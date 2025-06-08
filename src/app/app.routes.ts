import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ExpertsComponent } from './pages/experts/experts.component';
import { ServicesComponent } from './pages/services/services.component';
import { FarmSupportComponent } from './pages/farm-support/farm-support.component';
import { EmergencyComponent } from './pages/emergency/emergency.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'experts', component: ExpertsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'farm-support', component: FarmSupportComponent },
  { path: 'emergency', component: EmergencyComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
