import { AuthenticationService } from '../shared/authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {
    constructor( public authService : AuthenticationService, public router : Router) {}

    canActivate(route: ActivatedRouteSnapshot): boolean {
        if (!this.authService.isLoggedIn) {
            this.router.navigate(['login']);
            return false;
        }
        return true
    }
}