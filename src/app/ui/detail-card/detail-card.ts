import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.html',
  styleUrl: './detail-card.scss',
  imports: [MatIconModule],
})
export class DetailCardComponent {
  showMoreDetails = signal<boolean>(false);
  toggleMoreDetails() {
    console.log('toggle view...');
    this.showMoreDetails.set(!this.showMoreDetails());
  }
}
