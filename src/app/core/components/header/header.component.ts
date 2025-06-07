import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
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
    LanguageSelectorComponent
  ]
})
export class HeaderComponent implements OnInit {
  navigationItems = [
    { path: '/', label: 'HOME' },
    { path: '/about', label: 'ABOUT' },
    { path: '/experts', label: 'OUR_EXPERTS' },
    { path: '/services', label: 'SERVICES' },
    { path: '/farm-support', label: 'FARM_SUPPORT' },
    { path: '/emergency', label: 'EMERGENCY' },
    { path: '/store', label: 'STORE' },
    { path: '/blog', label: 'BLOG' },
    { path: '/contact', label: 'CONTACT' }
  ];

  constructor(public translate: TranslateService) {}

  ngOnInit(): void {}
} 