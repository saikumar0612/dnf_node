// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserGuard implements CanActivate {
//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     return true;
//   }
  
// }


import {Injectable} from '@angular/core';
import {UserService} from './user.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class UserGuard implements CanActivate {

    constructor(
        private _router: Router,
        private _userService: UserService
    ) {

    }

    canActivate() {
        let identity = this._userService.getIdentity();
        
        if (identity && (identity.role == 'ROLE_USER' || identity.role == 'ROLE_ADMIN')) {
            return true;
        } else {
            this._router.navigate(['/login']);
            return false;
        }
    }
}
