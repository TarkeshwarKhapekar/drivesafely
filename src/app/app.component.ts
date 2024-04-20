import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import { NgxSpinnerService } from 'ngx-spinner';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'OxvirtualCare';
  idleState = 'NOT_STARTED';
  countdown?: number = 0;
  lastPing?: Date = new Date();

  savedLang = localStorage.getItem('selectedLang');
  initialLang = this.savedLang ? this.savedLang : 'en';

  constructor(
    private idle: Idle,
    keepalive: Keepalive,
    cd: ChangeDetectorRef,
    private spinner: NgxSpinnerService,
    private _router: Router,
    public translate: TranslateService
  ) {
    idle.setIdle(5);
    idle.setTimeout(20);
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    idle.onIdleStart.subscribe(() => {
      this.idleState = 'IDLE';
    });
    idle.onIdleEnd.subscribe(() => {
      this.idleState = 'NOT_IDLE';
      this.countdown = 0;
      cd.detectChanges();
    });
    idle.onTimeout.subscribe(() => {
      this.idleState = 'TIMED_OUT';
      this.logOut();
    });
    idle.onTimeoutWarning.subscribe((seconds) => (this.countdown = seconds));

    keepalive.interval(15);
    keepalive.onPing.subscribe(() => (this.lastPing = new Date()));

    translate.addLangs(['en', 'ja']);
    translate.use(this.initialLang);
  }

  reset() {
    this.idle.watch();
    this.idleState = 'NOT_IDLE';
    this.countdown = 0;
    this.lastPing = new Date();
  }

  ngOnInit(): void {
    this.reset();

    if (localStorage.getItem('selectedLang')) {
    } else {
      localStorage.setItem('selectedLang', this.initialLang);
    }
  }

  logOut() {
    if (localStorage.getItem('autoLogout') == 'true') {
      this.spinner.show();
      localStorage.clear();
      setTimeout(() => {
        this.spinner.hide();
        this._router.navigate(['login']);
      }, 1000);
    }
  }

  changeLang(st1: any) {
    this.translate.use(st1);
    const selectedLang = st1 === 'en' ? 'en' : 'ja';
    localStorage.setItem('selectedLang', selectedLang);
    console.log(selectedLang, 'selectedLangselectedLang');
  }

  showLng() {
    return this._router.url.includes('login');
  }

  getSelectedLang() {
    return this.initialLang;
  }
}
