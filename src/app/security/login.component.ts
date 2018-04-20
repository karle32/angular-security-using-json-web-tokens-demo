import { Component, OnInit } from '@angular/core';
import { AppUser } from './app-user';
import { AppUserAuth } from './app-user-auth';
import { SecurityService } from './security.service';

@Component({
  selector: 'ptc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: AppUser = new AppUser();
  securityObject: AppUserAuth = null;
  constructor(private securityService: SecurityService) { }

  ngOnInit() {
  }

  login() {
    this.securityService.login(this.user).subscribe(
      resp => {this.securityObject = resp; }
    );
  }

}
