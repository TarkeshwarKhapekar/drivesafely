import { Component, OnInit,OnDestroy } from '@angular/core';
import { FunctionService } from '../../_service/function.service';
@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.css']
})
export class FullComponent implements OnInit, OnDestroy {

  constructor(private _FunctionService:FunctionService) { }

  ngOnInit(): void {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('nav-md');
    body.classList.add('login-bg');
  }

  ngOnDestroy(): void {
  }

}
