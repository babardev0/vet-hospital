import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

// Import translations
import enTranslations from '../../../assets/i18n/en.json';
import urTranslations from '../../../assets/i18n/ur.json';

@Injectable({
  providedIn: 'root'
})
export class TranslationsService {
  constructor(private translate: TranslateService) {
    // Add translations
    this.translate.setTranslation('en', enTranslations);
    this.translate.setTranslation('ur', urTranslations);
    
    // Set default language
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
} 