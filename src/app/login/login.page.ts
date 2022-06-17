import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../services/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public authService: AuthenticationService, public router: Router) { }

  ngOnInit() {
  }

  navigatoToRegister(){
    this.router.navigateByUrl("/register");
  }

  logIn(email, password) {
    this.authService.SignIn(email.value, password.value)
      .then((res) => {
          this.router.navigate(['dashboard']);
      }).catch((error) => {
        window.alert(error.message)
      })
  }
  

}
