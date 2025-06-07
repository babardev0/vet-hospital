import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-why-choose-us',
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.scss'],
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, TranslateModule]
})
export class WhyChooseUsComponent {
  features = [
    {
      icon: 'verified_user',
      title: 'EXPERT_VETS',
      description: 'EXPERT_VETS_DESC'
    },
    {
      icon: 'schedule',
      title: '24_7_SERVICE',
      description: '24_7_SERVICE_DESC'
    },
    {
      icon: 'local_hospital',
      title: 'COMPREHENSIVE_CARE',
      description: 'COMPREHENSIVE_CARE_DESC'
    },
    {
      icon: 'payments',
      title: 'AFFORDABLE_PRICES',
      description: 'AFFORDABLE_PRICES_DESC'
    },
    {
      icon: 'location_on',
      title: 'NATIONWIDE_COVERAGE',
      description: 'NATIONWIDE_COVERAGE_DESC'
    },
    {
      icon: 'support_agent',
      title: 'DEDICATED_SUPPORT',
      description: 'DEDICATED_SUPPORT_DESC'
    }
  ];
} 