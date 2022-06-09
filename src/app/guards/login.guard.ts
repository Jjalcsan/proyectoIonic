import { AuthenticationService } from '../shared/authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class LoginGuard implements CanActivate {
    constructor( public authService : AuthenticationService, public router : Router) {}

    canActivate(): boolean {
        if (!this.authService.isLoggedIn) {
            this.router.navigate(['login']);
            return false;
        }
        return true
    }
}