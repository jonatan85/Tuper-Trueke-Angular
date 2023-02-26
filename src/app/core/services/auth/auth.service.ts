import { Register } from './models/register.models';
import { HttpClient, HttpHeaders, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, of, ReplaySubject, tap } from 'rxjs';
import { AuthError, IUser, IUserSignInResponse } from './models/auth.models';

const AUTH_URL = 'https://trabajo-final-node.vercel.app';

const TOKEN_KEY = 'user-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userLogged$: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.userLogged$.next(this.isLoggedJWT());
  }

  public login() {
    this.userLogged$.next(true);
  }
    
  public logout() {
    this.userLogged$.next(false);
  }

  public loginJWT(user: IUser): Observable<IUserSignInResponse> {
    return this.http.post<IUserSignInResponse>(`${AUTH_URL}/user/login-jwt?`, user).pipe(
      tap((res: IUserSignInResponse) => {
        const userToStore = JSON.stringify({
          token: res.token,
          id: res.user._id,
          email: res.user.email
        });
        localStorage.setItem(TOKEN_KEY, userToStore);
        this.userLogged$.next(true);
        this.router.navigate(['account']);
      })
    );
  }
  public register(user: Register): Observable<Register> {
    return this.http.post<Register>(`${AUTH_URL}/user/register`, user);
  }

  public logoutJWT() {
    const removeToken = localStorage.removeItem(TOKEN_KEY);
    this.userLogged$.next(false);
    if (removeToken !== null) {
      this.router.navigate(['']);
    }
  }

  public isLoggedJWT(): boolean {
    const authToken = localStorage.getItem(TOKEN_KEY);
    if (!authToken) { return false; }
    const isValidToken = JSON.parse(authToken)?.token;
    return !!isValidToken;
  }
  public getToken(): string | null {
    const authToken = localStorage.getItem(TOKEN_KEY);
    return authToken ? JSON.parse(authToken)?.token : null;
  }
}
