import { Component, OnInit } from '@angular/core';
import { FunctionService } from '../../_service/function.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public roles: any;
  public hide: boolean = true;

  constructor(private _FunctionService: FunctionService) {}

  ngOnInit(): void {
    this._FunctionService.loadScript('nprogress.js');
    this._FunctionService.loadScript('custom.min.js');
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('login-bg');
    body.classList.add('nav-md');

    const value = localStorage.getItem('roles');
    this.roles = value;
    if (this.roles == 'SUBADMIN') {
      this.roles = 'Sub Admin';
    } else {
      this.roles = 'Super Admin';
    }
  }

  toggleClassEventHandler(event: any) {
    this.hide = !this.hide;
  }
}
