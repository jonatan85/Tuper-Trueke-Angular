import { ApiDiets } from './api.diets.models';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const DIETS_URL  = 'https://trabajo-final-node.vercel.app';

@Injectable({
  providedIn: 'root'
})
export class ApiDietsService {

  constructor(
    private http: HttpClient
  ) { }

  public getApiDiets(): Observable<ApiDiets[]> {
    return this.http.get<ApiDiets[]>(`${DIETS_URL}/ingredients`);
  }
}
