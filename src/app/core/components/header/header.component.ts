import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { LanguageSelectorComponent } from '../language-selector/language-selector.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    LanguageSelectorComponent
  ]
})
export class HeaderComponent implements OnInit {
  navigationItems = [
    { path: '/', label: 'HOME', icon: 'home' },
    { path: '/experts', label: 'OUR_EXPERTS', icon: 'people' },
    { path: '/services', label: 'SERVICES', icon: 'medical_services' },
    { path: '/farm-support', label: 'FARM_SUPPORT', icon: 'agriculture' },
    { path: '/emergency', label: 'EMERGENCY', icon: 'emergency' },
    { path: '/store', label: 'STORE', icon: 'shopping_cart' },
    { path: '/blog', label: 'BLOG', icon: 'article' },
    { path: '/contact', label: 'CONTACT', icon: 'contact_mail' }
  ];

  constructor(public translate: TranslateService) {}

  ngOnInit(): void {}
} 