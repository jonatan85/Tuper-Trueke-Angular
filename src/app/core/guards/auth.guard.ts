import { AuthService } from './../services/auth/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map, take } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router
  ){}

  canActivate(
    
    route: ActivatedRouteSnapshot,
    
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.userLogged$.pipe(
      
      take(1),
      
      map((isLogged: boolean) => {
        
        if(isLogged) {return true;}
        
        return this.router.createUrlTree(['login']);
      })
    )
  }
}



