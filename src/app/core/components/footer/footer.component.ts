import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ]
})
export class FooterComponent {
  socialLinks = [
    { icon: 'facebook', url: 'https://facebook.com' },
    { icon: 'twitter', url: 'https://twitter.com' },
    { icon: 'instagram', url: 'https://instagram.com' },
    { icon: 'linkedin', url: 'https://linkedin.com' }
  ];

  quickLinks = [
    { path: '/about', label: 'ABOUT_US' },
    { path: '/services', label: 'SERVICES' },
    { path: '/experts', label: 'OUR_EXPERTS' },
    { path: '/contact', label: 'CONTACT' },
    { path: '/blog', label: 'BLOG' },
    { path: '/privacy', label: 'PRIVACY_POLICY' },
    { path: '/terms', label: 'TERMS_CONDITIONS' }
  ];

  contactInfo = {
    address: '123 Veterinary Street, Karachi, Pakistan',
    phone: '+92 300 1234567',
    email: 'info@vetmarketplace.com',
    whatsapp: '+92 300 1234567'
  };

  get currentYear(): number {
    return new Date().getFullYear();
  }
} 