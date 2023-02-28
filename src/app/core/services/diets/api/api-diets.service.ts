import { Diets } from 'src/app/core/services/diets/diets.models';
import { ApiDiets } from './api.diets.models';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const DIETS_URL  = 'https://trabajo-final-node.vercel.app/diets/';

@Injectable({
  providedIn: 'root'
})
export class ApiDietsService {

  constructor(
    private http: HttpClient
  ) { }

  public getApiDiets(): Observable<ApiDiets[]> {
    return this.http.get<ApiDiets[]>(`${DIETS_URL}`);
  }
  public editApiPlates(id: string, body: Diets): Observable<ApiDiets> {
    console.log(id, body);
    
    return this.http.put<ApiDiets>(`${DIETS_URL}${id}`, body);
  }
}
