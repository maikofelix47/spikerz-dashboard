import { Component, input } from '@angular/core';
import { BadgeType } from './type';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.html',
  styleUrl: './badge.scss',
  imports: [TitleCasePipe],
})
export class BadgeComponent {
  badgeTypes = BadgeType;
  badgeType = input<string>(this.badgeTypes.Info);
  message = input<string>('', {});
}
