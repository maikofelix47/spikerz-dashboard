import { Component, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SideNavItem } from './side-nav-item/side-nav-item';
import { sideNavConfig } from './side-nav-config';
import { SideNavCongig } from './type';
import { CommonModule } from '@angular/common';
import { SideNavService } from '../../../common/services/side-nav.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.html',
  styleUrl: './side-nav.scss',
  imports: [MatIconModule, SideNavItem, CommonModule],
})
export class SideNavComponent {
  sideNavItems = signal<SideNavCongig>(sideNavConfig);
  collapseSideNav = false;
  private sideNavService = inject(SideNavService);

  toggleSideNavCollapse() {
    this.collapseSideNav = !this.collapseSideNav;
    this.sideNavService.collapseSideNavigation(this.collapseSideNav);
  }
}
