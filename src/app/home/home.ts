import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { DescriptionComponent } from '../ui/description/description';
import { ProfileComponent } from '../ui/profile/profile';
import { DetailCardComponent } from '../ui/detail-card/detail-card';
import { AssetCard } from '../ui/asset-card/asset-card';
import { RiskCardComponent } from '../ui/risk-card/risk-card';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
  imports: [
    MatDividerModule,
    DescriptionComponent,
    ProfileComponent,
    DetailCardComponent,
    AssetCard,
    RiskCardComponent,
  ],
})
export class HomeComponent {}
