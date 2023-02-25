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
    private auth: AuthService,
    private router: Router
  ) {}

  logoutUser() {
    this.auth.logout();
    this.router.navigate(['home'])
  }
}
