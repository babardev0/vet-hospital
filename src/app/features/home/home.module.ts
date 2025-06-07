import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './home.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';
import { ServicesOverviewComponent } from './components/services-overview/services-overview.component';
import { FeaturedExpertsComponent } from './components/featured-experts/featured-experts.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { BlogPreviewComponent } from './components/blog-preview/blog-preview.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeroSectionComponent,
    WhyChooseUsComponent,
    ServicesOverviewComponent,
    FeaturedExpertsComponent,
    TestimonialsComponent,
    BlogPreviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ]
})
export class HomeModule { } 