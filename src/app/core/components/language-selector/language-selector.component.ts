import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ]
})
export class LanguageSelectorComponent implements OnInit {
  currentLang: string;
  languages = [
    { code: 'en', name: 'English' },
    { code: 'ur', name: 'اردو' }
  ];

  constructor(private translate: TranslateService) {
    this.currentLang = this.translate.currentLang || 'en';
  }

  ngOnInit(): void {}

  changeLanguage(langCode: string): void {
    this.currentLang = langCode;
    this.translate.use(langCode);
  }

  getCurrentLanguageName(): string {
    return this.languages.find(lang => lang.code === this.currentLang)?.name || 'English';
  }
} 