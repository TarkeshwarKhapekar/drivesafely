import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from '../_service/user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _router:Router,public _userAuthService:UserAuthService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(sessionStorage.getItem("isLoggin")=="true"){
        
        if (this._userAuthService.IsLoggedIn()) {
        return true;
      }
      else {
      
        this._router.navigate(['/login']);
        return false;
      }
    
    } else {
        // alert("Logout 2");
        this._router.navigate(['/login']);
        return false;
      }
  }
  
}
