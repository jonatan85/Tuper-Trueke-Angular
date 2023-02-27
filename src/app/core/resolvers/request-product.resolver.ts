import { PlatesService } from 'src/app/core/services/plates/plates.service';
import { Plates } from 'src/app/core/services/plates/plates.models';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
                                            
export class RequestProductResolver implements Resolve<Plates | null> { 
  
  constructor(
    private platesSevice: PlatesService
  ){}  
  
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Plates | null> { 

    const id = route.params['id']
   
    if(!id) {return of(null)}

    return this.platesSevice.getPlateDetail(id);
  }
}
