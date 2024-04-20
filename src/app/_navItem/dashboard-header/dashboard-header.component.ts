import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css'],
})
export class DashboardHeaderComponent implements OnInit {
  roles: any;
  public selectedLang: any = 'en';
  public initialLang: any;
  constructor(private _router: Router, private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    this.selectedLang = localStorage.getItem('selectedLang');
    this.initialLang = this.selectedLang ? this.selectedLang : 'en';

    const value = localStorage.getItem('roles');
    this.roles = value;
    if (this.roles == 'SUBADMIN') {
      this.roles = this.selectedLang === 'en' ? 'Sub Admin' : 'サブ管理者';
    } else {
      this.roles =
        this.selectedLang === 'en' ? 'Super Admin' : 'スーパー管理者';
    }
  }

  logOut() {
    this.spinner.show();
    const selectedLang = localStorage.getItem('selectedLang'); // Get the selectedLang before clearing localStorage
    localStorage.clear();
    if (selectedLang) {
      localStorage.setItem('selectedLang', selectedLang); // Restore the selectedLang after clearing localStorage
    }
    setTimeout(() => {
      this.spinner.hide();
      this._router.navigate(['login']);
    }, 1000);
  }
}
