import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.scss'],
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, RouterModule, TranslateModule]
})
export class ServicesSectionComponent {
  services = [
    {
      icon: 'pets',
      title: 'PET_CARE',
      description: 'PET_CARE_DESC',
      route: '/services/pet-care'
    },
    {
      icon: 'agriculture',
      title: 'LIVESTOCK_CARE',
      description: 'LIVESTOCK_CARE_DESC',
      route: '/services/livestock'
    },
    {
      icon: 'shopping_cart',
      title: 'VET_PRODUCTS',
      description: 'VET_PRODUCTS_DESC',
      route: '/products'
    },
    {
      icon: 'event',
      title: 'ONLINE_CONSULTATION',
      description: 'ONLINE_CONSULTATION_DESC',
      route: '/consultation'
    },
    {
      icon: 'local_shipping',
      title: 'HOME_VISITS',
      description: 'HOME_VISITS_DESC',
      route: '/services/home-visits'
    },
    {
      icon: 'school',
      title: 'TRAINING',
      description: 'TRAINING_DESC',
      route: '/services/training'
    }
  ];
} 