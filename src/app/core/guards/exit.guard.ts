import { PlatesCreateComponent } from './../../pages/plates-create/plates-create.component';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ExitGuard implements CanDeactivate<PlatesCreateComponent> {
  canDeactivate(
    component: PlatesCreateComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(component?.isPlatesCreate || !component?.platesForm?.dirty) {
      return true;
    }
    return window.confirm('Esta seguro de querer salir? No se guardara los datos de el formulario');
  }
}



