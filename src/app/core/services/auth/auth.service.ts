import { IUser, IUserSingInResponse } from './models/auth.models';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject } from 'rxjs';
import { Injectable } from '@angular/core';

// Para JWEBTOKEN.
// const AUTH_URL = 'htp://';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userLogged$: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);

  constructor(
    private Http: HttpClient
  ) {
    this.userLogged$.next(false);
  }

  public login() {
    this.userLogged$.next(true);
  }
    
  public logout() {
    this.userLogged$.next(false);
  }
}
