import { diets } from 'src/app/core/services/diets/diets.data';
import { Injectable } from '@angular/core';
import { catchError, filter, forkJoin, map, Observable, tap } from 'rxjs';
import { ApiPlatesService } from './api/api-plates.service';
import { DietsService } from '../diets/diets.service';
import { LoadingService } from '../loading/loading.service';
import { Plates } from './plates.models';
import { ApiPlates } from './api/api-plates.models';
import { transformPlates} from './plates.helpers';

@Injectable({
  providedIn: 'root'
})
export class PlatesService {

  constructor(
    private apiPlatesService: ApiPlatesService,
    private dietsService: DietsService,
    private loadingService: LoadingService
  ) { }

  

  
  public getPlates(): Observable<Plates[]> {
    this.loadingService.showLoading();
    return this.apiPlatesService.getApiPlates().pipe(
      map((plates: ApiPlates[]) => {
  
        return plates.map((plates) => transformPlates(plates))
      }),
      tap(() => this.loadingService.hideLoading())
      
    );
  }

  public getPlateDetail(id: string): Observable<Plates> {
    return forkJoin([
      this.apiPlatesService.getApiPlatesDetail(id),
      this.dietsService.getPlates().pipe(
        catchError((err) => {
          return [];
        })
      )
    ]).pipe(
      map(([apiPlates, diets]) => {
        const selectedDiets = diets.find((diets) => diets.name === apiPlates.diets); 
        return transformPlates(apiPlates, selectedDiets);
      })
    );
  }

  public deletePlate(id: string): Observable<Plates> {
    console.log(id);
    return this.apiPlatesService.deleteApiPlates(id).pipe(  
      map((plates) => transformPlates(plates))
    )
  }


  public createPlates(body: Plates): Observable<Plates> {
    return this.apiPlatesService.createApiPlates(body).pipe(
      map((plates) => transformPlates(plates))
    );
  }

  public editPlates(id: string, body: Plates): Observable<Plates> {
    return this.apiPlatesService.editApiPlates(id, body).pipe(    
      map((plates) => transformPlates(plates))
    );
  }
}
