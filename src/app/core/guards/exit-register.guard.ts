import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterComponent } from './../../pages/register/register.component';


@Injectable({
  providedIn: 'root'
})
export class ExitRegisterGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: RegisterComponent,
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(component?.isRegister || !component?.registerForm?.dirty) {
      return true;
    }
    return window.confirm('Esta seguro de querer salir? No se guardara los datos de el formulario');
  }
}
