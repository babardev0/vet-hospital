import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  languages = [
    { code: 'en', name: 'English' },
    { code: 'ur', name: 'اردو' }
  ];

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

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {}

  changeLanguage(langCode: string): void {
    this.translate.use(langCode);
  }
} 