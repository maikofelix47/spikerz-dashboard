import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SideNavService {
  private collapseSideNavSub = new BehaviorSubject<boolean>(false);
  collapseSideNav$ = this.collapseSideNavSub.asObservable();

  collapseSideNavigation(collapse: boolean) {
    this.collapseSideNavSub.next(collapse);
  }
}
