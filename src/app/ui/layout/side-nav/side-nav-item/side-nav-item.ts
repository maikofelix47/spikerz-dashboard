import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-side-nav-item',
  templateUrl: './side-nav-item.html',
  styleUrl: './side-nav-item.scss',
  imports: [MatIconModule],
})
export class SideNavItem {
  @Input({ required: true }) icon = '';
  @Input({ required: true }) title = '';
}
