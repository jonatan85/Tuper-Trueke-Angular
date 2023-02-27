import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {

  constructor(
    private router : Router,
    private auth: AuthService,
  ) {}

  logoutUser() {
    this.auth.logoutJWT();
      this.router.navigate(['home']);
    
  }
}
