import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    TranslateModule
  ]
})
export class HomeComponent {
  // SEO metadata
  readonly metaDescription = 'Expert veterinary care for your beloved pets. Providing comprehensive veterinary services with compassion, expertise, and state-of-the-art technology since 1995.';
  readonly metaKeywords = 'veterinary care, pet health, animal hospital, veterinary services, pet wellness, emergency vet care, veterinary clinic';
} 