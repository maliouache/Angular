import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {LogInService} from './services/log-in.service';



@Injectable()
export class AuthenGuard implements CanActivate {

  constructor( private user: LogInService){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean | any {
    return this.user.getUserLoggedIn();
  }
}
