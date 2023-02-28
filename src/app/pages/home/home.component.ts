import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  public isLogged: boolean = false;

  constructor(
    private router: Router,
    private auth: AuthService,
    ){}

  public ngOnInit(): void {
    this.auth.userLogged$.subscribe((isLogged) => this.isLogged = isLogged);
  }
  

  public navigateToLogout() {
    this.router.navigate(['account']);
  }
}
