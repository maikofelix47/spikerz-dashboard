import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.html',
  styleUrl: './detail-card.scss',
  imports: [MatIconModule, NgOptimizedImage],
})
export class DetailCardComponent {
  showMoreDetails = signal<boolean>(false);
  toggleMoreDetails() {
    console.log('toggle view...');
    this.showMoreDetails.set(!this.showMoreDetails());
  }
}
