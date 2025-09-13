import { Component, inject, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideNavComponent } from './ui/layout/side-nav/side-nav';
import { SideNavService } from './common/services/side-nav.service';
import { Subject, takeUntil, tap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideNavComponent, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  providers: [SideNavService],
})
export class App implements OnDestroy {
  protected title = 'spikerz';
  private destroy$ = new Subject<boolean>();
  private sideNavService = inject(SideNavService);
  collapseSideNav = false;
  collapseSideNav$ = this.sideNavService.collapseSideNav$.pipe(
    takeUntil(this.destroy$),
    tap((res) => {
      this.collapseSideNav = res;
    })
  );

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
