import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
  standalone: true,
  imports: [CommonModule, MatButtonModule, TranslateModule, RouterModule]
})
export class HeroSectionComponent {
  heroImage = 'assets/images/hero-bg.jpg';
  heroTitle = 'Expert Veterinary Care at Your Fingertips';
  heroSubtitle = 'Connect with qualified veterinarians for your pets and livestock';
  ctaButtons = [
    {
      text: 'BOOK_APPOINTMENT',
      route: '/appointments',
      color: 'primary'
    },
    {
      text: 'FIND_VET',
      route: '/experts',
      color: 'accent'
    }
  ];
} 