import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './components/header/header.component';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    HeaderComponent,
    LanguageSelectorComponent
  ],
  exports: [
    HeaderComponent,
    LanguageSelectorComponent
  ]
})
export class CoreModule { } 