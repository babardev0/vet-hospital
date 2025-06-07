import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { LoadingComponent } from './core/components/loading/loading.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    HeaderComponent,
    FooterComponent,
    LoadingComponent
  ]
})
export class AppComponent {
  isLoading = true;

  constructor() {
    // Simulate loading time
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}
