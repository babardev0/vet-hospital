import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LoadingComponent } from './core/components/loading/loading.component';
import { LayoutComponent } from './core/components/layout/layout.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    LoadingComponent,
    LayoutComponent
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
