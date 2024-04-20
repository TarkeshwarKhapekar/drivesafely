import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { ROUTES } from './metadata';
import { RouteInfo } from './sidebar-meta';
import { Router, ActivatedRoute } from '@angular/router';
import { UserAuthService } from 'src/app/_service/user-auth.service';

@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.css'],
})
export class DashboardSidebarComponent implements OnInit {
  showMenu = '';
  showSubMenu = '';
  public sidebarnavItems: RouteInfo[] = [];
  public role = localStorage.getItem('role');
  public toggle = false;
  @Output() toggleClassEvent = new EventEmitter<void>();
  public selectedLang: any = 'en';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _userAuthService: UserAuthService
  ) {}

  ngOnInit(): void {
    this.selectedLang = localStorage.getItem('selectedLang');

    this.sidebarnavItems = ROUTES.filter((sidebarnavItem) => sidebarnavItem);
  }

  toggleClass() {
    this.toggleClassEvent.emit();
  }
}
