import { ApiDiets } from './api/api.diets.models';
import { ApiDietsService } from './api/api-diets.service';
import { Diets } from './diets.models';
import { map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DietsService {

  constructor(
    private apiDietsService: ApiDietsService 
  ) { }

  public getPlates(): Observable<Diets[]> {
    return this.apiDietsService.getApiDiets().pipe(
      map((apiDiets: ApiDiets[]) => { 
        return apiDiets.map((apiDiets) => ({
          name: apiDiets.name,
          img: apiDiets.img,
          description: apiDiets.description,
          id: apiDiets._id
        }));
      })
    );
  }
}
