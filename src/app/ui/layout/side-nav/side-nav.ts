import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SideNavItem } from './side-nav-item/side-nav-item';
import { sideNavConfig } from './side-nav-config';
import { SideNavCongig } from './type';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.html',
  styleUrl: './side-nav.scss',
  imports: [MatIconModule, SideNavItem],
})
export class SideNavComponent {
  sideNavItems = signal<SideNavCongig>(sideNavConfig);
}
